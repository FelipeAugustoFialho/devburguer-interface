import PropTypes from "prop-types";
import { ContainerInfo,CardImage } from "../OffersCarousel/styles";
import { CartButton } from "../CartButton";
import { useCart } from "../../hooks/CartContext";


export function CardProduct({ product }){
const { putProductInCart } = useCart()

return(
    <ContainerInfo>
        <CardImage src = {product.url} alt={product.name}/>
        <div>
            <p>{product.name}</p>
            <strong>{product.currencyValue}</strong>
           


<CartButton onClick={() => { putProductInCart(product); console.log('clicou'); }}> </CartButton>
            </div>
    </ContainerInfo>
);

}

CardProduct.propTypes = {

    product:PropTypes.object,
};