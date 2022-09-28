import { useEffect, useState } from "react";
import { Container, Content } from "../../components/HeaderProducts/styles";
import { Location, useLocation } from "react-router-dom";
import axios from "axios";
import BuyProduct from "../../components/BuyProduct/BuyProduct";

function BuyPage() {
  type ProductData = {
    name: string;
    price: number;
    inventory: number;
    link: string;
    id: string;
  };

  interface CustomizedState {
    id: string
  }

  const location = useLocation();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const state = location.state as CustomizedState
    const { id } = state

    axios
      .get("http://localhost:3001/user/select-product", {
        headers: {
          id: `${id}`,
        },
      })
      .then((res) => setPostData(res.data));
  }, []);

  return (
    <>
      <Container>
        <Content>
          <h1>Arketfy</h1>
        </Content>
      </Container>
      {postData.map((post: ProductData) => {
        return (
          <BuyProduct
            name={post.name}
            price={post.price}
            inventory={post.inventory}
            id={post.id}
            key={post.id}
            link={post.link}
          />
        );
      })}
    </>
  );
}

export default BuyPage;
