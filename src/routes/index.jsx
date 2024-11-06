import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login,Register,Home,Menu,Cart, CompletePayment, Checkout } from '../containers';

import { UserProvider } from '../hooks/UserContext';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";



// Definindo o roteamento usando createBrowserRouter
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
             
            <Header/>
            <Home />
            <Footer/>
            </>

        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },

    {
        path: '/cardapio',
        element: (
            <>
            <Header/>
            <Menu />
            </>

        )
    },

    {
        path: '/carrinho',
        element:  <Cart/>,
           
                          
       
    },
    {
        path: '/checkout',
        element:  <Checkout/>,
           
                          
       
    },

    {
        path: '/complete',
        element:  <CompletePayment/>,
           
                          
       
    },
]);

// Componente principal que utiliza o RouterProvider para gerenciar as rotas
function App() {
    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    );
}

export default App;
