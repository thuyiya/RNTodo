import { actionTypes } from "../../../constants";

export function addItems(payload) {
	return {
		type: actionTypes.TODO.ADD_ITEM,
		data: payload,
	};
}

export function setSelectedIndex(payload) {
    return {
		type: actionTypes.TODO.SET_SELECTED_ITEM,
		data: payload,
	};
}

export function removeItem(payload) {
    return {
		type: actionTypes.TODO.REMOVE_ITEMS,
		data: payload,
	};
}

export function cleanAllItems() {
	return {
		type: actionTypes.TODO.CLEAN_ITEMS
	};
}
