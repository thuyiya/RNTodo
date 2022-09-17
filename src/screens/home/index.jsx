import React, { useMemo } from "react";
import {
  View,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { Typography, EmptryView, List, Input, Item } from "../../components";
import { theme, strings } from "../../constants";
import { addItems, removeItem, setSelectedIndex } from "./actions";

const Home = () => {
  const  todoList  = useSelector(state => state.items);
  const  selectedIndex  = useSelector(state => state.selectedIndex);
  const dispatch = useDispatch();


  const addTodo = (text) => {
    const newItem = {
      id: new Date().valueOf(),
      text: text,
    };
    dispatch(addItems(newItem));
  };

  const removeTodoItem = (id) => {
    dispatch(removeItem(id));
  };

  const onSelectItem = (index) => {
    dispatch(setSelectedIndex(index))
  };

  const getItemText = (dataArray) => {
    if (dataArray.length > 0 && selectedIndex > -1) {
      return todoList[selectedIndex].text;
    }

    return "";
  };

  console.log("todoList ", todoList)

  const updateText = useMemo(() => getItemText(todoList), [selectedIndex]);

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
        {todoList.map((item, itemIndex) => {
          return (
            <Item
              key={item.id}
              {...item}
              removeItem={() => removeTodoItem(item.id)}
              onSelect={() => onSelectItem(itemIndex)}
            />
          );
        })}
        {todoList.length < 1 && <EmptryView />}
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
