import styled from "styled-components";

export const Home = styled.section`
  /* background-color: green; */
  width: 100%;
  height: 100%;
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

  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const ProducstWrapper = styled.div`
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
  height: 400px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    height: 60%;
  }

  p {
    text-align: center;
  }
`;
