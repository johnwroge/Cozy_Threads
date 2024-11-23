import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../store/cartSlice';
import { Navigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import OrderSummary from '../components/OrderSummary';

const CheckoutPage = ({ stripePromise }) => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const total = useSelector(selectCartTotal);
  const items = useSelector(selectCartItems);

  if (items.length === 0) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    if (items.length === 0) return;

    const lineItems = items.map((item) => ({
      id: item.id,
      amount: Math.round(item.price * item.quantity * 100),
    }));

    fetch(`${window.location.origin}/api/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: lineItems,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(
            errorData.error?.message || 'Payment service unavailable'
          );
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        setError(null);
      })
      .catch((err) => {
        setError(
          err.message || 'Unable to initialize checkout. Please try again.'
        );
      });
  }, [items]);

  if (items.length === 0) {
    return <Navigate to="/" replace />;
  }

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#000000',
    },
  };

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8 pt-48">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <OrderSummary />

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        {stripePromise && clientSecret && (
          <Elements
            options={{
              clientSecret,
              appearance,
              loader: 'auto',
            }}
            stripe={stripePromise}
          >
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
