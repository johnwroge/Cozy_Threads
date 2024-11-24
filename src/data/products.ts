import { Product } from '../types';

import belt from '../assets/belt.png';
import belt2 from '../assets/belt2.png';
import blackBelt from '../assets/black_belt.png';
import blueStripeSweater from '../assets/blue_stripe_sweater.png';
import cap from '../assets/cap.png';
import cashmereCap from '../assets/cashmere_cap.png';
import checkerFlannel from '../assets/checker_flannel.png';
import kaleidoscopeDress from '../assets/kaleidiscope_dress.png';
import khakiChino from '../assets/khaki_chino.png';
import raisinShirt from '../assets/raisin_shirt.png';
import stripedScarf from '../assets/striped_scarf.png';
import troutBag from '../assets/trout_bag.png';
import watch from '../assets/watch.jpeg';
import winterCoat from '../assets/winter_coat.png';
import winterHat from '../assets/winter_hat.png';
import womensStripedShirt from '../assets/womens_striped_shirt.png';

export const products: Product[] = [
  {
    id: 0,
    title: 'Classic Faux - Leather Belt',
    description: 'Faux leather belt with classic buckle',
    price: 39.99,
    image: belt,
  },
  {
    id: 1,
    title: 'Blue Striped Sweater',
    description: 'Soft blue stripe sweater.',
    price: 64.99,
    image: blueStripeSweater,
  },
 

  {
    id: 2,
    title: 'Classic Cap',
    description: 'Breathable winter cap.',
    price: 19.99,
    image: cap,
  },

  {
    id: 3,
    title: 'Khaki Chino Pants',
    description: 'Classic khaki pants',
    price: 59.99,
    image: khakiChino,
  },
  {
    id: 4,
    title: 'Brushed Cashmere Beanie',
    description: 'Soft beanie for a cozy winter',
    price: 79.99,
    image: cashmereCap,
  },
  {
    id: 5,
    title: 'Double-Layer Leather Belt',
    description: 'Sturdy, double-layered belt crafted from repurposed leather',
    price: 49.99,
    image: belt2,
  },
  {
    id: 6,
    title: "Women's Striped Shirt",
    description: 'Orange - blue striped shirt',
    price: 45.99,
    image: womensStripedShirt,
  },

  {
    id: 7,
    title: 'Wrist Watch',
    description: 'Faux-leather pine green watch',
    price: 149.99,
    image: watch,
  },
  {
    id: 8,
    title: 'Striped Scarf',
    description: 'Navy - emerald duo striped scarf ',
    price: 29.99,
    image: stripedScarf,
  },
  {
    id: 9,
    title: 'Kaleidoscope Dress',
    description: 'Kaleidoscope cotton dress',
    price: 99.99,
    image: kaleidoscopeDress,
  },
  {
    id: 10,
    title: 'Matte Black Belt',
    description: 'Black belt with matte finish',
    price: 42.99,
    image: blackBelt,
  },
  {
    id: 11,
    title: 'Sustainable Winter Coat',
    description: 'Dual material - double faced lux coat',
    price: 199.99,
    image: winterCoat,
  },
  {
    id: 12,
    title: 'Checker Flannel Shirt',
    description: 'Warm checker cotton flannel',
    price: 54.99,
    image: checkerFlannel,
  },
  {
    id: 13,
    title: 'English wool faux fur - lined trapper hat',
    description: 'Cozy winter hat',
    price: 25.99,
    image: winterHat,
  },
  {
    id: 14,
    title: 'Trout Bag',
    description: 'Premium trout cloth bag',
    price: 129.99,
    image: troutBag,
  },
] as const;

export default products;
