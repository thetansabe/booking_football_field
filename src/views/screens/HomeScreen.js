import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import COLORS from "const/colors";
import fields from "const/fields";
import HomeStyle from "styles/HomeStyle";

import HomeScreenHeader from "components/HomeScreenHeader";
import CategoryContainer from "components/CategoryContainer";

const HomeScreen = ({ navigation }) => {
  const FieldCard = ({ fbField, index }) => {
    
    return (
        <View
        style={{...HomeStyle.fieldCard}}
    >
        {/* tag */}
        <View style={HomeStyle.priceTag}>
            <Text
                style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}
            >${fbField.item.price}</Text>
        </View>
        {/* image */}
        <Image
            source={fbField.item.image}
            style={{...HomeStyle.cardImg}}
        />
    </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* --- HEADER --- */}
      <HomeScreenHeader />

      {/* --- SCROLLABLE SECTION --- */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SEARCH */}
        <View style={HomeStyle.searchInputContainer}>
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={{ marginLeft: 20 }}
          />

          <TextInput
            placeholder="Tìm kiếm sân ..."
            style={{ fontSize: 20, paddingLeft: 10 }}
          />
        </View>

        {/* CATEGORY LIST */}
        <CategoryContainer />

        {/* CARD LIST */}
        <View>
          <FlatList
            horizontal
            data={fields}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            renderItem={(item, index) => (
              <FieldCard fbField={item} key={index} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
