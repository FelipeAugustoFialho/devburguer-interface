import Logo from '../../assets/logoCarrinho.png';
import { Title } from '../Login/styles';
import { Banner, Container, Content } from './styles';


export function Cart() {

return (

    <Container>
        <Banner>
            <img src={Logo} alt='logo devburguer'/>
        </Banner>
    <Title> Checkout - Pedido </Title>
    <Content>
        <CartItems />
        <CartResume />
      
    </Content>
    </Container>
);

}