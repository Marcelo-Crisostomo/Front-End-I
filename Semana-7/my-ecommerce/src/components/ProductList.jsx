import React from 'react';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Producto A', price: 100 },
    { id: 2, name: 'Producto B', price: 200 },
  ];

  return (
    <div>
      <h2>Listado de Productos</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
