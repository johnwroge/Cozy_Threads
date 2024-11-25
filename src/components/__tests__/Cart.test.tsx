import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../store/cartSlice";
import Cart from "../Cart";

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        items: [],
        isCartOpen: true,
        isCheckoutOpen: false,
        ...initialState,
      },
    },
  });
};

const renderWithProviders = (
  ui,
  { initialState = {}, ...renderOptions } = {}
) => {
  const store = createTestStore(initialState);
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  return {
    store,
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
};

describe("Cart Component", () => {
  it("shows empty cart message when no items", () => {
    renderWithProviders(<Cart />);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("displays cart items correctly", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Test Item",
          price: 10,
          quantity: 2,
          image: "test.jpg",
        },
      ],
    };

    renderWithProviders(<Cart />, { initialState });
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("calculates total correctly", () => {
    const initialState = {
      items: [
        { id: 1, title: "Item 1", price: 10, quantity: 2, image: "test1.jpg" },
        { id: 2, title: "Item 2", price: 20, quantity: 1, image: "test2.jpg" },
      ],
    };

    renderWithProviders(<Cart />, { initialState });
    const priceElements = screen.getAllByText("$40.00");
    expect(priceElements.length).toBeGreaterThan(0);
  });

  it("removes items when remove button is clicked", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Test Item",
          price: 10,
          quantity: 1,
          image: "test.jpg",
        },
      ],
    };

    const { store } = renderWithProviders(<Cart />, { initialState });
    const removeButton = screen.getByRole("button", { name: /remove/i });

    fireEvent.click(removeButton);
    expect(store.getState().cart.items).toHaveLength(0);
  });

  it("navigates to checkout when checkout button is clicked", () => {
    const initialState = {
      items: [
        {
          id: 1,
          title: "Test Item",
          price: 10,
          quantity: 1,
          image: "test.jpg",
        },
      ],
    };
    

    renderWithProviders(<Cart />, { initialState });
    const checkoutButton = screen.getByText(/proceed to checkout/i);
    fireEvent.click(checkoutButton);
  });

  it("closes cart when overlay is clicked", () => {
    const initialState = {
      items: [{ id: 1, title: "Test Item", price: 10, quantity: 1, image: "test.jpg" }],
      isCartOpen: true
    };

    const { store } = renderWithProviders(<Cart />, { initialState });
    const overlay = screen.getByTestId("cart-overlay"); 
    fireEvent.click(overlay);
    expect(store.getState().cart.isCartOpen).toBe(false);
  });

  it("navigates to checkout when checkout button is clicked", () => {
    const initialState = {
      items: [{ id: 1, title: "Test Item", price: 10, quantity: 1, image: "test.jpg" }],
      isCartOpen: true
    };

    const { store } = renderWithProviders(<Cart />, { initialState });
    const checkoutButton = screen.getByText(/proceed to checkout/i);
    fireEvent.click(checkoutButton);
    expect(store.getState().cart.isCartOpen).toBe(false);
  });

  it("shows empty cart message when no items", () => {
    const initialState = {
      items: [],
      isCartOpen: true
    };

    renderWithProviders(<Cart />, { initialState });
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("displays correct item details", () => {
    const initialState = {
      items: [{
        id: 1,
        title: "Test Product",
        price: 25.99,
        quantity: 2,
        image: "test.jpg"
      }],
      isCartOpen: true
    };

    renderWithProviders(<Cart />, { initialState });
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("$25.99")).toBeInTheDocument();
  });

});
