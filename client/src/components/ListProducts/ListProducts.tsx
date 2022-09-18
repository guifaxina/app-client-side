import React, { useState } from "react";
import { Card } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type CardProps = {
  name: string;
  price: number;
  inventory: number;
  isInventoryLow?: number;
  link?: string;
  id: string;
};

function ListProducts(props: CardProps) {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isadmin");
  const token = localStorage.getItem("token");

  async function handleDeleteAction(id: string) {
    axios.delete(`http://localhost:3001/admin/delete-product/${id}`, {
      headers: {
        authorization: `${token}`,
      },
    });
    window.location.reload();
  }

  function handleProductPage(id: string) {
    navigate("/buy-page", {state: { id: id }});
  }

  return (
    <Card onClick={() => handleProductPage(props.id)}>
      {isAdmin == "true" && (
        <DeleteIcon
          color="error"
          className="delete-icon"
          onClick={() => {
            handleDeleteAction(props.id);
          }}
          id={props.id}
        />
      )}

      <div className="img-wrapper">
        <img src={props.link} alt="" className="img" />
      </div>
      <h3>{props.name}</h3>
      <span className="price">R$ {props.price}</span>
      <span className="inventory">{props.inventory} available</span>
      {props.inventory <= 10 && (
        <span className="low-inventory">
          <PriorityHighIcon fontSize="inherit" className="priority-icon" />
          Low Inventory
        </span>
      )}
    </Card>
  );
}

export default ListProducts;
