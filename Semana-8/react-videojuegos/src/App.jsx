import React, { useState, useEffect } from 'react';
import VideojuegoList from './components/VideojuegoList';
import VideojuegoForm from './components/VideojuegoForm';

const App = () => {
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=Pega_Aqui_TuAPI_Key')
      .then((response) => response.json())
      .then((data) => setVideojuegos(data.results || []));
  }, []);

  const addVideojuego = (newGame) => {
    setVideojuegos([...videojuegos, newGame]);
  };

  const removeVideojuego = (id) => {
    setVideojuegos(videojuegos.filter((game) => game.id !== id));
  };

  return (
    <div>
      <h1 className="text-center my-4">Gestor de Videojuegos</h1>
      <VideojuegoForm onAdd={addVideojuego} />
      <VideojuegoList videojuegos={videojuegos} onRemove={removeVideojuego} />
    </div>
  );
};

export default App;
