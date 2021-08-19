import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";

import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import Contact from "./components/pages/contact/Contact";
import Basket from "./components/pages/basket/Basket";

function App() {
  // const getSomeData = async () => {
  //   const url = "https://fakestoreapi.com/products";
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     const message = `status is: ${response.status}`;
  //     throw new Error(message);
  //   }
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };

  // useEffect(() => {
  //   getSomeData();
  // }, []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/basket" component={Basket}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
