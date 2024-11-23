import { PaymentIntent, StripeError } from '@stripe/stripe-js';

export interface PaymentResult {
  paymentIntent: PaymentIntent | null;
  error: StripeError | null;
}

export interface PaymentFormProps {
  amount: number;
  currency: string;
  onSuccess?: (paymentIntent: PaymentIntent) => void;
  onError?: (error: StripeError) => void;
}