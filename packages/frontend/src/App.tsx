import React from 'react';
import { ProductListingPage } from './components/product-listing/ProductListingPage';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from './services/store';
import { Route, Routes, BrowserRouter as Switch } from 'react-router-dom';
import { AddProductContainer } from './components/AddProduct';
import  DeleteProduct  from './components/DeleteProduct';
import { EditProductContainer} from './components/EditProduct';

const store = createStore();

function App() {
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <Switch>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/addRestaurant" element={<AddProductContainer />} />
            <Route path="/deleteRestaurant" element={<DeleteProduct />} />
            <Route path="/editRestaurant" element={<EditProductContainer />} />
          </Routes>
        </Switch>
      </ReduxProvider>{' '}
    </React.StrictMode>
  );
}

export default App;


