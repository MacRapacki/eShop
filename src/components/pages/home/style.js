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
    width: 70%;
    height: 50%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
