import styled from "styled-components";

export const Products = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px - 50px);
  padding: 20px;
`;

export const ButtonsPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  margin: 5px 20px;
  cursor: pointer;
  border: none;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: 0.2s linear;

  &:hover {
    border: 2px solid black;
  }
`;

export const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ProductFrame = styled.div`
  width: 250px;
  border: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  margin-top: 15px;
  transition: 0.2s linear;
  border-radius: 8px;

  &:hover {
    border: 2px solid black;
  }

  & > * {
    margin: 8px auto;
  }
  .imgWrapper {
    width: 200px;
    height: 200px;
    display: grid;
    place-items: center;
    img {
      max-width: 80%;
      max-height: 200px;
    }
  }

  p {
    text-align: center;
    height: 50px;
    margin-top: 10px;
  }

  .price {
    font-weight: bold;
  }
`;
