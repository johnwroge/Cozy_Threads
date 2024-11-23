import { Product } from "../types";

import photo1 from "../assets/1.png";
import photo2 from "../assets/2.png";
import photo3 from "../assets/3.png";
import photo4 from "../assets/4.png";
import photo5 from "../assets/5.png";
import photo6 from "../assets/6.png";
import photo7 from "../assets/7.png";
import photo8 from "../assets/8.png";
import photo9 from "../assets/9.png";
import photo10 from "../assets/10.png";
import photo11 from "../assets/11.png";
import photo12 from "../assets/12.png";

export const products: Product[] = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    description:
      "Hand-crafted genuine leather jacket with distressed finish and premium metal hardware",
    price: 299.99,
    image: photo1,
  },
  {
    id: 2,
    title: "Classic White Sneakers",
    description:
      "Minimalist design meets maximum comfort with our signature cloud cushioning",
    price: 129.99,
    image: photo2,
  },
  {
    id: 3,
    title: "Merino Wool Cardigan",
    description:
      "Luxuriously soft merino wool cardigan with pearl buttons and ribbed detailing",
    price: 159.99,
    image: photo3,
  },
  {
    id: 4,
    title: "High-Rise Slim Jeans",
    description:
      "Premium stretch denim with a flattering high-rise cut and ankle-length finish",
    price: 89.99,
    image: photo4,
  },
  {
    id: 5,
    title: "Silk Wrap Dress",
    description:
      "Elegant silk wrap dress with adjustable tie and flowing midi length",
    price: 219.99,
    image: photo5,
  },
  {
    id: 6,
    title: "Cashmere Beanie",
    description: "Ultra-soft pure cashmere beanie in a timeless ribbed design",
    price: 79.99,
    image: photo6,
  },
  {
    id: 7,
    title: "Canvas Backpack",
    description:
      "Water-resistant canvas backpack with leather trim and laptop compartment",
    price: 149.99,
    image: photo2,
  },
  {
    id: 8,
    title: "Linen Button-Down",
    description:
      "Breathable pure linen shirt with mother-of-pearl buttons and relaxed fit",
    price: 119.99,
    image: photo7,
  },
  {
    id: 9,
    title: "Oversized Blazer",
    description:
      "Tailored oversized blazer in Italian wool with subtle shoulder padding",
    price: 249.99,
    image: photo2,
  },
  {
    id: 10,
    title: "Cropped Wide-Leg Pants",
    description: "High-waisted wide-leg trousers in sustainable tencel fabric",
    price: 139.99,
    image: photo8,
  },
  {
    id: 11,
    title: "Chunky Knit Scarf",
    description: "Extra-long chunky knit scarf in premium merino wool blend",
    price: 69.99,
    image: photo9,
  },
  {
    id: 12,
    title: "Crossbody Bag",
    description:
      "Compact leather crossbody with adjustable strap and gold hardware",
    price: 179.99,
    image: photo10,
  },
  {
    id: 13,
    title: "Utility Jumpsuit",
    description:
      "Cotton-blend utility jumpsuit with multiple pockets and cinched waist",
    price: 169.99,
    image: photo11,
  },
  {
    id: 14,
    title: "Platform Chelsea Boots",
    description:
      "Leather chelsea boots with chunky rubber sole and elastic panels",
    price: 229.99,
    image: photo12,
  },
  {
    id: 15,
    title: "Metallic Mini Dress",
    description:
      "Shimmering metallic mini dress with ruched detailing and open back",
    price: 189.99,
    image: photo10,
  },
] as const;

export default products;
