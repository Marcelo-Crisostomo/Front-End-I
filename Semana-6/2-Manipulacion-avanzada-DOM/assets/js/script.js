// assets/js/script.js
// Array de productos
const productos = [
    {
        nombre: "Producto 1",
        precio: "$20.00",
        imagen: "https://via.placeholder.com/150"
    },
    {
        nombre: "Producto 2",
        precio: "$35.00",
        imagen: "https://via.placeholder.com/150"
    },
    {
        nombre: "Producto 3",
        precio: "$50.00",
        imagen: "https://via.placeholder.com/150"
    }
];

// Seleccionar contenedores
const contenedorProductos = document.getElementById('productos');
const contenedorCarrito = document.getElementById('carrito');

// Renderizar productos dinámicamente
productos.forEach((producto, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
        <div class="card mb-4">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.precio}</p>
                <button class="btn btn-primary" data-index="${index}">Agregar al Carrito</button>
            </div>
        </div>
    `;
    contenedorProductos.appendChild(col);
});

// Evento para agregar al carrito
contenedorProductos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const index = e.target.dataset.index;
        const producto = productos[index];
        const item = document.createElement('li');
        item.className = 'list-group-item';
        item.textContent = `${producto.nombre} - ${producto.precio}`;
        contenedorCarrito.appendChild(item);
    }
});
