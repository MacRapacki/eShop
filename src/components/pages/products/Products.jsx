import React, { useContext, useState } from "react";

import * as S from "./style";

import { DataContext } from "../../../context/DataContext";

const Home = () => {
  const { someData } = useContext(DataContext);

  const [filterArray, setFilterArray] = useState("all");
  console.log(filterArray);

  function handleClick() {
    const arr = someData.filter((item) => item.category === "women's clothing");

    setFilterArray(arr);
  }
  return (
    <S.Home>
      <S.ButtonsPanel>
        <S.Button>All</S.Button>
        <S.Button onClick={handleClick}>Women's</S.Button>
        <S.Button>Men's</S.Button>
        <S.Button>Accessoreis</S.Button>
      </S.ButtonsPanel>
      <S.ProducstWrapper>
        <S.ProductFrame>
          <img src={someData[1]?.image} alt="product" />
          <p>{someData[1]?.title}</p>
          <p>£{someData[1]?.price}</p>
          <S.Button>Add to basket</S.Button>
        </S.ProductFrame>
      </S.ProducstWrapper>
    </S.Home>
  );
};

export default Home;
