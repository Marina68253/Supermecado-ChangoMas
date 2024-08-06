const contenedorLista = document.getElementById("listaContent");
const verCarrito = document.getElementById("ver-carrito");
const modalContent = document.getElementById("modal-content");

const productos = [
    {
        id: 0, nombre: "Arbejas check 300gr",
        precio: 600,
        stock: 50,
        image: "./imagenes/arvejasCheck.webp"
    },
    {
        id: 1,
        nombre: "Arroz Largo Fino Check 1kg",
        precio: 1689,
        stock: 50,
        image: "./imagenes/arrozCheck.jpeg"
    },
    {
        id: 2,
        nombre: "Fideo Matarazzo 500gr",
        precio: 999,
        stock: 50,
        image: "./imagenes/fideo.jpeg"
    },
    {
        id: 3,
        nombre: "Galletias Oreo",
        precio: 1400,
        stock: 50,
        image: "./imagenes/galletitasOreo.jpg"
    },
    {
        id: 4,
        nombre: "Jugo Bc",
        precio: 290,
        stock: 50,
        image: "./imagenes/jugoBc.jpeg"
    },
    {
        id: 5,
        nombre: "Banana 1k",
        precio: 1499,
        stock: 50,
        image: "./imagenes/banana.jpeg"
    },
    {
        id: 6,
        nombre: "Masita chocolina 250gr",
        precio: 1299,
        stock: 50,
        image: "./imagenes/chocolina.jpeg"
    },
    {
        id: 7,
        nombre: "Harina pureza  para pizza 1k",
        precio: 1299,
        stock: 50,
        image: "./imagenes/harinaPizza.jpeg"
    },
    {
        id: 8,
        nombre: "Anana Check 560gr ",
        precio: 1799,
        stock: 50,
        image: "./imagenes/anana.jpeg"
    },
    {
        id: 9,
        nombre: "Te Taragui 25 Uni",
        precio: 499,
        stock: 50,
        image: "./imagenes/teTaragui.jpeg"
    },
    {
        id: 10,
        nombre: "Pate De Picadillo Swift 90g",
        precio: 549,
        stock: 50,
        image: "./imagenes/pateDePicadillo.jpeg"
    },
    {
        id: 11,
        nombre: "Pack x 3 Atun Aceite Natural",
        precio: 1499,
        stock: 50,
        image: "./imagenes/atun.check.webp"
    },
    {
        id: 12,
        nombre: "salchicha Paladini x 6",
        precio: 1299,
        stock: 50,
        image: "./imagenes/salchichaPaladini.jpeg"
    
    },
    {
        id: 13,
        nombre: "plato Playo o Ondo Marca Galaxi",
        precio: 1299,
        stock: 50,
        image: "./imagenes/platoPlayoOondoGalaxi.webp"
    
    },
    {
        id: 14,
        nombre: "Gaseosa Cunnigton Suave 2.25Lt",
        precio: 999,
        stock: 50,
        image: "./imagenes/gaseosaCunnigtonSuave.jpeg"
    
    },
    {
        id: 15,
        nombre: "Javon Pastilla Dove",
        precio: 999,
        stock: 50,
        image: "./imagenes/javonPastillaDove.jpeg"
    
    },
    {
        id: 16,
        nombre: "Aceite Girasol Natura.jpeg",
        precio: 1499,
        stock: 50,
        image: "./imagenes/aceiteGirasolNatura.jpeg"
    
    },
    {
        id: 17,
        nombre: "Pan Lactal Check 600gr",
        precio: 1499,
        stock: 50,
        image: "./imagenes/panLactalCheck.jpeg"
    
    },
    {
        id: 18,
        nombre: "Dulse De Leche Clasico Tonadita 400gr",
        precio: 1499,
        stock: 50,
        image: "./imagenes/dulseDeLecheClasicoTonadita.jpeg"
    
    },
    {
        id: 19,
        nombre: "Masita Seca Check x 5",
        precio: 1499,
        stock: 50,
        image: "./imagenes/masitaSecaCheck.jpeg"
    
    },
]; 

let carrito = [];

function listaProducto() {
    productos.forEach((product) => {
        let content = document.createElement("div");
        content.className = "car";
        content.innerHTML = `
            <img src="${product.image}" alt="${product.nombre}">
            <h2>${product.nombre}</h2>
            <h3>producto en stock: ${product.stock}</h3>
            <p class="precioProduc">${product.precio}$</p>
        `;
        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "comprar";
        content.appendChild(comprar);
        contenedorLista.appendChild(content);


        //verifica si esta en el carrito
        comprar.addEventListener("click", () => {
            let productInCart = null;

            carrito.forEach((element) => {
                // Buscar el producto en el carrito
                if (element.id == product.id) {
                    productInCart = element;
                }
            });
 // Si el producto ya está en el carrito
            if (productInCart) {
                // Aumentar la cantidad si no excede el stock
                if (productInCart.cantidad < product.stock) {
                    productInCart.cantidad += 1;
                }
            } else {
                carrito.push({
                    id: product.id,
                    image: product.image,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: 1,
                    stock: product.stock
                });
            }

            alert("Producto agregado al carrito");
        });
    });
}

listaProducto();

function mostrarCarrito() {
    modalContent.innerHTML = "";
    modalContent.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-title">Confimar Carrito</h1>`;
    modalContent.appendChild(modalHeader);

    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "X";
    modalBtn.className = "modal-header-btn";
    modalBtn.addEventListener("click", () => {
    modalContent.style.display = "none";
    });
    modalHeader.appendChild(modalBtn);

    cargarCarrito();

    const confirmarCompraBtn = document.createElement("button");
    confirmarCompraBtn.className = "confirmar-compra";
    confirmarCompraBtn.innerText = "Confirmar compra";
    confirmarCompraBtn.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito está vacío. Debe realizar una compra.");
        } else {
            confirmarCompra();
        }
    });
    modalContent.appendChild(confirmarCompraBtn);

    precioTotal();
}

function cargarCarrito() {
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-product";
        carritoContent.innerHTML = `
            <img src="${product.image}" alt="${product.nombre}">
            <h2>${product.nombre}</h2>
            <h3>producto en stock: <span class="stock">${product.stock}</span></h3>
            <p>${product.precio}$</p>
        `;

        let cantInput = document.createElement("input");
        cantInput.type = "number";
        cantInput.min = 1;
        cantInput.max = product.stock;
        cantInput.value = product.cantidad;

        let btnMas = document.createElement("button");
        btnMas.classList.add("btnMas");
        btnMas.id = product.id;
        btnMas.innerText = "+";

        let btnMenos = document.createElement("button");
        btnMenos.classList.add("btnMenos");
        btnMenos.id = product.id;
        btnMenos.innerText = "-";

        carritoContent.appendChild(btnMenos);
        carritoContent.appendChild(cantInput);
        carritoContent.appendChild(btnMas);
        modalContent.appendChild(carritoContent);
    });

    let btnsMas = document.querySelectorAll(".btnMas");
    btnsMas.forEach(btn => btn.addEventListener("click", (e) => {
// botón que fue clicadopreviousElementSibling selecciona el elemento anterior en el DOM
        let inpCantidad = e.target.previousElementSibling;
        let valorInpCantidad = Number(inpCantidad.value);
        //obtiene el ID del botón click
let idBtn = e.target.id;
        let enc = encontrarProd(idBtn, productos);
        if (valorInpCantidad < enc.stock) {
            inpCantidad.value = valorInpCantidad + 1;
            let prodEnc = encontrarProd(idBtn, carrito);
            prodEnc.cantidad = Number(inpCantidad.value);
        } else {
            inpCantidad.value = enc.stock;
        }
        precioTotal();
    }));

    let btnsMenos = document.querySelectorAll(".btnMenos");
    btnsMenos.forEach(btn => btn.addEventListener("click", (e) => {
        let inpCantidad = e.target.nextElementSibling;
        let valorInpCantidad = Number(inpCantidad.value);
        let idBtn = e.target.id;

        if (valorInpCantidad > 1) {
            inpCantidad.value = valorInpCantidad - 1;
            let prodEnc = encontrarProd(idBtn, carrito);
            //Actualiza la cantidad del producto 
            prodEnc.cantidad = Number(inpCantidad.value);
        } else {
            inpCantidad.value = 1;
        }
        precioTotal();
    }));
}

function encontrarProd(id, arreglo) {
    
    let encontrado;
    arreglo.forEach(p => {
        if (p.id == id)
            encontrado = p;
    });
    return encontrado;
}

let stock = document.getElementsByClassName("stock");
let stockUno = document.getElementsByClassName("stockUno");

function precioTotal() {
    let total = 0;

    carrito.forEach(p => {
        total += p.precio * p.cantidad;
    });

    const primerTotal = modalContent.querySelector(".total-content");
    if (primerTotal) {
        primerTotal.remove();
    }
    const totalFinal = document.createElement("div");
    totalFinal.className = "total-content";
    totalFinal.innerHTML = `Total a pagar: ${total}$`;
    modalContent.appendChild(totalFinal);
}

function confirmarCompra() {

    carrito.forEach(p => {
        // Encontrar el producto
        let prod = encontrarProd(p.id, productos);
        if (prod) {
            prod.stock -= p.cantidad;
        }
    });

    alert("Compra confirmada. ¡Gracias por tu compra!");
    modalContent.style.display = "none";
    contenedorLista.innerHTML = "";

    carrito = [];
    listaProducto();
}

verCarrito.addEventListener("click", mostrarCarrito);
