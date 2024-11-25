export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface RootState {
    cart: {
      items: CartItem[];
      isCartOpen: boolean;
      isCheckoutOpen: boolean;
    };
  }

  
  export interface CartItem extends Product {
    quantity: number;
  }

  export interface RootState {
    cart: {
      items: CartItem[];
      isCartOpen: boolean;
      isCheckoutOpen: boolean;
    };
  }

  export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface ProductVariant {
    id: number;
    productId: number;
    size: string;
    color: string;
    stock: number;
  }