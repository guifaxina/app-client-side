import styled from "styled-components";

export const Card = styled.div`
  
  cursor: pointer;
  position: relative;
  margin-left: 1.7rem;
  margin-top: 3rem;
  width: 14.5rem;
  height: 26.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px 1px gray;

  .img-wrapper {
    text-align: center;
    height: 50%;
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

  .low-inventory {
    font-weight: 600;
    margin-left: 0.6rem;
    margin-top: 0.75rem;
    display: block;
    width: 8.5rem;
    color: red;
    border: 2px solid red;
    padding: 3px;
    opacity: 65%;
  }

  .img {
    display: block;
    margin-top: 2.8rem;
    margin-bottom: 1.2rem;
    max-width: 13rem;
    max-height: 12rem;
  }

  .delete-icon {
    margin-top: 0.7rem; 
    position: absolute;
    right: 5%;
    cursor: pointer;
  }

  .priority-icon{
    
  }
`;