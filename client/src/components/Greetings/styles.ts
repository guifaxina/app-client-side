import styled from "styled-components";

export const Container = styled.section`
  .greetings-div {
    width: 40vw;
    height: 100vh;
    background: var(--blue);
    color: white;
    position: absolute;

    h1 {
      font-size: 4rem;
      display: flex;
      text-align: left;
      margin: 0;
      position: absolute;
      top: 48%;
      left: 28%;
      -ms-transform: translate(-50%, -100%);
      transform: translate(-50%, -100%);
    }

    h2 {
      display: flex;
      justify-content: left;
      margin: 0;
      position: absolute;
      top: 57%;
      left: 39%;
      -ms-transform: translate(-50%, -100%);
      transform: translate(-50%, -100%);
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .right-div {
    padding-top: 3.5rem;
    position: absolute;
    right: 0;
    width: 60vw;
    height: 100vh;
    background: var(--background);
    text-align: center;
  }

  .form {
    input, button {
      width: 51%;
      padding: 0.75rem 1.25rem;
      margin: 0.5rem 0;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      box-sizing: border-box;
    }

    input {
      margin-top: 1.3rem;
      margin-bottom: 0.75rem;
    }

    label {
      position: absolute;
      font-size: 0.9rem;
      color: var(--blue);
      font-weight: 500;
      margin-left: 0.3rem;
    }

    button {
      background: var(--light-blue);
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #042EE5
      }
    }
  }

  
`;
