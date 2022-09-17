import { actionTypes } from "../../../constants";

const initialState = {
  items: [],
  selectedIndex: -1,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO.ADD_ITEM: {
      let newItems = [];
      if (state.selectedIndex > -1) {
        const oldArray = [...state.items];
        oldArray[state.selectedIndex] = {
          ...oldArray[state.selectedIndex],
          text: action.data.text,
        };
        newItems = oldArray;
      } else {
        newItems = [...state.items, action.data];
      }

      return {
        ...state,
        items: newItems,
        selectedIndex: -1
      };
    }
    case actionTypes.TODO.CLEAN_ITEMS: {
      return {
        ...state,
        items: [],
      };
    }
    case actionTypes.TODO.REMOVE_ITEMS: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.data),
        selectedIndex: -1
      };
    }
    case actionTypes.TODO.SET_SELECTED_ITEM: {
      return {
        ...state,
        selectedIndex: action.data,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
