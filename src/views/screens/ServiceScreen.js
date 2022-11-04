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

const ServiceScreen = ({ navigation }) => {
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

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        {/* --- HEADER --- */}
        <HomeScreenHeader />

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
          renderItem={(item) => <ItemCard itemInfo={item} />}
        />
      </SafeAreaView>
    </>
  );
};

export default ServiceScreen;
