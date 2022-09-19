import axios from "axios";
import React, { useState } from "react";
import { Container } from "./styles";

export default function BuyProduct(props: any) {

  const [ units, setUnits ] = useState({
    id: props.id,
    units: 0
  })

  function handleUnits(e: any) {
    setUnits({...units, [e.target.name]: e.target.value})
    console.log(units);
  }

  function handleBuyAction() {
    axios.patch('http://localhost:3001/user/buy', units)

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
        <input type="number" className="select-units" name="units" placeholder="Units" min={1} max={props.inventory} onChange={handleUnits}/>
        <button className="buy-button" onClick={handleBuyAction}>BUY NOW</button>
      </div>
    </Container>
  );
}
