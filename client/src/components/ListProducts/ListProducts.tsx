import React from "react";
import { Card, Container } from "../../pages/BuyPage/styles";

type CardProps = {
  name: string;
  price: number;
  inventory: number;
  isInventoryLow?: number;
  link?: string;
};

function ListProducts(props: CardProps) {
  return (
    <Card>
      <div className="img-wrapper">
        <img src={props.link} alt="" className="img" />
      </div>
      <h3>{props.name}</h3>
      <span className="price">R$ {props.price}</span>
      <span className="inventory">{props.inventory} available</span>
      <span className="low-inventory"></span>
    </Card>
  );
}

export default ListProducts;
