import styled from "styled-components";

import { NavLink, Link } from "react-router-dom";

export const Navbar = styled.nav`
  width: 100%;
  max-width: 1500px;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 auto;
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
  position: relative;
  cursor: pointer;
  padding: 10px 20px;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid black;
  }

  .basketCounter {
    position: absolute;
    top: 55%;
    right: 20%;
    background-color: black;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    color: white;
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
