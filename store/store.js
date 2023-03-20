import { configureStore, combineReducers } from '@reduxjs/toolkit'

import storage from "redux-persist/lib/storage"

import PaySlice from "./PaySlice";
import HistorySlice from "./HistorySlice";
import PaymentSlice from "./PaymentSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import MainSlice from "./MainSlice";




const rootReducer = combineReducers({PaySlice,
    HistorySlice,
    MainSlice,
    PaymentSlice})


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
            }
        })
})
export const persister = persistStore(store)
export default store