import { Container, ContainerModal, Content } from './styles';
import { useState} from 'react';
import Modal from 'react-modal';

export function HeaderProducts() {
  const isAdmin = localStorage.getItem('isadmin')
  const name = localStorage.getItem('name');

  const [ isAddNewProductModalOpen, setIsAddNewProductModalOpen ] = useState(false)

  function handleAddNewProductModal(){
    setIsAddNewProductModalOpen(true)
  }

  function handleCloseNewProductModal(){
    setIsAddNewProductModalOpen(false)
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
              <input type="text" placeholder='What is your product'/>
              <input type="text" placeholder='Link your photo'/>
              <input type="number" placeholder='Price' />
              <input type='number' placeholder='Units'/>
              <button>Add Product</button>
            </ContainerModal>
        </Modal>
      </Content>
    </Container>
  )
}

export default HeaderProducts