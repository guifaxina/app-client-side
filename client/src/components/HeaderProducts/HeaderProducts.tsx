import { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
//styles
import { Container, ContainerModal, Content } from "./styles";

export function HeaderProducts() {
  const token = localStorage.getItem("token");

  const [isAddNewProductModalOpen, setIsAddNewProductModalOpen] = useState(false);

  const [userDataAddNewProduct, setUserDataAddNewProduct] = useState({
    name: "",
    link: "",
    price: 0,
    inventory: 0,
  });

  function handleAddNewProductModal() {
    setIsAddNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsAddNewProductModalOpen(false);
  }

  function handleChangeAddNewProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setUserDataAddNewProduct({
      ...userDataAddNewProduct,
      [event.target.name]: event.target.value,
    });
  }

  async function handleAddProduct() {
    await axios.post(
      "http://localhost:3001/admin/add-new-product",
      userDataAddNewProduct,
      {
        headers: {
          authorization: `${token}`,
        },
      }
    );
  }

  const [ userData, setUserData ] = useState({
    id: "",
    admin: false,
    name: "",
  })

  useEffect(() => {
    axios.get("http://localhost:3001/user/user-data", {
      headers: {
        authorization: `${token}`,
      },
    }).then(res => setUserData(res.data))
  }, []);

  return (
    <Container>
      <Content>
        <span className="logo">Arketfy</span>
        {userData.admin == true && (
          <button onClick={handleAddNewProductModal}>add products</button>
        )}
        <span className="hello">hello, {userData.name}</span>
        <Modal
          isOpen={isAddNewProductModalOpen}
          onRequestClose={handleCloseNewProductModal}
          className="react-modal-content-add-product"
          overlayClassName="react-modal-overlay-add-product"
        >
          <ContainerModal>
            <h3>Post your product</h3>
            <input
              type="text"
              name="name"
              placeholder="What is your product"
              onChange={handleChangeAddNewProduct}
            />
            <input
              type="text"
              name="link"
              placeholder="Link your photo"
              onChange={handleChangeAddNewProduct}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChangeAddNewProduct}
            />
            <input
              type="number"
              name="inventory"
              placeholder="Units"
              onChange={handleChangeAddNewProduct}
            />
            <button onClick={handleAddProduct}>Add Product</button>
          </ContainerModal>
        </Modal>
      </Content>
    </Container>
  );
}

export default HeaderProducts;
