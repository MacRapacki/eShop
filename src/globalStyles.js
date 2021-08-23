import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

section {
  min-height: calc(100vh - 60px - 50px);
}
`;
