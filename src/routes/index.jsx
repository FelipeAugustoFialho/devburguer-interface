import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import { Login } from '../containers/Login';
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import { UserProvider } from '../hooks/UserContext';
import { Menu } from '../containers/Menu';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardsThree } from "@phosphor-icons/react/dist/ssr";
import { Cart } from "../containers/Cart";

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
