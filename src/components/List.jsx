import React from "react";
import { ScrollView } from "react-native";

const List = ({ children }) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
        {children}
    </ScrollView>
  );
};

export default List;
