import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => (
  <div className="cart">
    <h2>Carrello</h2>
    {cartItems.length === 0 ? (
      <p>Il carrello è vuoto</p>
    ) : (
      cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>€{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Rimuovi</button>
        </div>
      ))
    )}
  </div>
);

export default Cart;
