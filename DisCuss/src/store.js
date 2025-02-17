import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/user.slice";
import sessionStorage from "redux-persist/lib/storage/session"; 
import { persistReducer, persistStore } from "redux-persist";

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Redux Persist Configuration
const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); 

// Create store with middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
