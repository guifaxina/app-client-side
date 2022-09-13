import { Container, Content } from './styles';
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
        >
                    
        </Modal>
      </Content>
    </Container>
  )
}

export default HeaderProducts