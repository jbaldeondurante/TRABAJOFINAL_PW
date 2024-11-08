import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Productos Más Vendidos</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>S/{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
