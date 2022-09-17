import { legacy_createStore as createStore } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import todoReducer from '../screens/home/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)