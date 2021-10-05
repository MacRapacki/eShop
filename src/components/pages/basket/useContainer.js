import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeItem } from "../../../redux/basketSlice";

export const useContainer = () => {
  const itemsInBasket = useSelector((state) => state.basket.itemsInBasket);
  const dispatch = useDispatch();

  const [totalCost, setTotalCost] = useState([]);

  const countTotalCost = () => {
    let price = 0;
    itemsInBasket.forEach((item) => {
      price += item.price * item.quantity;
    });
    return setTotalCost(price.toFixed(2));
  };

  const numberOfItemsInBasket = itemsInBasket.length;

  const removeHandler = (index) => {
    dispatch(removeItem(index));
  };

  useEffect(() => {
    countTotalCost();
  }, [itemsInBasket]);

  return {
    totalCost,
    countTotalCost,
    removeHandler,
    numberOfItemsInBasket,
    itemsInBasket,
  };
};
