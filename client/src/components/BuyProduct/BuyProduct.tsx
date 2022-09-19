import React from "react";
import { Container } from "./styles";

export default function BuyProduct(props: any) {

  function handleBuyAction() {
    
  }

  return (
    <Container>
        <div className="img-wrapper">          
          <img src={props.link} alt="" />
        </div>
        <h2>{props.name}</h2>
      <div className="buy-div">
        <h3>R$ {props.price}</h3>
        <p>Available Quantity: {props.inventory}</p>
        <label htmlFor="">Quantity:</label>
        <input type="number" className="select-units" placeholder="Units" />
        <button className="buy-button" onClick={handleBuyAction}>BUY NOW</button>
      </div>
    </Container>
  );
}
