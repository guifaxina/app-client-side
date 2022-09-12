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