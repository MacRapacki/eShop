import React, { useContext, useState } from "react";

import { DataContext } from "../../../context/DataContext";

export const useContainer = () => {
  const { setBasketArray, basketArray } = useContext(DataContext);
  const [totalCost, setTotalCost] = useState([]);

  const countTotalCost = (arr) => {
    let price = 0;
    arr.forEach((item) => {
      price += item.price * item.quantity;
    });
    return setTotalCost(price.toFixed(2));
  };

  const removeItem = (index) => {
    const newArr = [...basketArray];

    if (newArr[index].quantity === 1) {
      newArr.splice(index, 1);
      return setBasketArray(newArr);
    }
    newArr[index].quantity -= 1;
    return setBasketArray(newArr);
  };
  return { totalCost, countTotalCost, removeItem };
};
