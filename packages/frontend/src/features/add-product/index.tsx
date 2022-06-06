import React from 'react';
import { Form, Input } from 'antd';
import { Formik } from 'formik';
import { Product } from '@food-researcher/backend/dist/backend.types';
import { backend } from '../../services/backend';
import { Layout } from '../../ui-components/layouts/layout';
import { useNavigate } from 'react-router-dom';

export const AddProductContainer = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1>DODAJ LOKAL</h1>
      <div className={'form-style'}>
        <Formik
          initialValues={{
            name: 'test',
            description: 'hello world',
            quantity: 1,
          }}
          onSubmit={(values: Partial<Product>) => {
            backend.sendProduct(values).then(() => navigate('/'));
          }}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <Form
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 4 }}
              layout="horizontal"
              initialValues={values}
              onSubmitCapture={handleSubmit}
            >
              <Form.Item label="Nazwa">
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </Form.Item>
              <Form.Item label="Opis">
                <Input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </Form.Item>
              <Form.Item label="Ilość">
                <Input
                  type="number"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                />
              </Form.Item>
              <Input type={'submit'} value={'dodaj'} />
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};
