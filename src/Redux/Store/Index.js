import { createStore } from "redux";
import loginReducer from "../Reducer/LoginReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, loginReducer)

   export const store = createStore(persistedReducer)
   export const persistor = persistStore(store)
