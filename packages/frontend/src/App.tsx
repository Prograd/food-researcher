import React from 'react';
import { ProductListingPage } from './features/product-listing/ProductListingPage';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from './services/store';

const store = createStore();

function App() {
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        {' '}
        <ProductListingPage />{' '}
      </ReduxProvider>{' '}
    </React.StrictMode>
  );
}

export default App;
