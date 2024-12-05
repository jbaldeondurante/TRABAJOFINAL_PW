import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../mockData';

const ProductDetailPage = ({ handleAddToCart, handleAddOrder }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>S/{product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Añadir al Carrito</button>
      <button onClick={() => handleAddOrder(product)}>Comprar Ahora</button>
    </div>
  );
};

export default ProductDetailPage;
