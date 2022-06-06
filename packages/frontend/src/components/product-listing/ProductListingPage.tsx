import { useAppDispatch, useAppSelector } from '../../services/store';
import { useEffect } from 'react';
import { productListingSlice } from './store';
import { Header } from '../Header';

export const ProductListingPage = () => {
  const dispatch = useAppDispatch();
  const request = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(productListingSlice.actions.productsLoaded());
  }, []);

  return (
    <div>
        <Header></Header>
        <h1>LISTA RESTAURACJI</h1>
        <> {request.pending ? 'Loading ...' : request?.products?.test} </>;
    </div>
  )
};
