import React, { useContext, useEffect } from "react";

import * as S from "./style";

import { DataContext } from "../../../context/DataContext";

import { useContainer } from "./useContainer";

const Home = () => {
  const { basketArray, setBasketArray, someData } = useContext(DataContext);

  const { totalCost, countTotalCost } = useContainer();

  useEffect(() => {
    countTotalCost(basketArray);
  }, [basketArray]);

  return (
    <S.Home>
      {basketArray.length === 0 && (
        <p className="emptyBasketInfo">Your basket is empty.</p>
      )}
      {basketArray.map((item) => {
        const { id, title, image, price } = item;
        return (
          <div className="item" id={id}>
            <div className="imgWrapper">
              <img src={image} alt="product" />
            </div>
            <p className="title">{title}</p>
            <p className="price">£{price}</p>
          </div>
        );
      })}
      <div className="summary">
        <p className="itemsAmount">Number of Items: {basketArray.length}</p>
        <p className="totalCost">Total cost: {totalCost}</p>
      </div>
    </S.Home>
  );
};

export default Home;
