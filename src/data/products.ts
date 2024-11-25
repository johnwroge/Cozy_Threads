import whiteshirt from '../assets/white_shirt.png';
import stripedSweater from '../assets/striped_sweater.png';
import cashmereCap from '../assets/cashmere_winter_cap.png';
import lightChinos from '../assets/light_men_chino.png';
import yellowBeanie from '../assets/yellow_beanie.png';
import suitcase from '../assets/repurposed_suitcase.png';
import forestShirt from '../assets/forest_shirt.png';
import watch from '../assets/watch.png';
import christmasSweater from '../assets/christmas_sweater.png';
import womensPants from '../assets/light_pant_women.png';
import darkPants from '../assets/dark_pant_mens.png';
import whiteCoat from '../assets/white_matte_winter_coat.png';
import greenShirt from '../assets/green_shirt 2.png';
import mensFleece from '../assets/mens_fleece.png';
import toteBag from '../assets/white_tote_bag.png';
import darkCoat from '../assets/coat_dark.png';
import repurposedShirt from '../assets/white_shirt_repurposed.png';

export const products = [
  {
    id: 0,
    title: 'White Dress Shirt',
    description: 'Classic white cotton dress shirt',
    price: 49.99,
    image: whiteshirt,
  },
  {
    id: 1,
    title: 'Striped Sweater',
    description: 'Cozy striped knit sweater',
    price: 64.99,
    image: stripedSweater,
  },
  {
    id: 2,
    title: 'Cashmere Winter Cap',
    description: 'Luxurious cashmere winter cap',
    price: 39.99,
    image: cashmereCap,
  },
  {
    id: 3,
    title: 'Light Men\'s Chinos',
    description: 'Classic light-colored chino pants for men',
    price: 59.99,
    image: lightChinos,
  },
  {
    id: 4,
    title: 'Yellow Beanie',
    description: 'Warm yellow knit beanie',
    price: 29.99,
    image: yellowBeanie,
  },
  {
    id: 5,
    title: 'Repurposed Suitcase',
    description: 'Sustainably repurposed vintage suitcase',
    price: 149.99,
    image: suitcase,
  },
  {
    id: 6,
    title: 'Forest Green Shirt',
    description: 'Casual forest green button-up shirt',
    price: 45.99,
    image: forestShirt,
  },
  {
    id: 7,
    title: 'Classic Watch',
    description: 'Timeless analog watch design',
    price: 129.99,
    image: watch,
  },
  {
    id: 8,
    title: 'Christmas Sweater',
    description: 'Festive holiday knit sweater',
    price: 69.99,
    image: christmasSweater,
  },
  {
    id: 9,
    title: 'Women\'s Light Pants',
    description: 'Comfortable light-colored pants for women',
    price: 54.99,
    image: womensPants,
  },
  {
    id: 10,
    title: 'Dark Men\'s Pants',
    description: 'Classic dark pants for men',
    price: 59.99,
    image: darkPants,
  },
  {
    id: 11,
    title: 'White Winter Coat',
    description: 'Elegant white matte finish winter coat',
    price: 199.99,
    image: whiteCoat,
  },
  {
    id: 12,
    title: 'Green Casual Shirt',
    description: 'Versatile green casual shirt',
    price: 44.99,
    image: greenShirt,
  },
  {
    id: 13,
    title: 'Men\'s Fleece',
    description: 'Warm and comfortable fleece pullover',
    price: 79.99,
    image: mensFleece,
  },
  {
    id: 14,
    title: 'White Tote Bag',
    description: 'Spacious white canvas tote bag',
    price: 34.99,
    image: toteBag,
  },
  {
    id: 15,
    title: 'Dark Winter Coat',
    description: 'Premium dark winter coat',
    price: 189.99,
    image: darkCoat,
  },
  {
    id: 16,
    title: 'Repurposed White Shirt',
    description: 'Sustainably repurposed white cotton shirt',
    price: 59.99,
    image: repurposedShirt,
  },
] as const;

export default products;