import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card className="flex flex-col h-[500px] transform transition-transform duration-300 hover:scale-[1.02]">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-72 object-cover rounded-t-sm"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="font-body text-gray-600 mb-6 flex-grow text-base leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-1xl font-bold text-gray-900">
            ${product.price}
          </span>
          <Button
            onClick={() => dispatch(addToCart(product))}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg
              transition-colors duration-200 flex items-center gap-2"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
