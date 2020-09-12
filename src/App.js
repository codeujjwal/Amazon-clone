import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { useRedux } from "./context api/StateProvider";
import { auth } from "./firebase/firebase";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [, dispatch] = useRedux();
  const promise = loadStripe(
    "pk_test_51HQQVMDYh4F0v6YBHHpODqYedqeTRAzmHpNZH9MnvnrZvO7io596z9XA6vGMELfCNglrUBXldKbxapkJNcLirtye007yPtzUAi"
  );
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
