import { Container, Content } from './styles'

export function HeaderProducts() {
  return (
    <Container>
      <Content>
        <span className='logo'>Arketfy</span>
        <button>add products</button>
        <span className='hello'>hello, name</span>
      </Content>
    </Container>
  )
}

export default HeaderProducts