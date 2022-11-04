import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import COLORS from "const/colors";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import DetailStyle from "styles/DetailStyle";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function MainSchedule() {
  const todayRaw = new Date();
  const formatedDate =
    todayRaw.getDate() +
    "/" +
    (todayRaw.getMonth() + 1) +
    "/" +
    todayRaw.getFullYear();

  const [date, setDate] = useState(todayRaw);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");

  const [textDate, setTextDate] = useState(formatedDate);
  const [fromTime, setFromTime] = useState("FROM");
  const [toTime, setToTime] = useState("TO");

  const pickerOnChange = (event, picked) => {
    const currDate = picked || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currDate);

    let tmpDate = new Date(currDate);

    let fDate =
      tmpDate.getDate() +
      "/" +
      (tmpDate.getMonth() + 1) +
      "/" +
      tmpDate.getFullYear();
    setTextDate(fDate);

    let fFromTime = tmpDate.getHours() + ":" + tmpDate.getMinutes();
    let fToTime = tmpDate.getHours() + 1 + ":" + tmpDate.getMinutes();
    setFromTime(fFromTime);
    setToTime(fToTime);
  };

  const handlePickerMode = (mode) => {
    setShowPicker(true);
    setPickerMode(mode);
  };

  // viet lai ham nay
  const handleAdd30 = () => {
    const toPart = toTime.split(":");
    const cal = parseInt(toPart[1]) + 30;

    let newToTime = "";

    if (cal >= 60) {
      newToTime = toPart[0] + 1 + ":" + "00";
      setToTime(newToTime);
      return;
    } else {
      newToTime = toPart[0] + ":" + cal;
      setToTime(newToTime);
      return;
    }
  };

  const calDuration = (from, to) => {
    const fromPart = from.split(":");
    const toPart = to.split(":");

    const hourDiff = parseInt(toPart[0]) - parseInt(fromPart[0]);
    const minDiff = Math.abs(parseInt(toPart[1]) - parseInt(fromPart[1]));

    const strType = hourDiff + "h" + minDiff + "p";
    const numType = hourDiff * 60 + minDiff;

    return { strType, numType };
  };

  const { strType, numType } =
    fromTime !== "FROM"
      ? calDuration(fromTime, toTime)
      : { strType: "pick time", numType: 0 };

  return (
    <>
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {/* Pick date */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title="Chọn ngày"
            onPress={() => handlePickerMode("date")}
            color={COLORS.green}
          />

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{textDate}</Text>
        </View>

        {/* Pick time */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* col left */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              width: 60,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{fromTime}</Text>

            <TouchableOpacity
              style={DetailStyle.clockIcon}
              onPress={() => handlePickerMode("time")}
            >
              <AntDesign name="clockcircleo" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* seperator */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View style={DetailStyle.seperator}></View>
            <Text style={{ fontSize: 20 }}>
              {fromTime !== "FROM" && strType}
            </Text>
          </View>

          {/* col right */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              width: 60,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{toTime}</Text>

            <TouchableOpacity
              style={DetailStyle.clockIcon}
              onPress={() => handleAdd30()}
            >
              <MaterialIcons name="forward-30" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Picker */}
        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={pickerMode}
            is24Hour={true}
            display="default"
            onChange={pickerOnChange}
          />
        )}
      </View>
    </>
  );
}
