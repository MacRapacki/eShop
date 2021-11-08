import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./globalStyles";

import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
// import Contact from "./components/pages/contact/Contact";
import Basket from "./components/pages/basket/Basket";

import { useDispatch } from "react-redux";
import { getProducts } from "./redux/allProductsSlice";

import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    dispatch(getProducts());
    getUsers();
  }, []);
  console.log(users);
  return (
    <>
      {/* <DataContext.Provider value={{ someData, basketArray, setBasketArray }}> */}
      <GlobalStyle />
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/eShop" component={Home}></Route>
            <Route path="/products" component={Products}></Route>
            {/* <Route path="/contact" component={Contact}></Route> */}
            <Route path="/basket" component={Basket}></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
      {/* </DataContext.Provider> */}
    </>
  );
}

export default App;
