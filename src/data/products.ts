import { Product } from '../types';

export const products: Product[] = [
  {
    id: 0,
    title: 'Classic Faux - Leather Belt',
    description: 'Faux leather belt with classic buckle',
    price: 39.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 1,
    title: 'Blue Striped Sweater', 
    description: 'Soft blue stripe sweater.',
    price: 64.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 2,
    title: 'Classic Cap',
    description: 'Breathable winter cap.',
    price: 19.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 3,
    title: 'Khaki Chino Pants',
    description: 'Classic khaki pants',
    price: 59.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 4,
    title: 'Brushed Cashmere Beanie',
    description: 'Soft beanie for a cozy winter',
    price: 79.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 5,
    title: 'Double-Layer Leather Belt',
    description: 'Sturdy, double-layered belt crafted from repurposed leather',
    price: 49.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 6,
    title: "Women's Striped Shirt",
    description: 'Orange - blue striped shirt',
    price: 45.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 7,
    title: 'Wrist Watch',
    description: 'Faux-leather pine green watch',
    price: 149.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 8,
    title: 'Striped Scarf',
    description: 'Navy - emerald duo striped scarf ',
    price: 29.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 9,
    title: 'Kaleidoscope Dress',
    description: 'Kaleidoscope cotton dress',
    price: 99.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 10,
    title: 'Matte Black Belt',
    description: 'Black belt with matte finish',
    price: 42.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 11,
    title: 'Sustainable Winter Coat',
    description: 'Dual material - double faced lux coat',
    price: 199.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 12,
    title: 'Checker Flannel Shirt',
    description: 'Warm checker cotton flannel',
    price: 54.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 13,
    title: 'English wool faux fur - lined trapper hat',
    description: 'Cozy winter hat',
    price: 25.99,
    image: '/api/placeholder/400/400',
  },
  {
    id: 14,
    title: 'BT Graphic Tote Bag',
    description: 'Natural mountain pine cloth bag',
    price: 129.99,
    image: '/api/placeholder/400/400',
  },
] as const;

export default products;