import { useAppDispatch, useAppSelector } from '../../services/store';
import { useEffect } from 'react';
import { productListingSlice } from './store';

export const ProductListingPage = () => {
  const dispatch = useAppDispatch();
  const request = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(productListingSlice.actions.productsLoaded());
  }, []);

  return <> {request.pending ? 'Loading ...' : request?.products?.test} </>;
};
