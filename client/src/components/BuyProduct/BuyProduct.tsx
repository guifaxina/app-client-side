import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerModal } from "./styles";
import Modal from "react-modal";

export default function BuyProduct(props: any) {
  const navigate = useNavigate();

  const [units, setUnits] = useState({
    id: props.id,
    units: 0,
  });

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  function handleUnits(e: React.ChangeEvent<HTMLInputElement>) {
    setUnits({ ...units, [e.target.name]: e.target.value });
  }

  function handleBuyAction() {
    axios.patch("http://localhost:3001/user/buy", units);
    setIsBuyModalOpen(true);
  }

  function handleCloseBuyModal() {
    setIsBuyModalOpen(false);
  }

  function handleGoBack() {
    navigate("/products");
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
        <input
          type="number"
          className="select-units"
          name="units"
          placeholder="Units"
          min={1}
          max={props.inventory}
          onChange={handleUnits}
        />
        <button className="buy-button" onClick={handleBuyAction}>
          BUY NOW
        </button>
      </div>
      <Modal
        isOpen={isBuyModalOpen}
        onRequestClose={handleCloseBuyModal}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <ContainerModal>
          <h2>Thanks for your order! ❤️</h2>
          <h3>You can check your email for shipment information. </h3>
          <button onClick={handleGoBack} className="go-back-btn">
            Go back to products
          </button>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
