const contenedorLista=document.getElementById("contenedor");/* me traigo el  elemento id  padre contenedor html */

const productos = [
    {
        nombre: "Coca cola",
        stock: 10,
        precio: 1500,
        image: "coca-cola.jpg"
    }
]

productos.forEach(item => {
    // Crea un contenedor para cada tarjeta de producto
    const contenedorCard = document.createElement("div");
    contenedorCard.classList.add("card"); // Añade una clase para estilizar la tarjeta si es necesario

    // Crea y agrega una etiqueta para el nombre del producto
    const nombreProducto = document.createElement("h2");
    nombreProducto.textContent = item.nombre;
    contenedorCard.appendChild(nombreProducto);

    // Crea y agrega una etiqueta para el stock del producto
    const stockProducto = document.createElement("label");
    stockProducto.textContent = `Stock: ${item.stock}`;
    contenedorCard.appendChild(stockProducto);

    // Crea y agrega una etiqueta para el precio del producto
    const precioProducto = document.createElement("label");
    precioProducto.textContent = `Precio: $${item.precio}`;
    contenedorCard.appendChild(precioProducto);

    // Crea y agrega una imagen para el producto
    const imageProducto = document.createElement("img");
    imageProducto.src = item.image;
    imageProducto.alt = item.nombre; // Alternativa de texto para la imagen
    contenedorCard.appendChild(imageProducto);

    // Agrega la tarjeta de producto al contenedor principal
    contenedorLista.appendChild(contenedorCard);
});