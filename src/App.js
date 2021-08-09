import { useEffect } from "react";
import "./styles/style.css";

function App() {
  const getSomeData = async () => {
    const url = "https://fakestoreapi.com/products/1";
    const response = await fetch(url);
    if (!response.ok) {
      const message = `status is: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    getSomeData();
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
