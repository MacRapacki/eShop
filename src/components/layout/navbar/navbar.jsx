import React from "react";

import * as S from "./style";

import Basket from "../../../images/shopping-basket.svg";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Logo>
        <S.NavigationLink to="/">eShop</S.NavigationLink>
      </S.Logo>
      <S.List>
        <S.Item>
          <S.NavigationLink to="/">Home</S.NavigationLink>
        </S.Item>
        <S.Item>
          <S.NavigationLink to="/products">Products</S.NavigationLink>
        </S.Item>
        <S.Item>
          <S.NavigationLink to="/contact">Contact</S.NavigationLink>
        </S.Item>
        <S.Item>
          <S.NavigationLink to="/basket">
            <S.BasketIcon src={Basket} alt="basket" />
          </S.NavigationLink>
        </S.Item>
      </S.List>
    </S.Navbar>
  );
};

export default Navbar;
