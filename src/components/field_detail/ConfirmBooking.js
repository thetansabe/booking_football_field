import React from "react";
import { Text, View } from "react-native";

import DetailStyle from "styles/DetailStyle";
import { currencyFormat } from "helpers/helperFunction";

export default function ConfirmBooking({ field }) {
  return (
    <>
      {/* Total price */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tổng tiền: </Text>

        <View style={DetailStyle.priceTag}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
              marginLeft: 5,
            }}
          >
            {currencyFormat(field.price, " đ")}
          </Text>

          <Text style={{ fontSize: 16, color: "white", marginLeft: 4 }}>
            (sau sale)
          </Text>
        </View>
      </View>

      {/* Payment button */}
      <View style={DetailStyle.btn}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Đặt
        </Text>
      </View>
    </>
  );
}
