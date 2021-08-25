import React, { useState } from "react";

export const useContainer = () => {
  const [totalCost, setTotalCost] = useState([]);

  const countTotalCost = (arr) => {
    let price = 0;
    arr.forEach((item) => {
      price += item.price;
    });
    return setTotalCost(price);
  };

  return { totalCost, countTotalCost };
};

// export default useContainer;
