import { ScrollView, View } from "react-native";

import FieldInfo from "components/field_detail/FieldInfo";
import FieldSchedule from "components/field_detail/FieldSchedule";
import LocationIcon from "components/field_detail/LocationIcon";
import NavOptions from "components/field_detail/NavOptions";
import TopBackground from "components/field_detail/TopBackground";

const DetailsScreen = ({ navigation, route }) => {
  const field = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    >
      <TopBackground field={field} navigation={navigation} />

      <View>
        {/* LOCATION */}
        <LocationIcon />

        {/* CONTENT */}
        <FieldInfo field={field} />

        {/* SCHEDULE */}
        <FieldSchedule />

        {/* FOOTER */}
        <NavOptions navigation={navigation} field={field}/>

      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
