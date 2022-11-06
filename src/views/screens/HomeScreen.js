import {
  FlatList, SafeAreaView, ScrollView, Text, TextInput, View
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import COLORS from "const/colors";
import fields from "const/fields";
import HomeStyle from "styles/HomeStyle";

import CategoryContainer from "components/home/CategoryContainer";
import HomeScreenHeader from "components/home/HomeScreenHeader";
import FieldCard from "components/home/HomeScreenMainCard";
import NearestField from "components/home/NearestField";

const HomeScreen = ({ navigation }) => {
  

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

        {/* MAIN CARD LIST */}
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

        {/* SUB CARD LIST -> nearest field */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: COLORS.fontDark }}>
            Near me
          </Text>

          <Text style={{ fontWeight: "bold", color: COLORS.grey }}>
            Show all
          </Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          data={fields}
          renderItem={(item, index) => <NearestField field={item} navigation={navigation}/>}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
