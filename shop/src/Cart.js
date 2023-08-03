import React from 'react';

function Cart({ cartItems, updateCartItemQuantity, removeFromCart, calculateTotalPrice }) {
  // ... your existing code ...

  return (
    <div>
      <h2>Cart</h2>
      {/* Render cart items and their quantities */}
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateCartItemQuantity(item.id, e.target.value)}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>

          
        </div>
      ))}
      {/* Display the total price */}
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
}

export default Cart;
