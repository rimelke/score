import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import favorites from "./favorites";

const persistConfig = {
  key: "score",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favorites);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
