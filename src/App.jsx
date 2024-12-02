import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import ProductDetailPage from './routes/ProductDetailPage';
import CartPage from './routes/CartPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import AccountPage from './routes/AccountPage';
import Header from './components/Header';
import Footer from './components/Footer';

const dummyUsers = [
  { username: 'test', email: 'test@example.com', password: 'password123' },
];

const dummyOrders = [
  { id: 1, user: 'test@example.com', product: 'S.H.Figuarts FRIEZA FULL POWER', date: '2024-12-01' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(dummyOrders);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const handleRegister = (userData) => {
    const existingUser = dummyUsers.find(user => user.email === userData.email);
    if (existingUser) {
      alert('El correo electrónico ya está registrado.');
      return;
    }
    dummyUsers.push(userData);
    setUser(userData);
  };

  const handleLogin = ({ email, password }) => {
    const foundUser = dummyUsers.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUpdateProfile = (updatedData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedData,
    }));
    const userIndex = dummyUsers.findIndex(user => user.email === prevUser.email);
    dummyUsers[userIndex] = { ...dummyUsers[userIndex], ...updatedData };
  };

  const handleAddOrder = (product) => {
    if (!user) {
      alert('Debes iniciar sesión para realizar una compra.');
      return;
    }
    const newOrder = {
      id: orders.length + 1,
      user: user.email,
      product: product.name,
      date: new Date().toISOString().split('T')[0],
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    alert('Compra realizada exitosamente.');
  };

  return (
    <Router>
      <Header onSearch={handleSearch} cartItemCount={getCartItemCount()} user={user} logout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage searchTerm={searchTerm} handleAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetailPage handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} handleAddOrder={handleAddOrder} />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage handleRegister={handleRegister} />} />
        <Route path="/account" element={<AccountPage user={user} handleUpdateProfile={handleUpdateProfile} orders={orders} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

/*
no funca no se pq 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import ProductDetailPage from './routes/ProductDetailPage';
import CartPage from './routes/CartPage';
import CheckoutPage from './routes/CheckoutPage';
import OrderSummaryPage from './routes/OrderSummaryPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import AccountPage from './routes/AccountPage';
import Header from './components/Header';
import Footer from './components/Footer';

const dummyUsers = [
  { username: 'test', email: 'test@example.com', password: 'password123' },
];

const dummyOrders = [
  { id: 1, user: 'test@example.com', product: 'S.H.Figuarts FRIEZA FULL POWER x1', date: '2024-12-01' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState(dummyOrders);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const handleRegister = (userData) => {
    const existingUser = dummyUsers.find(user => user.email === userData.email);
    if (existingUser) {
      alert('El correo electrónico ya está registrado.');
      return;
    }
    dummyUsers.push(userData);
    setUser(userData);
  };

  const handleLogin = ({ email, password }) => {
    const foundUser = dummyUsers.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUpdateProfile = (updatedData) => {
    const updatedUser = {
      ...user,
      ...updatedData
    };
    setUser(updatedUser);
    const userIndex = dummyUsers.findIndex(user => user.email === updatedUser.email);
    dummyUsers[userIndex] = updatedUser;
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handlePurchase = (paymentDetails) => {
    // Save the payment details to the state or send them to a backend
    navigate('/order-summary');
  };

  const handleConfirmPurchase = () => {
    const newOrders = cartItems.map(item => ({
      id: orders.length + 1,
      user: user.email,
      product: `${item.name} x${item.quantity}`,
      date: new Date().toISOString().split('T')[0],
    }));
    setOrders((prevOrders) => [...prevOrders, ...newOrders]);
    setCartItems([]);
    navigate('/account');
    alert('Compra realizada exitosamente.');
  };

  return (
    <Router>
      <Header onSearch={handleSearch} cartItemCount={getCartItemCount()} user={user} logout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage searchTerm={searchTerm} handleAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetailPage handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} handleCheckout={handleCheckout} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} handlePurchase={handlePurchase} />} />
        <Route path="/order-summary" element={<OrderSummaryPage cartItems={cartItems} handleConfirmPurchase={handleConfirmPurchase} />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage handleRegister={handleRegister} />} />
        <Route path="/account" element={<AccountPage user={user} handleUpdateProfile={handleUpdateProfile} orders={orders} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;*/