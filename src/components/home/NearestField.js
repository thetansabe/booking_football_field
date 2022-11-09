import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";

import COLORS from "const/colors";
import HomeStyle from "styles/HomeStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

const NearestField = ({ field, navigation }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("DetailsScreen", field.item)}>

        <View style={{ ...HomeStyle.nearestFieldCard }}>
        <Image
            style={{ ...HomeStyle.nearestFieldCardImg }}
            source={field.item.image}
        />

        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {field.item.name}
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: COLORS.green }}>
            19 Nguyễn Hữu Thọ, Quận 7
            </Text>
            <View style={{ flexDirection: "row-reverse" }}>
            <Text style={{ fontSize: 10, fontWeight: COLORS.grey }}>1.2 km</Text>
            </View>
        </View>
        </View>
    </TouchableOpacity>
  );
};

export default NearestField;
