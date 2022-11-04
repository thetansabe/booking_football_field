import { View, Text } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "views/screens/HomeScreen";
import COLORS from "const/colors";
import DetailsScreen from "views/screens/DetailsScreen";
import ServiceScreen from "views/screens/ServiceScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="DetailsScreen" component={DetailsScreen} />
      <Tab.Screen name="ServiceScreen" component={ServiceScreen} 
        options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color="black" />
            ),
          }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
