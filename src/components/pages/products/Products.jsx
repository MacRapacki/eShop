import React, { useContext } from "react";

import { DataContext } from "../../../context/DataContext";

import * as S from "./style";

import { useContainer } from "./container";

const Products = () => {
  const { handleFilter, filteredArray } = useContainer();
  const {setBasketArray, basketArray, someData} = useContext(DataContext)

  const addToBasket =(id)=>{
    const choosenItem = someData.filter(item=> item.id === id)
    const arr = [...basketArray, ...choosenItem];
    //  arr.push(choosenItem)
    setBasketArray(arr)
    

  }

console.log(basketArray)
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
              <S.Button onClick={()=>addToBasket(id)}>Add to basket</S.Button>
            </S.ProductFrame>
          );
        })}
      </S.ProducstWrapper>
    </S.Products>
  );
};

export default Products;
