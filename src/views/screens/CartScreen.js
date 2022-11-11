import CartCard from "components/service/CartCard";
import BackNavigation from "components/share/BackNavigation";
import drinks from "const/drinks";
import { currencyFormat } from "helpers/helperFunction";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { cartStore } from "store/cart-items";
import DetailStyle from "styles/DetailStyle";
import { userInfo } from "store/user-info";
import { CART_PURCHASE } from "const/apiLinks";
import React from "react";
import STYLES from "styles/SignStyle";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import COLORS from "const/colors";
const CartScreen = ({ navigation }) => {
  // const addedItems = drinks._embedded.items;
  
  //global state
  const { info } = userInfo((state) => state);
  const { cart, updateCart } = cartStore((state) => state);

  const [ phone, setPhone ] = React.useState("");
  const [ payStatus, setPayStatus ] = React.useState("");

  const handleDeleteFromCart = (delId) => {
    const newCart = cart.filter((item) => item.resourceId != delId);
    updateCart(newCart);
  };

  const handleAddQuantity = (addId) => {
    const newCart = cart.map((item) =>
      item.resourceId === addId
        ? { ...item, buyQuantity: item.buyQuantity + 1 }
        : item
    );

    updateCart(newCart);
  };

  const handleReduceQuantity = (reduceId) => {
    const newCart = cart.map((item) =>
      item.resourceId === reduceId
        ? { ...item, buyQuantity: Math.max(item.buyQuantity - 1, 1) }
        : item
    );

    updateCart(newCart);
  };

  const totalCost = cart.reduce((prev, current) => {
    const itemCost = current.importPrice * current.buyQuantity;
    return prev + itemCost;
  }, 0);

  const handleCartPurchase = async (cart, info, phone, setPayStatus ) => {
    if (!info.token) {
      navigation.navigate("LoginScreen");
    }

    const items = cart.map((item) => ({
      id: item.resourceId,
      quantity: item.buyQuantity,
    }));

    const body = {
      phone: phone,
      items,
    };
    console.log("api body", body);

    try {
      const resp = await fetch(CART_PURCHASE, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${info.token}`,
        },
      });

      const data = await resp.json();
      console.log("purchase response: ", data);
      if(data.status === 403){
        navigation.navigate("LoginScreen");
      }

      if (data.status === 200) {
        //success
        setPayStatus(data.payment_status)
      }
    } catch (e) {
      console.log(
        "🚀 ~ file: CartScreen.js ~ line 78 ~ handleCartPurchase ~ e",
        e
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER NAV */}
      <BackNavigation navigation={navigation} />

      {/* phone */}
      <View
        style={{
          ...STYLES.inputContainer,
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <MaterialIcons name="email" size={24} color={COLORS.green} />
        <TextInput
          placeholder="Số điện thoại xác nhận"
          style={STYLES.input}
          keyboardType="numeric"
          onChangeText={setPhone}
          value={phone}
        />
      </View>

      {/* MAIN LIST */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cart}
        renderItem={(itemInfo) => (
          <CartCard
            itemInfo={itemInfo}
            handleAddQuantity={handleAddQuantity}
            handleReduceQuantity={handleReduceQuantity}
            handleDeleteFromCart={handleDeleteFromCart}
          />
        )}
        ListFooterComponentStyle={{ marginTop: 20 }}
        ListFooterComponent={() => (
          // Thanh toan
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginLeft: 20,
                  top: 8,
                }}
              >
                Thành tiền
              </Text>
              <View style={DetailStyle.priceTag}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {currencyFormat(totalCost, " đ")}
                </Text>
              </View>
            </View>

            {/* status */}
            {payStatus && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                  marginHorizontal: 20
                }}
              >
                <Text style={{ fontSize: 18, color: COLORS.green }}>
                  Trạng thái thanh toán
                </Text>

                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: COLORS.yellow,
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ fontSize: 14, color: COLORS.fontDark }}>
                    {payStatus}
                  </Text>
                </View>
              </View>
            )}

            {/* BTN PAYMENT */}
            <TouchableOpacity
              style={DetailStyle.btn}
              onPress={() => handleCartPurchase(cart, info, phone, setPayStatus)}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                Thanh Toán
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
