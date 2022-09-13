import React from 'react'
import { Card, Container } from './styles'

type CardProps = {
  title: string
  price: number
  inventory: number
  isInventoryLow?: number
}

function ListProducts(props: CardProps) {
  return (
      <Container>
        <Card>
          <div className='img-wrapper'><img src="https://www.drogariaminasbrasil.com.br/media/catalog/product/7/1/71569_1.jpg" alt="" className='img'/></div>
          <h3>{props.title}</h3>
          <span className='price'>R$ {props.price}</span>
          <span className='inventory'>{props.inventory} available</span>
          <span className='low-inventory'></span>
        </Card>
        
      </Container> 
  )
}

export default ListProducts