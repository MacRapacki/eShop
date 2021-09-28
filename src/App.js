import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";

import { DataContext } from "./context/DataContext";

import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import Contact from "./components/pages/contact/Contact";
import Basket from "./components/pages/basket/Basket";

function App() {
  const [someData, setSomeData] = useState([]);
  const [basketArray, setBasketArray] = useState([]);

  const getSomeData = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    if (!response.ok) {
      const message = `status is: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    setSomeData(data);
  };

  useEffect(() => {
    getSomeData();
  }, []);
  return (
    <>
      <DataContext.Provider value={{ someData, basketArray, setBasketArray }}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/products" component={Products}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/basket" component={Basket}></Route>
            </Switch>
          </main>
          <Footer />
        </Router>
      </DataContext.Provider>
    </>
  );
}

export default App;
