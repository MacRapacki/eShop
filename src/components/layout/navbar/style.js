import styled from "styled-components";

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

export const Logo = styled.div`
  width: 50px;
`;

export const List = styled.ul`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled.li`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid black;
  display: grid;
  place-items: center;
`;

export const BasketIcon = styled.img`
  width: 25px;
`;
