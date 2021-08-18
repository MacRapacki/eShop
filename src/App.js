// import { useEffect } from "react";
import "./styles/style.css";

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
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
