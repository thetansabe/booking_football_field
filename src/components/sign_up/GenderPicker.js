import COLORS from "const/colors";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import "react-native-gesture-handler";
import STYLES from "styles/SignStyle";

const GenderPicker = ({ regInfo, updateRegInfo }) => {
  const radioBtnsData = ["MALE", "FEMALE", "OTHER"];
  const [radioSelected, setRadioSelected] = React.useState(-1);

  const RadioBtn = ({ val, index, setRadioSelected, radioSelected }) => (
    <TouchableOpacity
      onPress={() => {
        setRadioSelected(index);
        updateRegInfo((prev) => ({ ...prev, sex: val }));
      }}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <View
        style={{
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: COLORS.green,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {index == radioSelected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: COLORS.green,
            }}
          />
        ) : null}
      </View>

      <Text style={{ marginHorizontal: 4 }}>{val}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: STYLES.input,
          alignItems: "center",
        }}
      >
        Giới tính
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 260,
        }}
      >
        {radioBtnsData.map((value, index) => (
          <RadioBtn
            key={value}
            val={value}
            index={index}
            setRadioSelected={setRadioSelected}
            radioSelected={radioSelected}
          />
        ))}
      </View>
    </View>
  );
};

export default GenderPicker;
