import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataContext } from "../../../context/DataContext";

import * as S from "./style";

import { useContainer } from "./useContainer";

const Products = () => {
  const { handleFilter, filteredArray } = useContainer();
  // const { setBasketArray, basketArray, someData } = useContext(DataContext);
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.shopProducts.products);
  const itemsInBasket = useSelector((state) => state.basket.itemsInBasket);

  const addToBasket = (id) => {
    const choosenItem = allProducts.filter((item) => item.id === id);
    if (itemsInBasket.includes(choosenItem[0])) {
      const index = itemsInBasket.findIndex((item) => item.id === id);
      return (itemsInBasket[index].quantity += 1);
    }
    choosenItem[0].quantity = 1;
    const arr = [...itemsInBasket, ...choosenItem];
    // setBasketArray(arr);
  };

  return (
    <S.Products>
      <S.ButtonsPanel>
        <S.Button onClick={() => handleFilter("all")}>All</S.Button>
        <S.Button onClick={() => handleFilter("women's clothing")}>
          Women's
        </S.Button>
        <S.Button onClick={() => handleFilter("men's clothing")}>
          Men's{" "}
        </S.Button>
        <S.Button onClick={() => handleFilter("accesories")}>
          Accessoreis{" "}
        </S.Button>
      </S.ButtonsPanel>
      <S.ProductsWrapper>
        {filteredArray.map((item) => {
          const { id, title, image, price } = item;
          return (
            <S.ProductFrame key={id}>
              <div className="imgWrapper">
                <img src={image} alt="product" />
              </div>
              <p className="title">{title}</p>
              <p className="price">£{price}</p>
              <S.Button onClick={() => addToBasket(id)}>Add to basket</S.Button>
            </S.ProductFrame>
          );
        })}
      </S.ProductsWrapper>
    </S.Products>
  );
};

export default Products;
