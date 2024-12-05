import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import InfoBoxes from '../components/InfoBoxes';
import ImageGallery from '../components/ImageGallery';
import { images1, images2, images3, products } from '../mockData';

const LandingPage = ({ searchTerm }) => {
  const [cartItems, setCartItems] = useState([]);

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing-page">
      <div className="image-section">
        <ImageGallery images={images1} />
        <ImageGallery images={images2} />
        <ImageGallery images={images3} />
      </div>
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <InfoBoxes />
    </div>
  );
};

export default LandingPage;
