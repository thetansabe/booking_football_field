import React from "react";
import {
  ScrollView,
  View,
} from "react-native";

import TopBackground from "components/field_detail/TopBackground";
import LocationIcon from "components/field_detail/LocationIcon";
import FieldInfo from "components/field_detail/FieldInfo";
import MainSchedule from "components/field_detail/MainSchedule";
import ConfirmBooking from "components/field_detail/ConfirmBooking";

const DetailsScreen = ({ navigation, route }) => {
  const field = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    >
      <TopBackground field={field} navigation={navigation}/>

      <View>
        {/* LOCATION */}
        <LocationIcon/>

        {/* CONTENT */}
        <FieldInfo field={field}/>

        {/* MAIN SCHEDULE */}
        <MainSchedule/>

        {/* CONFIRM */}
        <ConfirmBooking field={field}/>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
