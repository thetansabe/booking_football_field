import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import COLORS from "const/colors";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import DetailStyle from "styles/DetailStyle";

import DateTimePicker from "@react-native-community/datetimepicker";
import { fieldBookingDateTime } from "store/booking-datetime";

export default function MainSchedule({setBookedDuration}) {
  const todayRaw = new Date();
  const formatedDate =
    todayRaw.getDate() +
    "/" +
    (todayRaw.getMonth() + 1) +
    "/" +
    todayRaw.getFullYear();

  //states for datetime picker
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");

  //states for render UI
  const [textDate, setTextDate] = useState(formatedDate);
  const [fromTime, setFromTime] = useState("FROM");
  const [toTime, setToTime] = useState("TO");

  // global states
  const {gDate, gToTime, gFromTime, updateDate, updateFromTime, updateToTime} = fieldBookingDateTime((state) => state);

  const pickerOnChange = (event, picked) => {
    const currDate = picked || gDate;
    setShowPicker(Platform.OS === "ios");

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

    //global states update
    updateDate(currDate)
    updateFromTime(new Date(tmpDate))
    updateToTime(new Date(tmpDate.getTime() + 60 * 60000))
  };

  const handlePickerMode = (mode) => {
    setShowPicker(true);
    setPickerMode(mode);
  };

  const handleOffset30 = (type) => {
    let tmp = new Date();

    if (type.toLowerCase() === "add") tmp = gToTime.getTime() + 30 * 60000;
    else tmp = gToTime.getTime() - 30 * 60000;

    const newTime = new Date(tmp);
    const newToTime = newTime.getHours() + ":" + newTime.getMinutes();

    updateToTime(newTime);
    setToTime(newToTime);
  };

  const calDuration = (from, to) => {
    const diff = Math.abs(to - from)
    const minDiff = Math.round(diff / 60000)
    
    const hours = Math.floor(minDiff / 60);
    const minutes = minDiff % 60;

    const strType = hours + 'h' + minutes + 'p';

    setBookedDuration(minDiff)
    return { strType, numType: minDiff };
  };

  const { strType, numType } =
    fromTime !== "FROM"
      ? calDuration(gFromTime, gToTime)
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

            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Chọn giờ</Text>
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

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={DetailStyle.clockIcon}
                onPress={() => handleOffset30("substract")}
              >
                <MaterialIcons
                  name="settings-backup-restore"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>

              <View style={{ width: 12 }}></View>
              <TouchableOpacity
                style={DetailStyle.clockIcon}
                onPress={() => handleOffset30("add")}
              >
                <MaterialIcons name="forward-30" size={24} color="white" />
              </TouchableOpacity>
            </View>

            <Text style={{ marginTop: 10, fontWeight: "bold" }}>± 30p</Text>
          </View>
        </View>

        {/* Picker */}
        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={gDate}
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
