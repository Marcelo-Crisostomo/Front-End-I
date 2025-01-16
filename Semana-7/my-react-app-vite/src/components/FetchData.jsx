import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json.slice(0, 5)); // Solo tomamos los primeros 5 elementos.
        setLoading(false);
      });
  }, []); // [] asegura que solo se ejecute una vez al montar el componente.

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <h2>Datos obtenidos:</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
