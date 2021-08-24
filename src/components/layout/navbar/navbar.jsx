import React, { useContext }  from "react";

import * as S from "./style";

import { DataContext } from "../../../context/DataContext";


import BasketIcon from "../../../images/shopping-basket.svg";

const Navbar = () => {

const {basketArray} = useContext(DataContext)

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
            <S.BasketIcon src={BasketIcon} alt="basket" />{basketArray.length > 0 &&
            <div className="basketCounter">{basketArray.length}</div>}
          </S.NavigationLink>
        </S.Item>
      </S.List>
    </S.Navbar>
  );
};

export default Navbar;
