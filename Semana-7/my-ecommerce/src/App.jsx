import { useState } from 'react'

import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import './App.css'

function App() {
  return (
    <div>
      <h1>Tienda React</h1>
      <ShoppingCart /> {/* Carrito de compras */}
     
    </div>
  );
}

export default App;