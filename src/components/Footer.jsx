import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <p>Email: ventas@inatstore.com</p>
          <p>Tel: (051) 992 622 557</p>
          <div className="social-icons">
            <a href="#"><img src='/images/facebook_logo.png' alt="Facebook" /></a>
            <a href="#"><img src='/images/instagram_logo.png' alt="Instagram" /></a>
            <a href="#"><img src='/images/tiktok_logo.png' alt="TikTok" /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p><a href="#">Sobre INAT STORE</a></p>
          <p><a href="#">Políticas de Privacidad</a></p>
          <p><a href="#">Términos y Condiciones</a></p>
        </div>
        <div className="footer-section">
          <h3>Atención al Cliente</h3>
          <p><a href="#">Preguntas Frecuentes</a></p>
          <p><a href="#">Ofertas Online</a></p>
          <p><a href="#">Libro de Reclamaciones</a></p>
        </div>
        <div className="footer-section">
          <h3>Formas de Comprar</h3>
          <p><a href="#">Preventa</a></p>
          <p><a href="#">Envíos y Despacho</a></p>
          <p><a href="#">Métodos de Pago</a></p>
        </div>
      </div>
      <p>Diseñado y desarrollado por INAT STORE en 2022.</p>
      <div className="whatsapp-icon">
        <a href="#"><img src='/images/whatsapp.png' alt="WhatsApp" /></a>
      </div>
    </footer>
  );
};

export default Footer;
