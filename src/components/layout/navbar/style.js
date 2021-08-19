import styled from "styled-components";

import { NavLink, Link } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const List = styled.ul`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled.li`
  list-style: none;
  display: grid;
  place-items: center;
`;

export const NavigationLink = styled(NavLink)`
  cursor: pointer;
  padding: 10px 20px;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid blueviolet;
  }
`;
export const LogoLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.div`
  width: 10px;
`;

export const BasketIcon = styled.img`
  width: 25px;
`;
