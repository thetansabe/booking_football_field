import HomeScreenHeader from "components/home/HomeScreenHeader";
import ItemCard from "components/service/ItemCard";
import ServiceTags from "components/service/ServiceTags";
import COLORS from "const/colors";
import React from "react";
import {
  SafeAreaView, View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import drinks from "const/drinks";
import pitches from "const/pitches";
import BackNavigation from "components/share/BackNavigation";

import { cartStore } from "store/cart-items";
const ServiceScreen = ({ navigation }) => {
  ////CATEGORY NAV
  const categories = [
    "Thuê áo pitch",
    "Mua đồ uống",
    "Thuê trọng tài",
    "Giữ xe",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  //0: thue ao, 1: drink
  const [myItems, setMyItems] = React.useState(pitches._embedded.items);

  React.useEffect(() => {
    switch (selectedCategory) {
      case 0:
        setMyItems(pitches._embedded.items);
        break;

      case 1:
        setMyItems(drinks._embedded.items);
        break;
      default:
        break;
    }
  }, [selectedCategory]);

  //global state for cart
  const { cart, updateCart } = cartStore((state) => state)
  
  const handleAddToCart = (newItem) => {
    const isPresent = cart.find(item => item.resourceId === newItem.resourceId)
    if(isPresent) return

    const newCart = [...cart, {...newItem, buyQuantity: 1}]
    updateCart(newCart)
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        {/* --- HEADER --- */}
        <BackNavigation navigation={navigation}/>

        {/* FLOAT CATEGORY TAGS => NAVIGATE RENDER*/}
        <View>
          <ServiceTags
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </View>

        {/* MAIN RENDERED UI */}
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={myItems}
          renderItem={(item) => <ItemCard itemInfo={item} handleAddToCart={handleAddToCart}/>}
        />
      </SafeAreaView>
    </>
  );
};

export default ServiceScreen;
