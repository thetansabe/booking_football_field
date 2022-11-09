
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import DetailsScreen from "views/screens/DetailsScreen";
import HomeScreen from "views/screens/HomeScreen";
import ServiceScreen from "views/screens/ServiceScreen";

import CartScreen from "views/screens/CartScreen";
import FieldBookingScreen from "views/screens/FieldBookingScreen";
import SignInScreen from "views/screens/SignInScreen";
import SignUpScreen from "views/screens/SignUpScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="FieldBookingScreen" component={FieldBookingScreen} />
        <Stack.Screen name="LoginScreen" component={SignInScreen}/>
        <Stack.Screen name="RegisterScreen" component={SignUpScreen}/>
      </Stack.Navigator>
  )
}

export default StackNavigation