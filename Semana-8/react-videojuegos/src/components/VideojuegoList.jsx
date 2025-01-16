import React from 'react';

const VideojuegoList = ({ videojuegos, onRemove }) => {
  // Función para manejar el error en imágenes
  const handleImageError = (e) => {
    e.target.onerror = null; // Evita el bucle infinito si la imagen por defecto también falla
    e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+No+Disponible';
  };

  return (
    <div className="container-fluid px-5">
      <h2 className="my-4 text-center">Listado de Videojuegos</h2>
      {videojuegos.length === 0 ? (
        <p className="text-center">No hay videojuegos disponibles.</p>
      ) : (
        <div className="row">
          {videojuegos.map((game) => (
            <div key={game.id} className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                  onError={handleImageError} // Manejo de error con función separada
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{game.name}</h5>
                  <p className="card-text">
                    Género: {game.genres?.[0]?.name || 'No disponible'}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => onRemove(game.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideojuegoList;

