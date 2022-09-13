import React from 'react'
import HeaderProducts from '../../components/HeaderProducts/HeaderProducts'
import ListProducts from '../../components/ListProducts/ListProducts'

function BuyPage() {
  return (
    <> 
      <HeaderProducts />
      <ListProducts title='Chocolate garoto 80% leite super delicioso 150g' price={6.99} inventory={635}/>
    </>
  )
}

export default BuyPage