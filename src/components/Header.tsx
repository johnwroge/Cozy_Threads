import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { ShoppingCart, Leaf } from "lucide-react";
import { Button } from "./ui/Button";
import { setCartOpen, selectCartItems, selectIsCartOpen } from "../store/cartSlice";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const isCartOpen = useAppSelector(selectIsCartOpen); 

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartOpen = (): void => {
    dispatch(setCartOpen(!isCartOpen));
  };

  return (
    <>
      <div className="bg-emerald-50 w-full fixed top-0 z-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center text-emerald-800 gap-2 text-center">
          <Leaf className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <p className="text-xs sm:text-sm font-medium">
            <span className="hidden sm:inline">Sustainable fashion, fairly made, ethically sourced. 🌱</span>
            <span className="sm:hidden">Sustainable fashion, ethically made 🌱</span>
          </p>
        </div>
      </div>

      <header
        className={`bg-white shadow-sm fixed w-full top-6 sm:top-8 z-10 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link to="/">
            <h1 className="font-heading text-2xl sm:text-4xl">Cozy Threads</h1>
          </Link>
          
          <Button
            onClick={handleCartOpen}
            className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
          >
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            {totalQuantity > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white 
                  rounded-full w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs flex items-center justify-center"
              >
                {totalQuantity}
              </span>
            )}
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;