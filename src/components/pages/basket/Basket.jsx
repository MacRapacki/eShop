import React from "react";

import * as S from "./style";

import { useContainer } from "./useContainer";

const Home = () => {
  const { totalCost, removeHandler, numberOfItemsInBasket, itemsInBasket } =
    useContainer();

  return (
    <S.Home>
      {numberOfItemsInBasket === 0 && (
        <p className="emptyBasketInfo">Your basket is empty.</p>
      )}
      {itemsInBasket.map((item, index) => {
        const { id, title, image, price, quantity } = item;
        return (
          <div className="item" key={id}>
            <div className="imgWrapper">
              <img src={image} alt="product" />
            </div>
            <p className="title">
              <span className="itemQuantity">{quantity}x </span>
              {title}
            </p>
            <p className="price">£{price}</p>
            <button
              className="removeButton"
              onClick={() => removeHandler(index)}
            >
              Remove item
            </button>
          </div>
        );
      })}
      <div className="summary">
        <p className="itemsAmount">Number of Items: {numberOfItemsInBasket}</p>
        <p className="totalCost">Total cost: {totalCost}</p>
      </div>
      <S.checkoutBtn disabled={!numberOfItemsInBasket}>CHECKOUT</S.checkoutBtn>
    </S.Home>
  );
};

export default Home;
