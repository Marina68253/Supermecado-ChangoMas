const contenedorLista = document.getElementById("listaContent");
const verCarrito = document.getElementById("ver-carrito");
const modalContent = document.getElementById("modal-content");

const producto = [
    {
        id: 1,
        nombre: "Arbejas Inca 340gr",
        precios: 600,
        stock: 50,
        image: "./imagenes/arbejas.jpeg"
    },
    {
        id: 2,
        nombre: "Arroz Largo Fino Check 1kg",
        precios: 1689,
        stock: 50,
        image: "./imagenes/arrozCheck.jpeg"
    },
    {
        id: 3,
        nombre: "Fideo Matarazzo 500gr",
        precios: 999, stock: 50,
        image: "./imagenes/fideo.jpeg"
    },
    {
        id: 4,
        nombre: "Galletias Oreo",
        precios: 1400,
        stock: 50,
        image: "./imagenes/galletitasOreo.jpg"
    },
    {
        id: 5,
        nombre: "Jugo Bc",
        precios: 290,
        stock: 50,
        image: "./imagenes/jugoBc.jpeg"
    },
    {
        id: 6,
        nombre: "Gelatina Royal 125gr",
        precios: 890,
        stock: 100,
        image: "./imagenes/gelatina.jpeg"
    },
    {
        id: 7,
        nombre: "Sopa de Zapallo 63gr",
        precios: 999,
        stock: 100,
        image: "./imagenes/sopaZapallo.jpeg"
    },
    {
        id: 8,
        nombre: "Promo de Shampoo Acondicinador",
        precios: 4500,
        stock: 50,
        image: "./imagenes/ShampooAcondicinador.jpeg"
    },
    {
        id: 9,
        nombre: "Suprema de Pollo x kg",
        precios: 4899,
        stock: 50,
        image: "./imagenes/supremaDePollo.jpeg"
    },
    {
        id: 10,
        nombre: "Tallarines Matarazzo 500gr",
        precios: 999,
        stock: 100,
        image: "./imagenes/tallarines.jpeg"
    },
    {
        id: 11,
        nombre: "Tapa de Empanda La Salteña 12 Uds",
        precios: 999,
        stock: 100,
        image: "./imagenes/tapaEmpanada.jpeg"
    },
    {
        id: 12,
        nombre: "Vino Toro 1 ltrs",
        precios: 999,
        stock: 100,
        image: "./imagenes/vinoToro.jpg"
    },
    {
        id: 13,
        nombre: "Yerba Playadito 1Kg",
        precios: 999,
        stock: 50,
        image: "./imagenes/yerbaPlayadito.jpeg"
    },
    {
        id: 14,
        nombre: "Yogur Serenisima 1Ltrs",
        precios: 999,
        stock: 50,
        image: "./imagenes/yogur.jpeg"
    },
    {
        id: 15,
        nombre: "Jabon Dove",
        precios: 1200,
        stock: 50,
        image: "./imagenes/jabonDove.jpeg"
    },
    {
        id: 16,
        nombre: "Leche Ilolay 1Ltrs",
        precios: 1200,
        stock: 50,
        image: "./imagenes/lecheIlolay.webp"
    }
];

let carrito = [];

function listaProducto() {
    producto.forEach((product) => {
        let content = document.createElement("div");
        content.className = "car";
        content.innerHTML = `     
            <img src="${product.image}" alt="${product.nombre}">
            <h2>${product.nombre}</h2>
            <h3>producto en stock: ${product.stock}</h3>
            <p class="precioProduc">${product.precios}$</p> 
        `;

        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "comprar";
        content.appendChild(comprar);

        contenedorLista.appendChild(content);

        comprar.addEventListener("click", () => {

            // Verifica si el producto ya está en el carrito
            const productInCart = carrito.find((item) => item.id === product.id);//recorre el array y devuelve el primer objeto que cumple con esta condición.

            // Si el producto ya está en el carrito y la cantidad es menor que el stock, aumenta la cantidad
            if (productInCart) {
                if (productInCart.cantidad < product.stock) {
                    productInCart.cantidad += 1;
                }
            }
            // Si el producto no está en el carrito, lo agrégacon cantidad 1
            else {
                carrito.push({
                    id: product.id,
                    image: product.image,
                    nombre: product.nombre,
                    precios: product.precios,
                    stock: product.stock,
                    cantidad: 1
                });
            }
        });
    });
}

listaProducto();

function mostrarCarrito() {

    verCarrito.addEventListener("click", () => {
        modalContent.innerHTML = "";
        modalContent.style.display = "flex";

        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML = `<h1 class="modal-header-title">Carrito</h1>`;
        modalContent.appendChild(modalHeader);

        const modalBtn = document.createElement("h1");
        modalBtn.innerText = "X";
        modalBtn.className = "modal-header-btn";
        modalBtn.addEventListener("click", () => {
            modalContent.style.display = "none";
        });
        modalHeader.appendChild(modalBtn);


        carrito.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-product";
            carritoContent.innerHTML = `
                <img src="${product.image}" alt="${product.nombre}">
                <h2>${product.nombre}</h2>
                <h3>producto en stock: ${product.stock}</h3>
                <p>${product.precios}$</p>
            `;
            // se crea impu typo number con un valor min 1 y max depediendo el stock product 
            let cantInput = document.createElement("input");
            cantInput.type = "number";
            cantInput.value = product.cantidad;
            cantInput.min = 1;
            cantInput.max = product.stock;


            let btnMas = document.createElement("button");
            btnMas.innerText = "+";
            btnMas.addEventListener("click", () => {
                if (parseInt(cantInput.value) < product.stock) {
                    cantInput.value = parseInt(cantInput.value) + 1;
                    product.cantidad = parseInt(cantInput.value);
                    precioTotal();

                }
            });
            //creo el boton -
            let btnMenos = document.createElement("button");
            btnMenos.innerText = "-";
            btnMenos.addEventListener("click", () => {
                if (parseInt(cantInput.value) > 1) {
                    cantInput.value = parseInt(cantInput.value) - 1;
                    product.cantidad = parseInt(cantInput.value);
                    precioTotal();

                }
            });

            carritoContent.appendChild(btnMenos);
            carritoContent.appendChild(cantInput);
            carritoContent.appendChild(btnMas);

            modalContent.appendChild(carritoContent);
        });

        const confirmarCompraBtn = document.createElement("button");
        confirmarCompraBtn.className = "confirmar-compra";
        confirmarCompraBtn.innerText = "Confirmar compra";


        confirmarCompraBtn.addEventListener("click", () => {//recorro  producto usado el metodo reduce a lo cual acc es el acumulador y el producto   
            const totalFinal = document.createElement("div");
            if (carrito.length === 0 || carrito.reduce((acc, el) => acc + el.precios * el.cantidad, 0) === 0) {

                alert("El carrito esta vacio debe realizar una compra.");
            } else {
                confirmarCompra();
            }
        });
        modalContent.appendChild(confirmarCompraBtn);

        precioTotal();
    });
}

function precioTotal() {
    const total = carrito.reduce((acc, el) => acc + el.precios * el.cantidad, 0);

    // Elimina el exiteTotal 
    const primerTotal = modalContent.querySelector(".total-content");
    if (primerTotal) {
        primerTotal.remove();
    }

    // me lo agrega el nuevo elemento div con el totalFinal
    const totalFinal = document.createElement("div");
    totalFinal.className = "total-content";
    totalFinal.innerHTML = `Total a pagar: ${total}$`;
    modalContent.appendChild(totalFinal);
}
mostrarCarrito();

function confirmarCompra() {
    carrito = [];
    alert("Compra confirmada. ¡Gracias por tu compra!");
    modalContent.style.display = "none";
    contenedorLista.innerHTML = "";
    listaProducto(); //me vuelve a mostrar la lista de producto
}

