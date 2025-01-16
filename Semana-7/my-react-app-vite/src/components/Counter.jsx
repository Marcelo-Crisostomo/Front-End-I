import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Estado local "count", inicializado en 0.

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Counter;
