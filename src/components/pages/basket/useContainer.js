import React, { useContext, useState } from "react";

import { DataContext } from "../../../context/DataContext";

export const useContainer = () => {
  const { setBasketArray, basketArray } = useContext(DataContext);
  const [totalCost, setTotalCost] = useState([]);

  const countTotalCost = (arr) => {
    let price = 0;
    arr.forEach((item) => {
      price += item.price;
    });
    return setTotalCost(price);
  };

  const removeItem = (index) => {
    const newArr = [...basketArray];
    newArr.splice(index, 1);
    return setBasketArray(newArr);
  };
  return { totalCost, countTotalCost, removeItem };
};
