import React from 'react'
import { Card, Container } from './styles'

function ListProducts() {
  return (
      <Container>
        <Card>
          <div className='img-wrapper'><img src="" alt="" /></div>
          <h3>name</h3>
          <span>price</span>
          <span>inventory</span>
          <span className='low-inventory'></span>
        </Card>
      </Container> 
  )
}

export default ListProducts