import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LinkAuthenticationElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "../components/ui/Button";

const BACKEND_URL = `${window.location.origin}`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      }, 
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
    navigate("/complete");
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-200 rounded-lg shadow-md p-8 my-8"
    >
      <div className="mb-4">
        <LinkAuthenticationElement
          className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <PaymentElement />
      </div>
      <button
        disabled={isLoading || !stripe || !elements}
        className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${
          isLoading || !stripe || !elements
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        <span>
          {isLoading ? (
            <div className="spinner">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            </div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {message && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
