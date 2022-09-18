import React, { useEffect, useState } from "react";
import { Container, Content } from "../../components/HeaderProducts/styles";
import ListProducts from "../../components/ListProducts/ListProducts";
import { StyledDiv } from "./styles";
import { useLocation } from "react-router-dom";
import axios from "axios";

function BuyPage() {
  
  type ProductData = {
    name: string,
    price: number,
    inventory: number,
    link: string,
    id: string,
  }

  const location = useLocation();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/select-product", {
        headers: {
          id: `${location.state.id}`,
        },
      })
      .then((res) => setPostData(res.data));
  }, []);

  return (
    <Container>
      <Content>
        {postData.map((post: ProductData) => {
          return (
            <ListProducts
              name={post.name}
              price={post.price}
              inventory={post.inventory}
              id={post.id}
              key={post.id}
              link={post.link}
            />
          );
        })}
      </Content>
    </Container>
  );
}

export default BuyPage;
