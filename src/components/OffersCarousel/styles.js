import styled from "styled-components";


export const Container = styled.div `


.carousel-item {
   
    padding-right: 40px;
     
}

padding-left: 40px;
padding-bottom:40px;

overflow-x:hidden;
.react-multi-carousel-list {

    overflow: visible;
}


`

export const Title = styled.h2`
font-size: 32px;
color:#61a120;
font-weight: 800;
padding-bottom: 12px;
position: relative;
text-align: center;
margin: 70px 0;


&::after { 
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: calc(50% - 28px);
}
`



export const CardImage = styled.img`

`

export const ContainerInfo = styled.div`


display: flex;
flex-direction: column;
align-items: center;
gap:40px;
padding: 20px;
border-radius: 8px;
background-color: #FFFFFF;
cursor: grab;
box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
position: relative;

div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:5px;
}
    p {
    font-size:18px;
    color: #ff8c05;
    line-height: 20px;
    font-weight: 700;
    margin-top: 40px;
    }
    strong {
    font-size: 22px;
    color: #363636;
    font-weight: 800;
    line-height: 20px;

}
`