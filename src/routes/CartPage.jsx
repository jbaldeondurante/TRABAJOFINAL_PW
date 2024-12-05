import React, { useState } from 'react';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, handleCheckout }) => {
  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <h2>{item.name}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: S/{item.price}</p>
              <div>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => onRemoveItem(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <button onClick={handleCheckout}>Realizar Pago</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
