import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, View, Text, TextInput, Image } from "react-native";
import COLORS from "const/colors";
import STYLES from "styles/SignStyle";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}

        {/* HEADING */}
        <View style={{ marginTop: 70 }}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: COLORS.green }}
          >
            Welcome Back,
          </Text>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", color: COLORS.light }}
          >
            Đăng nhập để tiếp tục
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <MaterialIcons
              name="phone-android"
              size={24}
              color={COLORS.green}
            />

            <TextInput placeholder="Số điện thoại" style={STYLES.input} />
          </View>

          <View style={STYLES.inputContainer}>
            <MaterialIcons name="lock" size={24} color={COLORS.green} />
            <TextInput
              placeholder="Mật khẩu"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Sign In
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require("assets/user_img/fb_icon.png")}
              />
            </View>
            <View style={{ width: 10 }}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Sign in with
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
            Chưa có tài khoản ? 
          </Text>
          
          <View style={{width: 4}}></View>

          <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
            <Text style={{ color: COLORS.green, fontWeight: "bold" }}>
              Đăng kí
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
