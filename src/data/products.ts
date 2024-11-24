import { Product } from "../types";

import handBag from "../assets/hand_bag.jpeg";
import menJean2 from "../assets/men_jean_2.jpeg";
import mensJean from "../assets/mens_jean.jpeg";
import mensKhaki from "../assets/mens_khaki.jpeg";
import mensShirt2 from "../assets/mens_shirt2.jpeg";
import mensShirt3 from "../assets/mens_shirt_3.jpeg";
import mensShirt4 from "../assets/mens_shirt_4.jpeg";
import mensShirt5 from "../assets/mens_shirt_5.jpeg";
import sadSweaterMan from "../assets/sad_sweater_man.jpeg";
import womens3 from "../assets/womens_3.jpeg";
import womensKhaki from "../assets/womens_khaki.jpeg";
import womensRed from "../assets/womens_red.jpeg";
import womensSweater from "../assets/womens_sweater.jpeg";
import womensSweater1 from "../assets/womens_sweater_1.jpeg";
import womensWhite from "../assets/womens_white.jpeg";

export const products: Product[] = [
  {
    id: 1,
    title: "Sustainable Repurposed Handbag",
    description: "Ethically sourced leather handbag with spacious interior and modern style.",
    price: 159.99,
    image: handBag,
  },
  {
    id: 2,
    title: "Premium Dark Wash Jeans",
    description: "Stylish, sustainably produced dark wash denim with a perfect fit.",
    price: 119.99,
    image: menJean2,
  },
  {
    id: 3,
    title: "Classic Fit Denim",
    description: "Comfortable, eco-friendly jeans made with sustainable materials.",
    price: 99.99,
    image: mensJean,
  },
  {
    id: 4,
    title: "Men's Khaki Chinos",
    description: "Sustainable cotton khakis with a modern, flattering fit.",
    price: 89.99,
    image: mensKhaki,
  },
  {
    id: 5,
    title: "Casual Button-Down Shirt",
    description: "Relaxed fit shirt made from organic, sustainable materials.",
    price: 79.99,
    image: mensShirt2,
  },
  {
    id: 6,
    title: "Relaxed Cotton Dress Shirt",
    description: "Premium, formal cotton shirt crafted from sustainable materials.",
    price: 94.99,
    image: mensShirt3,
  },
  {
    id: 7,
    title: "Smart Casual Shirt",
    description: "Versatile shirt ideal for both work and weekends.",
    price: 84.99,
    image: mensShirt4,
  },
  {
    id: 8,
    title: "Eco-Friendly Oxford Shirt",
    description: "Classic oxford shirt made from recycled materials.",
    price: 89.99,
    image: mensShirt5,
  },
  {
    id: 9,
    title: "Cozy Wool Sweater",
    description: "Soft and warm sustainable wool blend sweater for maximum comfort.",
    price: 129.99,
    image: sadSweaterMan,
  },
  {
    id: 10,
    title: "Women's Casual Blouse",
    description: "Flowing blouse made from eco-friendly, sustainable fabrics.",
    price: 79.99,
    image: womens3,
  },
  {
    id: 11,
    title: "Khaki Cargo Pants",
    description: "Sustainable cotton khakis designed with a fit for comfort",
    price: 89.99,
    image: womensKhaki,
  },
  {
    id: 12,
    title: "Light Maroon T-shirt",
    description: "Stylish, casual top crafted from a blend of cotton and recycled materials.",
    price: 89.99,
    image: womensRed,
  },
  {
    id: 13,
    title: "Cozy Winter Sweater",
    description: "Warm winter sweater made from a sustainable wool blend.",
    price: 119.99,
    image: womensSweater,
  },
  {
    id: 14,
    title: "Classic Fall Knit Sweater",
    description: "Timeless knit sweater in red and white, made with eco-friendly yarn.",
    price: 109.99,
    image: womensSweater1,
  },
  {
    id: 15,
    title: "White Summer Blouse",
    description: "Lightweight, classic blouse for a fresh summer look.",
    price: 129.99,
    image: womensWhite,
  },
] as const;

export default products;
