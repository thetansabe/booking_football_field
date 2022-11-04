import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import COLORS from "const/colors";
import HomeStyle from "styles/HomeStyle";

const CategoryContainer = () => {
  const categories = ["Tất cả", "Sân 5", "Sân 7", "Sân 11"];
  const [categorySelectedIndex, setCategoryIndex] = React.useState(0);

  return (
    <View style={HomeStyle.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setCategoryIndex(index)}
        >
          <View>
            <Text
              style={{
                ...HomeStyle.categoryText,
                color:
                  categorySelectedIndex == index
                    ? COLORS.green
                    : COLORS.fontDark,
              }}
            >
              {item}
            </Text>
          </View>

          {categorySelectedIndex == index && (
            <View
              style={{
                height: 3,
                width: 30,
                backgroundColor: COLORS.green,
                marginTop: 2,
              }}
            ></View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryContainer;
