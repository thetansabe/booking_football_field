import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import DetailStyle from "styles/DetailStyle";
import { currencyFormat } from "helpers/helperFunction";
import { BEARER_TOKEN, FIELD_ORDER } from "const/apiLinks";
import { fieldBookingStatusStore } from "store/booking-state";
import { fieldBookingDateTime } from "store/booking-datetime";
import {userInfo} from "store/user-info"

export default function ConfirmBooking({ navigation, field, bookedDuration, totalPrice }) {
  const {info} = userInfo(state => state)

  const { updateStatus } = fieldBookingStatusStore((state) => state);
  const { gToTime, gFromTime } = fieldBookingDateTime((state) => state);
  

  const handleOrder = async (body) => {
    // body : {fieldId, startTime, toTime, phone}
    // console.log(body);
    // console.log('token: ', info.token);

    if(!info.token) {
      navigation.navigate('LoginScreen')
    }

    try {
      const resp = await fetch(FIELD_ORDER, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${info.token}`,
        },
      });

      const data = await resp.json();
      // console.log('field booking res: ',data);
      if (data.status === 200) {
        updateStatus(data.payment_status);
      }
    } catch (e) {
      console.log(
        "🚀 ~ file: ConfirmBooking.js ~ line 16 ~ handleOrder ~ e",
        e
      );
    }
  };

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
            {currencyFormat(totalPrice, " đ")}
          </Text>

          {/* <Text style={{ fontSize: 16, color: "white", marginLeft: 4 }}>
            (sau sale)
          </Text> */}
        </View>
      </View>

      {/* Payment button */}
      {/* body : {field_id: field.resourceId, start_time: gFromTime, end_time: gToTime, phone: "0342343249"} */}
      <TouchableOpacity
        style={DetailStyle.btn}
        onPress={() =>
          handleOrder({
            field_id: field.resourceId,
            start_time: gFromTime.toISOString().replace(/.\d+Z$/g, ""),
            end_time: gToTime.toISOString().replace(/.\d+Z$/g, ""),
            phone: "0342343249",
          })
        }
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Đặt
        </Text>
      </TouchableOpacity>
    </>
  );
}
