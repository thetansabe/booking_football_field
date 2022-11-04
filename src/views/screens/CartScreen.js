import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import COLORS from "const/colors";
import CartStyle from "styles/CartStyle";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import drinks from "const/drinks";
import { currencyFormat } from "helpers/helperFunction";
import DetailStyle from "styles/DetailStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

const CartScreen = ({navigation}) => {
  const addedItems = drinks._embedded.items;
  const CartCard = ({ itemInfo }) => {
    console.log("item", itemInfo);
    const { index, item } = itemInfo;

    return (
      <View style={CartStyle.cartCard}>
        {/* left */}
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        {/* middle */}
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 20, color: COLORS.green }}
          >
            {item.name}
          </Text>

          <Text style={{ fontSize: 16, color: COLORS.fontDark }}>
            {currencyFormat(item.importPrice, " đ")}/{item.unit}
          </Text>
          <Text style={{ fontSize: 16 }}>Còn lại: {item.quantity}</Text>
        </View>
        {/* right */}
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>

          <View style={CartStyle.actionBtn}>
            <MaterialCommunityIcons name="minus" size={24} color="black" />
            <MaterialIcons name="add" size={24} color="black" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER NAV */}
      <TouchableOpacity style={CartStyle.header} onPress={navigation.goBack}>
        <MaterialIcons name="arrow-back-ios" size={24} color={COLORS.green} />
        <Text style={{ color: COLORS.green, fontSize: 22, fontWeight: "bold" }}>
          Services
        </Text>
      </TouchableOpacity>

      {/* MAIN LIST */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={addedItems}
        renderItem={(itemInfo) => <CartCard itemInfo={itemInfo} />}
        ListFooterComponentStyle={{ marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20, top: 8 }}>
                Thành tiền
              </Text>
              <View style={DetailStyle.priceTag}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                120,000.00 đ
              </Text>
              </View>
              
            </View>
            <View style={DetailStyle.btn}>
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Thanh Toán
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
