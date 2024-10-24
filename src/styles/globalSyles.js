import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';



export default createGlobalStyle`

*{

    margin:0;
padding:0;
box-sizing:border-box;
outline:none;
font-family: "Poppins", sans-serif;
font-weight: 400;
font-style: normal;

}
button {

 cursor: pointer;
}
a {
    cursor: pointer;
};

`;
/*
const globalStyles = createGlobalStyle`
* {
margin:0;
padding:0;
box-sizing:border-box;
outline:none;
font-family: "Poppins", sans-serif;
font-weight: 400;
font-style: normal;

}
button {

 cursor: pointer;
}
a {
    cursor: pointer;
}

`;
export default globalStyles;


*/