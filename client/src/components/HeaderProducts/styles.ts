import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
  position: relative;
`;

export const Content = styled.div`

    max-width: 1120px;
    margin: 0 auto;
    background: var(--blue);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
    color: white;

    .logo {
      font-size: 2rem;
      font-weight: 600;
    }

    .hello {
      font-size: 1.5rem
    }

    button {
      position: absolute;
      right: 28%;
      padding: 1.2rem;
      top: 22%;
      border-radius: 1.2rem;
      background: #395AFF;
      color: white;
      border: none;
      font-size: 1.2rem;

      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background: #516EFF;
      }
    }
`;

export const ContainerModal = styled.form`

  text-align: center;

  h3 {
    color: black;
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }

  input {
    width: 100%;
    padding: 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    margin-bottom: 0.9rem;
    font-weight: 400;
    font-size: 1rem;

    &:nth-child(4) {
      width: 48%;
      display: inline;
      margin-right: 4%;
    }

    &:nth-child(5) {
      width: 48%;
      display: inline;
    }
  }

  button {
    width: 70%;
    padding: 0.8rem;
    font-size: 1.2rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    background: var(--light-blue);
    color: white;
    font-weight: 600;
    margin-top: 0.5rem;
    transition: 0.3s;

    &:hover{
      background: #042EE5;
    }
  }
`;