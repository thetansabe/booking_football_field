import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DobPicker from "components/sign_up/DobPicker";
import GenderPicker from "components/sign_up/GenderPicker";
import { REGISTER } from "const/apiLinks";
import COLORS from "const/colors";
import React from "react";
import {
  Image,
  LogBox,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import STYLES from "styles/SignStyle";

const SignUpScreen = ({ navigation }) => {
  const [regInfo, updateRegInfo] = React.useState({
    sex: "",
    dob: "",
    phone: "",
    email: "",
    description: "",
    address: "",
    fullName: "",
    username: "",
    password: "",
  });
  console.log("reg infos: ", regInfo);

  React.useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleRegister = async (body) => {
    try {
      const resp = await fetch(REGISTER, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await resp.json();

      console.log("register data: ", data);
      if (data.status === 200) {
        console.log('register thanh cong, tien hanh ...');
      }
    } catch (e) {
      console.log(
        "🚀 ~ file: SignUpScreen.js ~ line 30 ~ handleRegister ~ e",
        e
      );
    }
  };

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
            <TextInput
              placeholder="Họ tên"
              style={STYLES.input}
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, fullName: value }))
              }
              value={regInfo.fullName}
            />
          </View>
          {/* email */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="email" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Email"
              style={STYLES.input}
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, email: value }))
              }
              value={regInfo.email}
            />
          </View>
          {/* username */}
          <View style={STYLES.inputContainer}>
            <FontAwesome name="user" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Username"
              style={STYLES.input}
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, username: value }))
              }
              value={regInfo.username}
            />
          </View>
          {/* phone */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="email" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Số điện thoại"
              style={STYLES.input}
              keyboardType="numeric"
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, phone: value }))
              }
              value={regInfo.phone}
            />
          </View>
          {/* password */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="lock" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Mật khẩu"
              style={STYLES.input}
              secureTextEntry={true}
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, password: value }))
              }
              value={regInfo.password}
            />
          </View>
          {/* address */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="location-on" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Địa chỉ"
              style={STYLES.input}
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, address: value }))
              }
              value={regInfo.address}
            />
          </View>
          {/* description */}
          <View style={STYLES.inputContainer}>
            <MaterialIcons name="description" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Mô tả"
              style={STYLES.input}
              multiline={true}
              onChangeText={(value) =>
                updateRegInfo((prev) => ({ ...prev, description: value }))
              }
              value={regInfo.description}
            />
          </View>

          {/* dob */}
          <DobPicker regInfo={regInfo} updateRegInfo={updateRegInfo} />

          {/* SEX */}
          <GenderPicker regInfo={regInfo} updateRegInfo={updateRegInfo} />

          {/* BUTTON */}
          <TouchableOpacity style={STYLES.btnPrimary} onPress={() => handleRegister(regInfo)}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Đăng Kí
            </Text>
          </TouchableOpacity>

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
