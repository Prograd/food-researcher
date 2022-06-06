import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

import { Header } from '../../components/Header';
import { TextareaAutosize } from '@material-ui/core';

type SizeType = Parameters<typeof Form>[0]['size'];

export const AddProductContainer: React.FC  = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <Header></Header>
      <h1>DODAJ LOKAL</h1>
      <div className={"form-style"} >
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 4 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize as SizeType}
        >
          <Form.Item label="Nazwa restauracji">
            <Input />
          </Form.Item>
          <Form.Item label="Rodzaj kuchni">
            <Select>
              <Select.Option value="Meksykańska">Meksykańska</Select.Option>
              <Select.Option value="Włoska">Włoska</Select.Option>
              <Select.Option value="Polska">Polska</Select.Option>
              <Select.Option value="Azjatycka">Azjatycka</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Miasto">
            <Select>
              <Select.Option value="Poznan">Poznań</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ulica">
            <Input />
          </Form.Item>
          <Form.Item label="Numer budynku">
            <Input />
          </Form.Item>
          <Form.Item label="Liczba miejsc w lokalu">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Możliwość płatności kartą" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Którki opis restauracji">
            <TextareaAutosize />
          </Form.Item>
          <Form.Item label="Dodaj">
            <Button type="primary">Dodaj Lokal</Button>
          </Form.Item>
        </Form>
        </div>
    </div>
  );
};