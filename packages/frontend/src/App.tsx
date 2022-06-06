import React from 'react';
import { ProductListingPage } from './features/product-listing';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from './services/store';
import { Route, Routes, BrowserRouter as Switch } from 'react-router-dom';
import { AddProductContainer } from './features/add-product';

const store = createStore();

function App() {
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <Switch>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/addRestaurant" element={<AddProductContainer />} />
          </Routes>
        </Switch>
      </ReduxProvider>
    </React.StrictMode>
  );
}

export default App;
