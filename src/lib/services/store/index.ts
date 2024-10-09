import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { api } from '../api';
import storage from './storage';
import authSlice from '@/lib/features/authSlice';
import userSlice from '@/lib/features/userSlice';
import { createWrapper } from 'next-redux-wrapper';
import { State } from '../socket/SocketProvider/socketReducer/types';
import { useDispatch, useSelector, useStore } from 'react-redux';
import  storySlice  from '@/lib/features/storySlice';

const reducers = combineReducers({
  auth: authSlice,
  user: userSlice,
  story: storySlice,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

// TODO: inter type for state
const reducerProxy = (state: any, action: AnyAction) => {
  if (action.type === 'RESET') {
    return reducers(
      { device: state?.device, theme: state?.theme } as any,
      action
    );
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducerProxy);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };
export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return store;
  } else {
    const storeLocal: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    });
    storeLocal.__persistor = persistStore(store);
    return storeLocal;
  }
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore);
export const useAppDispatch = useDispatch?.withTypes<AppDispatch>();
export const useAppSelector = useSelector?.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
