import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch, cartItemCount, user, logout }) => {
  const [showStockDropdown, setShowStockDropdown] = useState(false);
  const [showPreventasDropdown, setShowPreventasDropdown] = useState(false);

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <header>
      <div className="header-top">
        <Link to="/">
          <img src='/images/inat_store.png' alt="INAT STORE Logo" className="logo" />
        </Link>
        <div className="search-box">
          <input type="text" placeholder="Buscar productos..." onChange={handleInputChange} />
          <button type="button">BUSCAR</button>
        </div>
        <div className="header-links">
          <nav>
            <ul>
              {!user && <li><Link to="/register">Regístrate Aquí</Link></li>}
              {!user && <li><Link to="/login">Iniciar Sesión</Link></li>}
              {user && <li><Link to="/account">Mi Cuenta</Link></li>}
              {user && <li><button onClick={logout}>Cerrar Sesión</button></li>}
              <li>
                <Link to="/cart">
                  <img src='/images/carrito.png' alt="Carrito" className="cart-icon" /> {cartItemCount}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#"><img src='/images/facebook_logo.png' alt="Facebook" /></a>
            <a href="#"><img src='/images/instagram_logo.png' alt="Instagram" /></a>
            <a href="#"><img src='/images/tiktok_logo.png' alt="TikTok" /></a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <ul>
          <li><a href="#">OFERTA VIGENTE</a></li>
          <li onMouseEnter={() => setShowStockDropdown(true)} onMouseLeave={() => setShowStockDropdown(false)}>
            <a href="#">STOCK</a>
            {showStockDropdown && (
              <ul className="dropdown">
                <li><a href="#">prueba1</a></li>
                <li><a href="#">prueba2</a></li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => setShowPreventasDropdown(true)} onMouseLeave={() => setShowPreventasDropdown(false)}>
            <a href="#">PREVENTAS</a>
            {showPreventasDropdown && (
              <ul className="dropdown">
                <li><a href="#">prueba1</a></li>
                <li><a href="#">prueba2</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">INAT CASE</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
