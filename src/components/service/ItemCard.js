import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import ServiceStyle from "styles/ServiceStyle";
import COLORS from "const/colors";
import { currencyFormat } from "helpers/helperFunction";
import { MaterialIcons } from "@expo/vector-icons";

const ItemCard = ({ itemInfo }) => {
  const { index, item } = itemInfo;

  return (
    <TouchableHighlight underlayColor={COLORS.green} activeOpacity={0.9}>
      <View style={ServiceStyle.serviceCard}>
        <View style={{ alignItems: "center", top: -40 }}>
          <Image source={item.image} style={{ height: 110, width: 100 }} />
        </View>

        <View style={{ marginHorizontal: 16, top: -30 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: COLORS.green }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 14 }}>Còn lại: {item.quantity}</Text>
        </View>

        <Text
          style={{
            marginHorizontal: 16,
            fontSize: 16,
            fontWeight: "bold",
            top: -20,
          }}
        >
          {currencyFormat(item.importPrice, " đ")}/{item.unit}
        </Text>

        <View
          style={{
            marginTop: 10,
            marginHorizontal: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            top: -20,
          }}
        >
          <View style={ServiceStyle.addCartBtn}>
            <MaterialIcons name="bookmark-outline" size={24} color="black" />
          </View>

          <View style={ServiceStyle.addCartBtn}>
            <MaterialIcons name="add-shopping-cart" size={24} color="black" />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ItemCard;
