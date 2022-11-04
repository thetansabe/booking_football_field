import React, { useState } from "react";
import { View } from "react-native";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import DetailStyle from "styles/DetailStyle";

export default function LocationIcon() {
  return (
    <>
      {/* location btn */}
      <View style={{ ...DetailStyle.iconContainer }}>
        <MaterialIcons name="location-pin" size={34} color="white" />
      </View>
    </>
  );
}
