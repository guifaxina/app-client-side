import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  gap: 1.2rem;
`;

export const Card = styled.div`

  margin-top: 3rem;
  width: 14.5rem;
  height: 24.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px 1px gray;

  .img-wrapper {
    text-align: center;
    height: 55%;
    display: block;
  }

  h3, .price, .inventory {
    margin-left: 0.6rem;
  }

  .price{
    display: block;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1.3rem;
    font-size: 1.2rem;
  }

  .inventory {
    color: gray;
    border: 2px solid var(--blue);
    padding: 3px;
  }

  .img {
    max-width: 13rem;
    max-height: 13rem;
  }
`;