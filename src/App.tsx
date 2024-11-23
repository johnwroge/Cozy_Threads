import React from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./store";




function App({ className = "" }) {

  const [stripePromise, setStripePromise] = useState(null);
  
  useEffect(() => {
    fetch("/api/config").then(async (r) => {
      const { publishableKey } = await r.json();
      const key_string = `${publishableKey}`
      setStripePromise(loadStripe(key_string));
    });
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <Layout>
       
      </Layout>
    </Router>
  </Provider>
  )
}

export default App
