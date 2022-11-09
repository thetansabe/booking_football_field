import React from "react";
import { Text, View } from "react-native";

import COLORS from "const/colors";
import { AntDesign } from "@expo/vector-icons";

export default function FieldInfo({ field }) {
  return (
    <>
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{field.name}</Text>

        <Text style={{ fontSize: 16, fontWeight: "bold", color: COLORS.green }}>
          19 Nguyễn Hữu Thọ, Quận 7
        </Text>

        <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white', marginTop: 20 }}>
          Mở cửa từ 6:00 đến 22:00
        </Text>

        <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white', marginTop: 10 }}>
          Giá từ 150,000k/h
        </Text>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} />
            <AntDesign name="star" size={15} color="grey" />
          </View>

          <Text style={{ fontSize: 12, color: "grey" }}>111 đánh giá</Text>
        </View>
      </View>
    </>
  );
}
