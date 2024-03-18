
import { useState, useEffect } from 'react';
import './App.css';
import { Products } from './Products';

function App() {
  const [price, setPrice] = useState(0)
  const [cartItems, setCartItems] = useState(0)
  const updateCartPrice = (prod1price, cart) => {
    console.log(prod1price)
    console.log(cart)
    setPrice(prod1price)
    setCartItems(cart)
  }



  return (
    <div className="App">
      <Products price={price} cartItems={cartItems} updatecp={updateCartPrice} />
    </div>
  );
}

export default App;