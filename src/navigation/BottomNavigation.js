import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "const/colors";
import "react-native-gesture-handler";
import CartScreen from "views/screens/CartScreen";
import HomeScreen from "views/screens/HomeScreen";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          borderTopWidth: 0,
          elevation: 0,
        },
        // tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Giỏ hàng"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="Lịch sử"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history-edu" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Thông báo"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
