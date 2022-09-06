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

  .form {
    position: absolute;
    right: 0;
    width: 60vw;
    height: 100vh;
    background: var(--background);
    text-align: center;

    input, button {
      width: 52%;
      padding: 0.75rem 1.25rem;
      margin: 0.5rem 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      box-sizing: border-box;

      &:first-child {
        /* margin-top: 17%; */
      }
    }

    button {
      background: var(--light-blue);
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        opacity: 0.80;
      }

      &:last-child {
        background: var(--shape);
        color: var(--light-blue);

        &:hover {
          transition: 0.3s;
          filter: brightness(95%);
        }
      }
    }
  }
`;
