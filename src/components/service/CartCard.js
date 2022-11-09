import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import COLORS from "const/colors";
import { currencyFormat } from "helpers/helperFunction";
import {
  Image, Text, TouchableOpacity, View
} from "react-native";
import CartStyle from "styles/CartStyle";

const CartCard = ({ itemInfo, handleAddQuantity, handleReduceQuantity, handleDeleteFromCart }) => {
  const { index, item } = itemInfo;
  
  return (
    <View style={CartStyle.cartCard}>
      {/* left */}
      <Image source={item.image} style={{ height: 80, width: 80 }} />

      {/* middle */}
      <View
        style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: COLORS.green }}>
          {item.name}
        </Text>

        <Text style={{ fontSize: 16, color: COLORS.fontDark }}>
          {currencyFormat(item.importPrice, " đ")}/{item.unit}
        </Text>
        <Text style={{ fontSize: 16 }}>Còn lại: {item.quantity}</Text>
      </View>

      {/* right */}
      <View style={{ marginRight: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {item.buyQuantity}
        </Text>

        <View style={CartStyle.actionBtn}>
          <TouchableOpacity
            onPress={() => handleReduceQuantity(item.resourceId)}
          >
            <MaterialCommunityIcons name="minus" size={24} color="black" />
          </TouchableOpacity>

          <View style={{ width: 12 }}></View>
          <TouchableOpacity onPress={() => handleAddQuantity(item.resourceId)}>
            <MaterialIcons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* top right corner */}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 4,
          right: 8,
          backgroundColor: COLORS.green,
          width: 28,
          height: 28,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => handleDeleteFromCart(item.resourceId)}
      >
        <MaterialIcons name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;
