import React from "react";
import { ImageBackground, View } from "react-native";

import COLORS from "const/colors";
import { MaterialIcons } from "@expo/vector-icons";

import DetailStyle from "styles/DetailStyle";
import { StatusBar } from "expo-status-bar";

export default function TopBackground({field, navigation}) {
  return (
    <View>
      <StatusBar barSyle="light-content" />

      <ImageBackground
        style={{ ...DetailStyle.headerImage }}
        source={field.image}
      >
        <View style={{ ...DetailStyle.header }}>
          <View
            style={{
              padding: 2,
              backgroundColor: COLORS.green,
              borderRadius: 50,
              opacity: 0.8,
              marginTop: 4,
            }}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={38}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
          </View>

          <View
            style={{
              padding: 6,
              backgroundColor: COLORS.green,
              borderRadius: 50,
              opacity: 0.8,
            }}
          >
            <MaterialIcons
              name="bookmark-border"
              size={34}
              color={COLORS.white}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
