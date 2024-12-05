import React from 'react';

const OrderSummaryPage = ({ cartItems, handleConfirmPurchase }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="order-summary-page">
      <h1>Resumen de Compra</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x{item.quantity}: S/{item.quantity * item.price}
          </li>
        ))}
      </ul>
      <p>Total: S/{totalAmount}</p>
      <button onClick={handleConfirmPurchase}>Confirmar</button>
    </div>
  );
};

export default OrderSummaryPage;
