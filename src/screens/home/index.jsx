import React, { useMemo, useState } from "react";
import {
  View,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { Typography, EmptryView, List, Input, Item } from "../../components";
import { theme, strings } from "../../constants";

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const addTodo = (text) => {
    const newItem = {
      id: new Date().valueOf(),
      text: text,
    };

    if (selectedIndex > -1) {
      const oldArray = [...items];
      oldArray[selectedIndex] = {
        ...oldArray[selectedIndex],
        text: text,
      };
      setItems(oldArray);
    } else {
      setItems((prevState) => [...prevState, newItem]);
    }

    setSelectedIndex(-1);
  };

  const removeItem = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setSelectedIndex(-1);
  };

  const onSelectItem = (index) => {
    setSelectedIndex(index);
  };

  const getItemText = (dataArray) => {
    if (dataArray.length > 0 && selectedIndex > -1) {
      return items[selectedIndex].text;
    }

    return "";
  };

  const updateText = useMemo(() => getItemText(items), [selectedIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <Typography
        space={1}
        color={theme.colors.primary}
        align="left"
        weight="midBold"
        size="h2"
      >
        {strings.HOME.TITLE}
      </Typography>
      <List>
        {items.map((item, itemIndex) => {
          return (
            <Item
              key={item.id}
              {...item}
              removeItem={() => removeItem(item.id)}
              onSelect={() => onSelectItem(itemIndex)}
            />
          );
        })}
        {items.length < 1 && <EmptryView />}
      </List>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Input value={updateText} onChange={addTodo} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Home;
