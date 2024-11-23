import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react";
import { Button } from "./ui/Button";
import {
  setCartOpen,
  selectCartItems,
  selectIsCartOpen,
  selectCartTotal,
  removeFromCart,
} from "../store/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectCartItems);
  const isOpen = useSelector(selectIsCartOpen);
  const total = useSelector(selectCartTotal);

  const handleCheckout = () => {
    dispatch(setCartOpen(false));
    navigate("/checkout");
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        data-testid="cart-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 z-30"
        onClick={() => dispatch(setCartOpen(false))}
      />

      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg 
        transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="pt-32 px-4 pb-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <Button
                onClick={() => dispatch(setCartOpen(false))}
                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="text-lg">Your cart is empty</p>
                <Button
                  onClick={() => dispatch(setCartOpen(false))}
                  className="mt-4 border border-gray-200 bg-white hover:bg-gray-100"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="py-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-4 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <div className="mt-1 text-sm text-gray-600">
                        <span className="font-medium">${item.price}</span>
                        <span className="mx-2">×</span>
                        <span>{item.quantity}</span>
                      </div>
                      <div className="mt-1 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <Button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-gray-400 hover:text-red-500 p-2 hover:bg-gray-100 rounded-full"
                      aria-label="Remove item"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-600">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-base pt-2 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-lg
    transition-colors duration-200"
              >
                Proceed to Checkout
              </Button>
              <button
                onClick={() => dispatch(setCartOpen(false))}
                className="w-full mt-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
