import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import ProductDetailPage from './routes/ProductDetailPage';
import CartPage from './routes/CartPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import AccountPage from './routes/AccountPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
