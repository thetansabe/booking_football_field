import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeStyle from 'styles/HomeStyle'
import COLORS from "const/colors";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function HomeScreenHeader({navigation}) {
  return (
    <View style={HomeStyle.header}>
        {/* Left */}
        <View testID="HomeScreen_Header_Left">
          <Text style={{ fontSize: 30, fontWeight: "600" }}>Đặt sân tại</Text>
          <Text
            style={{ fontSize: 30, fontWeight: "600", color: COLORS.green }}
          >
            Hồ Chí Minh
          </Text>
        </View>

        {/* Right */}

        <View
          testID="HomeScreen_Header_Right"
          style={{ alignItems: "center", flexDirection: "row" }}
        >
          <View
            style={{
              backgroundColor: COLORS.floatBgDark,
              padding: 8,
              borderRadius: 50,
              marginRight: 12,
            }}
          >
            <AntDesign name="user" size={28} color="black" />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.floatBgDark,
              padding: 8,
              borderRadius: 50,
            }}

            onPress={() => navigation.navigate('LoginScreen')}
          >
            <MaterialIcons name="logout" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
  )
}