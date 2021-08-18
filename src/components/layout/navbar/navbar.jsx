import React from "react";

import * as S from "./style";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Logo>eShop</S.Logo>
      <S.List>
        <S.Item>Home</S.Item>
        <S.Item>Products</S.Item>
        <S.Item>Contact</S.Item>
        <S.Item>Basket</S.Item>
      </S.List>
    </S.Navbar>
  );
};

export default Navbar;
