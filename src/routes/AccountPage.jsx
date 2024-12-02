import React, { useState } from 'react';

const AccountPage = ({ user, handleUpdateProfile, orders }) => {
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== currentPassword) {
      alert('La contraseña actual no es correcta.');
      return;
    }
    handleUpdateProfile({ username, email, password: newPassword });
    alert('Contraseña actualizada correctamente.');
  };

  const userOrders = orders.filter(order => order.user === user.email);

  return (
    <div className="account-page">
      <h1>Mi Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          readOnly
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly
        />
        <input
          type="password"
          placeholder="Contraseña Actual"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nueva Contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Guardar Cambios</button>
      </form>
      
      <h2>Órdenes Realizadas</h2>
      <ul>
        {userOrders.map(order => (
          <li key={order.id}>
            <strong>Producto:</strong> {order.product} <br />
            <strong>Cantidad:</strong> {order.quantity} <br />
            <strong>Fecha:</strong> {order.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountPage;
