import React, { useRef } from "react";
import { ScrollView } from "react-native";

const List = ({ children }) => {
  const scrollView = useRef();

  return (
    <ScrollView
      style={{ flex: 1 }}
      ref={(ref) => (scrollView.current = ref)}
      onContentChange={() => {
        scrollView.current.scrollToEnd({ animated: true });
      }}
      showsVerticalScrollIndicator={false}
    >
        {children}
    </ScrollView>
  );
};

export default List;
