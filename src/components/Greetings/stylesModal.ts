import styled from "styled-components"; 

export const ContainerModal = styled.div`
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
    color: red;
  }

  .register-error-btn {
      width: 51%;
      padding: 0.75rem 1.25rem;
      margin: 0.5rem 0;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      box-sizing: border-box;
      background: var(--light-blue);
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      cursor: pointer;
      transition: 0.3s;
      margin-left: 25%;
      margin-top: 1rem;

      &:hover {
        background: #042EE5
      }
  }
`;