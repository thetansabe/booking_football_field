import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";

import { FontAwesome, AntDesign } from "@expo/vector-icons";
import COLORS from "const/colors";

import HomeStyle from "styles/HomeStyle";


const FieldCard = ({ fbField, index }) => {
  return (
    <View style={{ ...HomeStyle.fieldCard }}>
      {/* Preview Image */}
      <Image source={fbField.item.image} style={{ ...HomeStyle.cardImg }} />

      {/* Details */}
      <View style={{ ...HomeStyle.cardDetail }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* Content */}
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              {fbField.item.name}
            </Text>

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: COLORS.green,
              }}
            >
              19 Nguyễn Hữu Thọ, Quận 7
            </Text>
          </View>

          {/* Bookmark */}
          <FontAwesome name="bookmark-o" size={24} color={COLORS.green} />
        </View>

        {/* Rating */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} color="grey" />
          </View>

          <Text style={{ fontSize: 12, color: "grey" }}>111 reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default FieldCard;
