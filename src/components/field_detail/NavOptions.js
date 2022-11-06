import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import COLORS from "const/colors";

const NavOptions = ({ navigation, field }) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={{ borderTopWidth: 4, borderColor: COLORS.green }}></View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Đặt sân ngay
      </Text>

      {/* NAV OPTION */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",

          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 14,
            backgroundColor: COLORS.green,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("FieldBookingScreen", field)}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Đặt sân</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 14,
            backgroundColor: COLORS.green,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("ServiceScreen")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Dịch vụ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavOptions;
