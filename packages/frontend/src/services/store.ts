import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { productListingSlice, productsSaga } from '../components/product-listing/store';

export const createStore = () => {
  const saga = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      [productListingSlice.name]: productListingSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(saga),
  });

  saga.run(productsSaga);

  return store;
};
type StoreType = ReturnType<typeof createStore>;

export type State = ReturnType<StoreType['getState']>;
export const useAppDispatch = () => useDispatch<StoreType['dispatch']>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
