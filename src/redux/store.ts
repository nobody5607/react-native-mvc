import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {loginSlice, registerSlice} from '@redux/auth';
import {productSlice} from '@redux/product';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    product: productSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export type of root state from Slices
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
