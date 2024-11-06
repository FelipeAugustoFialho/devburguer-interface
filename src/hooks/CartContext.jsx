import { useContext, createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);


  const updateCartState = (newProducts) => {
    setCartProducts(newProducts);
    localStorage.setItem('devburguer:cartInfo', JSON.stringify(newProducts));
  };


  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
    let newProductsInCart = [...cartProducts];

    if (cartIndex >= 0) {
      newProductsInCart[cartIndex] = {
        ...newProductsInCart[cartIndex],
        quantity: newProductsInCart[cartIndex].quantity + 1,
      };
    } else {
      const newProduct = { ...product, quantity: 1 };
      newProductsInCart = [...newProductsInCart, newProduct];
    }

    updateCartState(newProductsInCart);
  };



  const clearCart = () => {
    setCartProducts([]);
    
    updateCartState([]);
  };

  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);
    updateCartState(newCart);
  };



  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    );
    updateCartState(newCart);
  };



  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
    
    if (cartIndex >= 0 && cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) =>
        prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
      );
      updateCartState(newCart);
    } else {
      deleteProduct(productId);
    }
  };



  useEffect(() => {
    const clientCartData = localStorage.getItem('devburguer:cartInfo');
    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
