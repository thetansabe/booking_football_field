import COLORS from "const/colors";
import { generateDates } from "helpers/helperFunction";
import React from "react";
import {
    SafeAreaView,
    ScrollView, Text, View
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ScheduleStyle from "styles/ScheduleStyle";
import FieldTags from "./FieldTags";

const FieldSchedule = () => {
  const [pickedDate, setPickedDate] = React.useState(0);
  const [selectedField, setSelectedField] = React.useState(1); //field id

  const today = new Date();
  const days = generateDates(today, 10); //10 days after

//   fake data
  const schedules = [
    {
      from: "7:00",
      to: "8:00",
      status: "Booked",
    },
    {
      from: "9:00",
      to: "10:30",
      status: "Booked",
    },
    {
      from: "17:00",
      to: "18:00",
      status: "Out of service",
    },
  ];

  

  const fields = [
    {
      name: "Sân 1",
      type: "FIELD_5",
      resourceId: 1,
    },
    {
      name: "Sân 2",
      type: "FIELD_7",
      resourceId: 2,
    },
    {
      name: "Sân 3",
      type: "FIELD_11",
      resourceId: 3,
    },
  ];

  return (
    <SafeAreaView style={{ paddingHorizontal: 20, marginTop: 20 }}>
      {/* HEADER */}
      <View style={ScheduleStyle.divider}></View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Lịch sân đã đặt
      </Text>

      {/* SELECT DATE */}
      <ScrollView
        horizontal
        style={{ marginTop: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        {days.map((day, index) => (
          <TouchableOpacity
            onPress={() => {
              setPickedDate(index);
            }}
            style={{
              ...ScheduleStyle.box,
              backgroundColor:
                pickedDate == index ? COLORS.green : COLORS.floatBgDark,
            }}
            key={index}
          >
            <Text>{day.weekday}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {day.day}/{day.month}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* SELECT FIELD TAG */}
      <FieldTags
        fields={fields}
        setSelectedField={setSelectedField}
        selectedField={selectedField}
      />

      {/* RENDER STATUS */}
      {schedules.map((schedule, index) => (
        <View style={{ marginTop: 8 }} key={index}>
          <View style={ScheduleStyle.timeContainer}>
            <Text>
              {schedule.from} - {schedule.to}
            </Text>
            <View>
              <Text style={{ fontWeight: "bold" }}>{schedule.status}</Text>
            </View>
          </View>
        </View>
      ))}

      
    </SafeAreaView>
  );
};

export default FieldSchedule;
