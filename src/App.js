import React from "react";

import { GlobalStyle } from "./globalStyles";

import Footer from "./components/layout/footer/footer";
import Navbar from "./components/layout/navbar/navbar";

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
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
