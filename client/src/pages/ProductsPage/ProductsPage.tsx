import axios from "axios";
import { useEffect, useState } from "react";
import HeaderProducts from "../../components/HeaderProducts/HeaderProducts";
import ListProducts from "../../components/ListProducts/ListProducts";
import { Container } from './styles'

function ProductsPage() {

  type ProductType = {
    id: string
    name: string
    price: number
    inventory: number
    isInventoryLow?: number
    link?: string
  }

  const [ productsList, setProductsList ] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("http://localhost:3001/user/get-products")
        .then(res => setProductsList(res.data))
    };
    
    getProducts();

  }, []);

  return (
    <>
      <HeaderProducts />
      <Container>
        {productsList.map((product: ProductType) => {
          return (
            <ListProducts 
            link={product.link}
            name={product.name}
            price={product.price}
            inventory={product.inventory}
            key={product.id}
            id={product.id}
            />
          );
        })}
      </Container>
    </>
  );
}

export default ProductsPage;
