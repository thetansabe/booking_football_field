import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import MainSchedule from "components/field_detail/MainSchedule";
import ConfirmBooking from "components/field_detail/ConfirmBooking";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "const/colors";

const FieldBookingScreen = ({ navigation, route }) => {
  const field = route.params;

  return (
    <SafeAreaView>
      {/* BACKER NAV */}
      <TouchableOpacity
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
        }}
        onPress={navigation.goBack}
      >
        <MaterialIcons name="arrow-back-ios" size={24} color={COLORS.green} />
        <Text style={{ color: COLORS.green, fontSize: 22, fontWeight: "bold" }}>
          Back
        </Text>
      </TouchableOpacity>

      {/* FIELD ORDER */}
      <MainSchedule />

      {/* CONFIRM */}
      <ConfirmBooking field={field} />
    </SafeAreaView>
  );
};

export default FieldBookingScreen;
