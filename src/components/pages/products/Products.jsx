import React, { useEffect } from "react";

import * as S from "./style";

import { useContainer } from "./container";

const Products = () => {
  const { handleFilter, filteredArray } = useContainer();

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
      <S.ProducstWrapper>
        {filteredArray.map((item) => {
          const { id, title, image, price } = item;
          return (
            <S.ProductFrame id={id}>
              <div className="imgWrapper">
                <img src={image} alt="product" />
              </div>

              <p className="title">{title}</p>
              <p className="price">£{price}</p>
              <S.Button>Add to basket</S.Button>
            </S.ProductFrame>
          );
        })}
      </S.ProducstWrapper>
    </S.Products>
  );
};

export default Products;
