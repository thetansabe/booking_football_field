import DateTimePicker from "@react-native-community/datetimepicker";
import COLORS from "const/colors";
import React from "react";
import { Button, Text, View } from "react-native";
import "react-native-gesture-handler";
// import { regInfoStore } from "store/register-info";

const DobPicker = ({updateRegInfo}) => {
//   const { regInfo, updateRegInfo } = regInfoStore((state) => state);

  const formatDate = (date) => {
    const res = date
      .toISOString()
      .replace(/.\d+Z$/g, "")
      .replace("T", " ");
    return res;
  };

  ////states for datetime picker
  const [showPicker, setShowPicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [textDate, setTextDate] = React.useState("");

  const pickerOnChange = (event, picked) => {
    const currDate = picked || date;
    setShowPicker(Platform.OS === "ios");

    let tmpDate = new Date(currDate);

    let fDate =
      tmpDate.getDate() +
      "/" +
      (tmpDate.getMonth() + 1) +
      "/" +
      tmpDate.getFullYear();
    setTextDate(fDate);
    updateRegInfo((prev) => ({ ...prev, dob: formatDate(tmpDate)}));
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",

          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Button
          title="Ngày sinh"
          onPress={() => setShowPicker(true)}
          color={COLORS.green}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{textDate}</Text>
      </View>

      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={pickerOnChange}
        />
      )}
    </>
  );
};

export default DobPicker;
