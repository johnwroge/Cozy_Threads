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
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
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
      <GoogleAnalytics/> 
        <Layout>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route
              path="/checkout"
              element={<CheckoutPage stripePromise={stripePromise} />}
            />
            <Route
              path="/complete"
              element={<CompletePage stripePromise={stripePromise} />}
            />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
