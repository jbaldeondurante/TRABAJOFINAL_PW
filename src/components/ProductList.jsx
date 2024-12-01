import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <div className="center-title">
        <h1>Productos Más Vendidos</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
            </Link>
            <p>S/{product.price}</p>
            <button onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
