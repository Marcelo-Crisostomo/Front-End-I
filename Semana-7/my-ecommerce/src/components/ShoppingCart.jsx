import React, { useState } from 'react';
import CartTotal from './CartTotal';
import ProductList from './ProductList'; // Importación correcta del componente

const ShoppingCart = () => {
  const [cart, setCart] = useState([]); // Estado inicial del carrito

  const addToCart = (product) => {
    const uniqueProduct = { ...product, uniqueId: Date.now() }; // Generar un uniqueId
    setCart([...cart, uniqueProduct]); // Agregar el producto único al carrito
  };

  const removeFromCart = (uniqueId) => {
    setCart(cart.filter(item => item.uniqueId !== uniqueId)); // Filtrar por uniqueId
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>

      <ul>
        {cart.map(item => (
          <li key={item.uniqueId}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.uniqueId)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <CartTotal cart={cart} />

      {/* Aquí utilizamos ProductList y le pasamos la función addToCart */}
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default ShoppingCart;
