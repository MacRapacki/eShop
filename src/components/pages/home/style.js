import styled from "styled-components";

import BG from "../../../images/homebg.jpg";

export const Home = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${BG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .intro {
    background-color: rgba(0, 0, 0, 0.6);
    /* width: 70%; */
    /* height: 50%; */
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 55px;
    color: white;
    border-radius: 8px;

    h1 {
      font-size: 32px;
      text-align: center;
      width: 100%;
      margin-bottom: 50px;
    }

    p {
      font-size: 20px;
      text-align: center;
    }
  }
`;
