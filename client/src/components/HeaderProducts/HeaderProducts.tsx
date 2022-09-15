import { Container, ContainerModal, Content } from './styles';
import { ReactEventHandler, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

export function HeaderProducts() {
  const isAdmin = localStorage.getItem('isadmin')
  const name = localStorage.getItem('name');

  const [ isAddNewProductModalOpen, setIsAddNewProductModalOpen ] = useState(false)

  const [ userDataAddNewProduct, setUserDataAddNewProduct ] = useState({
    name: "",
    link: "",
    price: 0,
    inventory: 0
  })

  function handleAddNewProductModal(){
    setIsAddNewProductModalOpen(true)
  }

  function handleCloseNewProductModal(){
    setIsAddNewProductModalOpen(false)
  }

  function handleChangeAddNewProduct(e: React.ChangeEvent<HTMLInputElement>) {
    setUserDataAddNewProduct({...userDataAddNewProduct, [e.target.name]: e.target.value})
  }

  async function handleAddProduct() {
    await axios.post('http://localhost:3001/user/add-new-product', userDataAddNewProduct);
  }

  return (
    <Container>
      <Content>
        <span className='logo'>Arketfy</span>
        {isAdmin === 'true' && <button onClick={handleAddNewProductModal}>add products</button>}
        <span className='hello'>hello, {name}</span>
        <Modal
        isOpen={isAddNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
        className="react-modal-content-add-product"
        overlayClassName="react-modal-overlay-add-product"
        >
            <ContainerModal>
              <h3>Post your product</h3>
              <input type="text" name='name' placeholder='What is your product' onChange={handleChangeAddNewProduct}/>
              <input type="text" name='link' placeholder='Link your photo'onChange={handleChangeAddNewProduct}/>
              <input type="number" name='price' placeholder='Price' onChange={handleChangeAddNewProduct}/>
              <input type='number' name='inventory' placeholder='Units'onChange={handleChangeAddNewProduct}/>
              <button onClick={handleAddProduct}>Add Product</button>
            </ContainerModal>
        </Modal>
      </Content>
    </Container>
  )
}

export default HeaderProducts