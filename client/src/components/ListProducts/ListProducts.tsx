import React from "react";
import { Card } from "./styles";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

type CardProps = {
  name: string;
  price: number;
  inventory: number;
  isInventoryLow?: number;
  link?: string;
  id: string
};



function ListProducts(props: CardProps) {
  const isAdmin = localStorage.getItem('isadmin')

  const token = localStorage.getItem('token');

  async function handleDeleteAction(id: string) {
    axios.delete(`http://localhost:3001/admin/delete-product/${id}`, {headers: {
      "authorization": `${token}`
    }});
    window.location.reload()
  }

  return (
    <Card>
      {isAdmin == 'true' && 
      <DeleteIcon 
      color='error'
      className='delete-icon'
      onClick={() => {handleDeleteAction(props.id)}}
      id={props.id}
      />}
      
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
