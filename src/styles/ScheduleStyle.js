import COLORS from "const/colors";
import { StyleSheet } from "react-native";
const ScheduleStyle = StyleSheet.create({
  divider: {
    width: 360,
    borderTopWidth: 4,
    borderColor: COLORS.green,

    marginTop: 20,
  },
  box: {
    height: 73,
    width: 63,
    borderColor: COLORS.green,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderColor: COLORS.green,
  },
});

export default ScheduleStyle;
