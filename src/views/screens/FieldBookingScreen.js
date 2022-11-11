import ConfirmBooking from "components/field_detail/ConfirmBooking";
import MainSchedule from "components/field_detail/MainSchedule";
import BackNavigation from "components/share/BackNavigation";
import COLORS from "const/colors";
import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import ConfirmInfo from "components/field_detail/ConfirmInfo";

const FieldBookingScreen = ({ navigation, route }) => {
  const field = route.params;
  const [bookedDuration, setBookedDuration] = React.useState(0);

  const calTotalPrice = (field, dur) => {
    const pricePerMin = field.price / 60;
    return pricePerMin * dur;
  };

  return (
    <SafeAreaView>
      {/* BACKER NAV */}
      <BackNavigation navigation={navigation} />

      {/* FIELD ORDER */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
          Đặt giờ đá
        </Text>
        <View style={{ borderTopWidth: 4, borderColor: COLORS.green }}></View>
      </View>

      <MainSchedule setBookedDuration={setBookedDuration} />

      {/* CONFIRM */}
      <ConfirmInfo fieldInfo={field} />

      <ConfirmBooking
        field={field}
        bookedDuration={bookedDuration}
        totalPrice={calTotalPrice(field, bookedDuration)}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default FieldBookingScreen;
