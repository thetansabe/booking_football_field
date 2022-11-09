import CartCard from "components/service/CartCard";
import BackNavigation from "components/share/BackNavigation";
import drinks from "const/drinks";
import { currencyFormat } from "helpers/helperFunction";
import {
  FlatList, SafeAreaView, Text, View
} from "react-native";
import { cartStore } from "store/cart-items";
import DetailStyle from "styles/DetailStyle";

const CartScreen = ({ navigation }) => {
  // const addedItems = drinks._embedded.items;

  //global state
  const { cart, updateCart } = cartStore((state) => state);

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
    const itemCost = current.importPrice * current.buyQuantity
    return prev + itemCost;
}, 0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER NAV */}
      <BackNavigation navigation={navigation} />

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
                  {currencyFormat(totalCost, ' đ')}
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
