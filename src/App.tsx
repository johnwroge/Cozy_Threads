import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import CompletePage from './pages/CompletePage';
import NotFoundPage from './pages/NotFoundPage';

function App({ className = '' }) {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch('/api/config').then(async (r) => {
      const { publishableKey } = await r.json();
      const key_string = `${publishableKey}`;
      setStripePromise(loadStripe(key_string));
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
