import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F5F5F5;
    --blue: #0433FF;
    --shape: #FFFFFF;
    --light-blue: #0433FF;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body, input, textarea, button {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
    }
}

`;
