import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, View, Text, TextInput, Image, LogBox, Button } from "react-native";
import COLORS from "const/colors";
import STYLES from "styles/SignStyle";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUpScreen = ({ navigation }) => {
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
  };

  //states for gender picker
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const [gender, setGender] = React.useState([
    { label: "Nam", value: "MALE" },
    { label: "Nữ", value: "FEMALE" },
    { label: "Khác", value: "OTHER" },
  ]);

  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <View style={{ marginTop: 70 }}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: COLORS.green }}
          >
            Hello,
          </Text>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", color: COLORS.light }}
          >
            Đăng kí để đặt sân nhanh
          </Text>
        </View>

        {/* INPUTS */}
        <View style={{ marginTop: 20 }}>
          {/* fullname */}
          <View style={STYLES.inputContainer}>
            <FontAwesome name="user" size={24} color={COLORS.green} />
            <TextInput placeholder="Họ tên" style={STYLES.input} />
          </View>
          {/* email */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="email" size={24} color={COLORS.green} />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
          {/* username */}
          <View style={STYLES.inputContainer}>
            <FontAwesome name="user" size={24} color={COLORS.green} />
            <TextInput placeholder="Username" style={STYLES.input} />
          </View>
          {/* phone */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="email" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Số điện thoại"
              style={STYLES.input}
              keyboardType="numeric"
            />
          </View>
          {/* password */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="lock" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Mật khẩu"
              style={STYLES.input}
              secureTextEntry={true}
            />
          </View>
          {/* address */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="location-on" size={24} color={COLORS.green} />
            <TextInput placeholder="Địa chỉ" style={STYLES.input} />
          </View>
          {/* description */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="description" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Mô tả"
              style={STYLES.input}
              multiline={true}
            />
          </View>
          {/* dob */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              marginTop: 20,
              alignItems: 'center'
            }}
          >
            <Button
              title="Ngày sinh"
              onPress={() => setShowPicker(true)}
              color={COLORS.green}
            />

            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{textDate}</Text>
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

          {/* sex */}
          <DropDownPicker
            open={open}
            value={value}
            items={gender}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setGender}
            style={{ marginTop: 20, borderColor: COLORS.green }}
            textStyle={{
              fontSize: 15,
              color: COLORS.floatBgDark,
            }}
            placeholder="Giới tính"
            placeholderStyle={{
              color: "grey",
              fontSize: 18,
            }}
          />

          {/* BUTTON */}
          <View style={STYLES.btnPrimary}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Đăng Kí
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>

          {/* ALTERNATE OPTIONS */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require("assets/user_img/fb_icon.png")}
              />
            </View>
            <View style={{ width: 10 }}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require("assets/user_img/gg_icon.png")}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.light, fontWeight: "bold" }}>
            Đã có tài khoản?
          </Text>

          <View style={{ width: 4 }}></View>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: COLORS.green, fontWeight: "bold" }}>
              Đăng nhập ngay
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
