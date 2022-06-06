import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { backend } from '../../services/backend';
import { put, takeLeading } from 'redux-saga/effects';
import { Hello } from '@food-researcher/backend/dist/backend.types';

interface ProductListingState {
  pending: boolean;
  errors?: Record<string, string>;
  products?: Hello;
}

const initialState: ProductListingState = {
  pending: false,
};

export const productListingSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsLoaded(state) {
      state.pending = true;
    },

    productsLoadedSucceed(state, { payload }: PayloadAction<Hello>) {
      state.pending = false;
      state.products = payload;
    },

    productsLoadedFailure(state, { payload }: PayloadAction<Record<string, string>>) {
      state.pending = false;
      state.errors = payload;
    },
  },
});

export function* productsSaga() {
  yield takeLeading(productListingSlice.actions.productsLoaded, function* () {
    try {
      const result: Hello = yield backend.test();
      yield put(productListingSlice.actions.productsLoadedSucceed(result));
    } catch (e) {
      // @ts-ignore
      const errors = e.response.data;
      yield put(productListingSlice.actions.productsLoadedFailure(errors));
    }
  });
}
