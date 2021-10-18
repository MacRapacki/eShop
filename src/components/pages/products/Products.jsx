import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/basketSlice";

import * as S from "./style";

import { useContainer } from "./useContainer";

const Products = () => {
  const { handleFilter, filteredArray } = useContainer();

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.shopProducts.products);
  const status = useSelector((state) => state.shopProducts.status);

  const addToBasket = (id) => {
    const choosenItem = allProducts.filter((item) => item.id === id);
    console.log(choosenItem[0]);
    dispatch(addItem(choosenItem[0]));
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
        {status !== "success" ? (
          <p>loading...</p>
        ) : (
          filteredArray.map((item) => {
            const { id, title, image, price } = item;
            return (
              <S.ProductFrame key={id}>
                <div className="imgWrapper">
                  <img src={image} alt="product" />
                </div>
                <p className="title">{title}</p>
                <p className="price">£{price}</p>
                <S.Button onClick={() => addToBasket(id)}>
                  Add to basket
                </S.Button>
              </S.ProductFrame>
            );
          })
        )}
      </S.ProductsWrapper>
    </S.Products>
  );
};

export default Products;
