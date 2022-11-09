import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "const/colors";
import { Text, TouchableOpacity } from "react-native";

const BackNavigation = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
      }}
      onPress={navigation.goBack}
    >
      <MaterialIcons name="arrow-back-ios" size={24} color={COLORS.green} />
      <Text style={{ color: COLORS.green, fontSize: 22, fontWeight: "bold" }}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

export default BackNavigation;
