// src/store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product, RootState } from "../types";

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
}

const loadState = (): CartState => {
  try {
    const savedState = localStorage.getItem("cart");
    return savedState
      ? JSON.parse(savedState)
      : {
          items: [],
          isCartOpen: false,
          isCheckoutOpen: false,
        };
  } catch (err) {
    return {
      items: [],
      isCartOpen: false,
      isCheckoutOpen: false,
    };
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    setCheckoutOpen: (state, action: PayloadAction<boolean>) => {
      state.isCheckoutOpen = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setCartOpen,
  setCheckoutOpen,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
export const selectIsCheckoutOpen = (state: RootState) =>
  state.cart.isCheckoutOpen;
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const saveCart = (state: RootState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (err) {
    console.error("Failed to save cart:", err);
  }
};

export default cartSlice.reducer;
