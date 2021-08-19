import styled from "styled-components";

import { NavLink } from "react-router-dom";

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
  /* border: 1px solid black; */
`;

export const Logo = styled.div`
  width: 10px;
`;

export const BasketIcon = styled.img`
  width: 25px;
`;
