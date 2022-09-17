import React from 'react'
import { Container, Content } from '../../components/HeaderProducts/styles'
import ListProducts from '../../components/ListProducts/ListProducts'
import { StyledDiv } from './styles'

function BuyPage() {
  return (
    <Container>
      <Content>
        <ListProducts name={'bla'} price={10} inventory={10} id={'lo'} />
      </Content>
    </Container>
  )
}

export default BuyPage