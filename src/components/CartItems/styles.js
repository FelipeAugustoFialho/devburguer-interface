import styled from "styled-components";


export const ProductImage = styled.img`
height: 80px;
width: 80px;
border-radius: 16px;
`

export const ButtonGroup = styled.div`
display: flex;
align-items: center;
gap: 12px;

button{
    display:flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    color:#fff;
    border-radius: 4px;
    background-color: #9758a6;

    &:hover{
        background-color: #6758a6;
    }
}
`

export const EmptyCart = styled.p`
font-size: 20px;
text-align: center;
font-weight: bold;
`

export const ProductTotalPrice = styled.p`
font-weight: bold;


`
export const TrashImagem = styled.img`
width: 30px; 
height: 30px;
cursor:pointer;
`

