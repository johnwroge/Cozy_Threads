import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

const CompletePage = ({ stripePromise }) => {
  const [messageBody, setMessageBody] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!stripePromise) return;
    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      console.log(clientSecret);
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(
        clientSecret
      );

      setMessageBody(
        error ? (
          `> ${error.message}`
        ) : (
          <>
            &gt; Payment {paymentIntent.status}:{' '}
            <a
              href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`}
              target="_blank"
              rel="noreferrer"
            >
              {paymentIntent.id}
            </a>
          </>
        )
      );
    });

    dispatch(clearCart());
  }, [dispatch, stripePromise]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. You will receive an email confirmation
            shortly.
          </p>
          {messageBody}
        </div>

        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg 
            hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CompletePage;
