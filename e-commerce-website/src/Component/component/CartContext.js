import React, { createContext, useState  , useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    
  };


  useEffect(() => {
    const price = cart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(price);
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}