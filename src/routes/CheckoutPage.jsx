import React, { useState } from 'react';

const CheckoutPage = ({ cartItems, handlePurchase }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !email || !address || !paymentMethod) {
      setShowError(true);
      return;
    }
    handlePurchase({ name, surname, email, address, paymentMethod });
  };

  return (
    <div className="checkout-page">
      <h1>Detalles de Pago y Entrega</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección de Entrega"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Selecciona un método de pago</option>
          <option value="tarjeta">Tarjeta de Crédito/Débito</option>
          <option value="yape">Yape</option>
        </select>
        {showError && <p style={{ color: 'red' }}>Todos los campos son obligatorios.</p>}
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
