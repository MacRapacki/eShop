import styled from "styled-components";

export const Home = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .item {
    width: 500px;
    height: 150px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 5px 0;
    padding: 10px;

    p {
      width: 60%;
      text-align: center;

      &.price {
        font-weight: bold;
      }
    }

    .imgWrapper {
      width: 35%;
      height: 100%;

      img {
        height: 100%;
        max-width: 100%;
      }
    }
  }

  .summary {
    width: 500px;
    padding: 20px 10px;
    margin: 10px 0 0 0;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .emptyBasketInfo {
    margin: 50px 0 20px 0;
  }
`;
