import styled from 'styled-components'

export const ContainerModal = styled.form`

  text-align: center;

  h2 {
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