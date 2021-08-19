import React from "react";

import * as S from "./style";

import Basket from "../../../images/shopping-basket.svg";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Logo>
        <S.LogoLink to="/" exact>
          eShop
        </S.LogoLink>
      </S.Logo>
      <S.List>
        <S.Item>
          <S.NavigationLink to="/" exact>
            Home
          </S.NavigationLink>
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
