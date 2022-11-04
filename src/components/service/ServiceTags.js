import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import ServiceStyle from "styles/ServiceStyle";

import COLORS from "const/colors";

const ServiceTags = ({ categories, setSelectedCategory, selectedCategory }) => {
  
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={ServiceStyle.serviceContainer}
    >
      {categories.map((name, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategory(index)}
        >
          <View
            style={{
              ...ServiceStyle.serviceTag,
              backgroundColor:
                selectedCategory == index ? COLORS.green : COLORS.floatBgDark,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ServiceTags;
