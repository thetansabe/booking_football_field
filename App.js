import React, { useState, useEffect } from "react";
import { StatusBar, Text } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "views/screens/HomeScreen";
import COLORS from "const/colors";
import DetailsScreen from "views/screens/DetailsScreen";
import ServiceScreen from "views/screens/ServiceScreen";

import * as Location from "expo-location";
import BottomNavigation from "navigation/BottomNavigation";
import CartScreen from "views/screens/CartScreen";

const Stack = createStackNavigator();

const App = () => {
  //// GET LOCATION
  // const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);

  //   const long = location.coords.longitude
  //   const lat = location.coords.latitude

  // }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <BottomNavigation/>

    </NavigationContainer>
  );
};

export default App;
