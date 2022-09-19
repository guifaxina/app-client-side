import styled from 'styled-components';

export const Container = styled.div`

    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    padding: 2.5rem;
    color: white;

  .img-wrapper {
    background: var(--shape);
    padding: 2rem;
    border-radius: 0.5rem;
  }

  img {
    display: inline;
    width: 30rem;
    max-height: 25rem;
  }

  h2 {
    color: black;
    margin-left: 1rem;
    width: 35rem;
  }

  .select-units {
    margin-left: 5%;
    display: inline;
    margin-bottom: 1rem;
    height: 1.8rem;
    width: 4.2rem;
    border-radius: 0.25rem;
    border: none;
    background: var(--background)
  }

  .buy-button {
    width: 16rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: none;
    background: var(--blue);
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  .buy-div {
    display: block;
    text-align: left;
    color: black;
    font-weight: 500;
    background-color: var(--shape);
    border-radius: 0.5rem;
    margin: 0 auto;
    width: 20rem;
    padding: 1rem;
    margin-bottom: 15rem;
    
    label {
      color: #373737
    }

    p{
      margin-bottom: 0.7rem;
      color: #373737
    }
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2.5rem
  }
`;

export const ContainerModal = styled.div`

  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 3rem;
    color: #373737;
  }
  
  .go-back-btn {
    background: var(--blue);
    border-radius: 0.25rem; 
    height: 2.5rem;
    width: 60%;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 600;
   
  }
`;