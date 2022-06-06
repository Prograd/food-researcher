import { useAppDispatch, useAppSelector } from '../../services/store';
import { useEffect } from 'react';
import { productListingSlice } from './store';
import { Button, Table } from 'antd';
import { Layout } from '../../ui-components/layouts/layout';
import { Product } from '@food-researcher/backend/dist/backend.types';
import { backend } from '../../services/backend';

const columns = [
  {
    title: 'Nazwa',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Opis',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Ilość',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Akcje',
    key: 'id',
    dataIndex: 'id',
    render: (_: any, product: Product) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const dispatch = useAppDispatch();

      return (
        <Button
          danger
          onClick={() => {
            return backend.removeProduct(product.id).then(() => {
              dispatch(productListingSlice.actions.productsLoaded());
            });
          }}
        >
          Delete {product.id}
        </Button>
      );
    },
  },
];

export const ProductListingPage = () => {
  const dispatch = useAppDispatch();
  const request = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(productListingSlice.actions.productsLoaded());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Lista Produktów</h1>
      <Table rowKey={v => v.id} dataSource={request.products || []} columns={columns} />
    </Layout>
  );
};
