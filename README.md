# Cozy Threads 🌱

A sustainable fashion e-commerce platform built with React, TypeScript, Express, and Stripe integration.

## Features
- Browse sustainable fashion items
- Shopping cart functionality
- Secure checkout with Stripe
- Responsive design for all devices
- Real-time cart updates

## Tech Stack
- React 18
- TypeScript
- Vite
- Redux Toolkit
- Tailwind CSS
- Express.js
- Stripe API

## Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- Stripe account for payment processing

## Installation & Setup

### Frontend Setup
1. Clone the repository:
```bash
git clone https://github.com/johnwroge/Cozy_Threads.git
cd Cozy_Threads
```

2. Install dependencies:
```bash
npm install
```

### Backend Setup
1. Navigate to the server directory:
```bash
cd server
```

2. Install server dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Running the Application

1. Start the backend server (from the server directory):
```bash
npm start
```

2. In a new terminal, start the frontend development server (from the root directory):
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Running Tests
```bash
npm run test
```

To run tests in watch mode:
```bash
npm run test:watch
```

## Build for Production
```bash
npm run build
```

The build output will be in the `dist` directory.

```bash
cd server
node server.js
```


The dist folder will be served by the Express server at  `http://localhost:4242/`


## Environment Variables

### Backend (server/.env)
```
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Images

Images were acquired from Pixabay and Pexels. 

## Requirements

E-commerce app

- [x] Product Catalog-Display of products
- [x] Each product contains image, title, description, price
- [x] Shopping Cart feature allows customers to add products to a shopping cart, and then view the items they've selected
- [x] Checkout capability uses Stripe Payment Element to collect payment information and complete transaction
- [x] After transaction is complete, we should be able to see the result to the customer. 
- [x] PDF of less than 700 word write-up containing architecture and design, key decisions including trade offs, and areas of improvement if given more time 
- [x] Host application through a cloud provider
- [x] Zipped file, or link to source code





