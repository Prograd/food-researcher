import { Header } from '../header';
import React from 'react';
import 'antd/dist/antd.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => (
  <>
    <Header />
    {props.children}
  </>
);
