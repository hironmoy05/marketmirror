import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { signoutRequest } from './api';
import appReducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast'; 
import api from './middleware/api';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

// const importData = async () => {
//     try {
//       const keys = await AsyncStorage.getAllKeys();
//       const result = await AsyncStorage.multiGet(keys);
  
//     //   return result.map(req => JSON.parse(req)).forEach(console.log);
//       return result.map(req => req.forEach(console.log))
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   console.log(importData());


const rootReducer = (state, action) => {
    if (action.type === signoutRequest.type) {
        // for all keys defined in your persistConfig(s)
        AsyncStorage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
        // .concat(logger({destination: 'console'}))
        .concat(api)
        .concat(toast)
});

export const persistor = persistStore(store);