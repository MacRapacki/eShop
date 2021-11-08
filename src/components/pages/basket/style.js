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
    position: relative;

    p {
      width: 60%;
      text-align: center;

      .itemQuantity {
        font-weight: bold;
      }

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

    .removeButton {
      position: absolute;
      height: 30px;
      right: 10px;
      bottom: 10px;
    }
  }

  .summary {
    width: 500px;
    padding: 20px 10px;
    margin: 10px 0 0 0;
    border: 2px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .emptyBasketInfo {
    margin: 50px 0 20px 0;
  }
`;

export const checkoutBtn = styled.button`
  width: 150px;
  height: 70px;
  background-color: lightblue;
  margin-top: 25px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }

  &:disabled {
    opacity: 0.4;
    cursor: auto;
    border: none;
  }
`;
