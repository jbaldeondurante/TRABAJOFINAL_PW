import React, { useState } from 'react';

const Header = () => {
  const [showStockDropdown, setShowStockDropdown] = useState(false);
  const [showPreventasDropdown, setShowPreventasDropdown] = useState(false);

  return (
    <header>
      <div className="header-top">
        <img src='/images/inat_store.png' alt="INAT STORE Logo" className="logo" />
        <div className="search-box">
          <input type="text" placeholder="Buscar productos..." />
          <button type="button">BUSCAR</button>
        </div>
        <div className="header-links">
          <nav>
            <ul>
              <li><a href="#">Regístrate Aquí</a></li>
              <li><a href="#">Mi Cuenta</a></li>
              <li><a href="#"><img src='/images/carrito.png' alt="Carrito" className="cart-icon" /> 0</a></li>
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
