import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import ServiceStyle from "styles/ServiceStyle";

import COLORS from "const/colors";

const FieldTags = ({ fields, setSelectedField, selectedField }) => {
  
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={ServiceStyle.serviceContainer}
    >
      {fields.map((field, index) => (
        <TouchableOpacity
          key={field.resourceId}
          activeOpacity={0.8}
          onPress={() => setSelectedField(field.resourceId)}
        >
          <View
            style={{
              ...ServiceStyle.serviceTag,
              backgroundColor:
                selectedField == field.resourceId ? COLORS.green : COLORS.floatBgDark,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{field.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FieldTags;
