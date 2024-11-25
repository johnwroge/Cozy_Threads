import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal, selectCartItems } from "../store/cartSlice";
import { CartItem } from "../types";

interface OrderSummaryProps {
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = () => {
  const total = useSelector(selectCartTotal);
  const items = useSelector(selectCartItems);

  return (
    <div className="font-body bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="font-body text-xl font-semibold mb-4">Order Summary</h2>
      {items.map((item: CartItem) => (
        <div key={item.id} className="flex justify-between py-2">
          <span>
            {item.title} x {item.quantity}
          </span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="font-body border-t mt-4 pt-4">
        <div className="font-body flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
