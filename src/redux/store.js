import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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
import storage from 'redux-persist/lib/storage';
import { contacts, filter } from 'redux/phonebook/phonebook-slices';
import authReducer from './Authorization/auth-slices';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const phonebookReducer = combineReducers({
  contacts,
  filter,
});

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
