import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F1F1F1;
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

    body {
      background-color: var(--background);
    }
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.6); 

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {  
    width: 30%;
    max-width: 576;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem
  }

  .react-modal-overlay-add-product {
    background: rgba(0, 0, 0, 0.6); 

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content-add-product {  
    width: 30%;
    max-width: 576;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem
  }  
`;
