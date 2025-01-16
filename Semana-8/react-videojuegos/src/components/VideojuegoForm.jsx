import React, { useState } from 'react';

const VideojuegoForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    onAdd({
      id: Date.now(),
      name,
      background_image: image, // Asegúrate de que este campo coincida con VideojuegoList
      genres: [{ name: 'Manual' }]
    });
    setName('');
    setImage('');
  };

  return (
    <form className="container my-4" onSubmit={handleSubmit}>
      <h2 className="text-center">Agregar Videojuego</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Título"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="URL de la Imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Agregar
      </button>
    </form>
  );
};

export default VideojuegoForm;
