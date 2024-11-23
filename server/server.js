import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";


const port = process.env.PORT || 4242;
dotenv.config();

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());

const calculateOrderAmount = (items) => {
  let total = 0;
  items.forEach((item) => {
    total += item.amount;
  });
  return total;
};

app.get("/api/config", (req, res) => {

  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});



app.post("/api/create-payment-intent", async (req, res) => {

  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).send({
      error: {
        message: "Invalid items data provided",
      },
    });
  }

  try {
    const orderAmount = calculateOrderAmount(items);

    if (orderAmount <= 0) {
      throw new Error("Invalid order amount");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: orderAmount,
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.error("Payment Intent Error:", e);
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.get("/api/complete", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => console.log(`Node server listening on port ${port}!`));
