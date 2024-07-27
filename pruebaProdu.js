const contenedorLista = document.getElementById("listaContent"); /* me traigo el  elemento id  padre contenedor html */
const verCarrito = document.getElementById("ver-carrito");
const modalContent = document.getElementById("modal-content");


const producto = [
    {
        id: 1,
        nombre: "arbejas inca 340gr",
        precios: 600,
        stock: "producto en stock 50",
        image: "./imagenes/arbejas.jpeg",
    },
    {
        id: 2,
        nombre: "arroz largo fino check 1kg",
        precios: 1689,
        stock: "producto en stock 50",
        image: "./imagenes/arrozCheck.jpeg",
    },
    {
        id: 3,
        nombre: "fideo matarazzo 500gr",
        precios: 999,
        stock: "producto en stock 50",
        image: "./imagenes/fideo.jpeg",
    },
    {
        id: 4,
        nombre: "galletias oreo",
        precios: 1400,
        stock: "producto en stock 50",
        image: "./imagenes/galletitasOreo.jpg",
    },
    {
        id: 5,
        nombre: "jugo Bc",
        precios: 290,
        stock: "producto en stock 50",
        image: "./imagenes/jugoBc.jpeg",
    },
    {
        id: 6,
        nombre: "gelatina royal 125gr",
        precios: 890,
        stock: "producto en stock 100",
        image: "./imagenes/gelatina.jpeg",
    },
    {
        id: 7,
        nombre: "sopa de zapallo 63gr",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/sopaZapallo.jpeg",
    },
    {
        id: 8,
        nombre: "promo shampoo Acondicinador",
        precios: 4500,
        stock: "producto en stock 50",
        image: "./imagenes/ShampooAcondicinador.jpeg",
    },
    {
        id: 9,
        nombre: "suprema de pollo x kg",
        precios: 4899,
        stock: "producto en stock 50",
        image: "./imagenes/supremaDePollo.jpeg",
    },
    {
        id: 10,
        nombre: "tallarines matarazzo 500gr",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/tallarines.jpeg",
    },
    {
        id: 11,
        nombre: "tapa de empanda la salteña 12 unidades",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/tapaEmpanada.jpeg",
    },
    {
        id: 12,
        nombre: "vino toro 1 ltrs",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/vinoToro.jpg",
    },
    {
        id: 13,
        nombre: "yerba playadito 1kg",
        precios: 999,
        stock: "producto en stock 50",
        image: "./imagenes/yerbaPlayadito.jpeg",
    },
    {
        id: 14,
        nombre: "yogur serenisima 1ltrs",
        precios: 999,
        stock: "producto en stock 50",
        image: "./imagenes/yogur.jpeg",
    },
];

let carrito = [];

producto.forEach((product) => {
    let content = document.createElement("div"); /* se crea el elemento div que se lo asigna al content */
    content.className = "car"; /* se crea class car que me sirbe para darle estilo */
    content.innerHTML = // se lo agrega al div
    `<img src="${product.image}"> 
    <h2>${product.nombre}</h2>
    <h3>${product.stock}</h3>
    <p class="precioProduc">${product.precios}$</p>`; /* se crea la class compra */

    contenedorLista.appendChild(content);//agrega al contendr lista 

    let comprar = document.createElement("button"); /* se cre el elemento btn */
    comprar.innerText = "comprar"; /* agrega txto btn */
    comprar.className = "comprar";

    content.appendChild(comprar); /*agrega boton cada producto*/

    comprar.addEventListener("click", () => { //le paso a btn comprar el escuchador de evento click
        carrito.push({ // con el metodo push le pasamos todo lo queremos ver en el carrito
            id: product.id,
            image: product.image,
            nombre: product.nombre,
            precios: product.precios,
            stock: product.stock
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => { //le paso a btn comprar el escuchador de evento click
    modalContent.innerHTML = "";
    modalContent.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"; //creo una classe modal header para darle estilo
    modalHeader.innerHTML =
        `<h1 class="modal-header-title">Carrito</h1> 
    `;
    modalContent.appendChild(modalHeader); //agrega al content modal 

    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "X";
    modalBtn.className = "modal-header-btn";

    //para que se cierre el carrito
    modalBtn.addEventListener("click", () => {
        modalContent.style.display = "none";
    });

    modalHeader.appendChild(modalBtn);

    carrito.forEach((product) => { //recorro el carrito
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.image}">
        <h2>${product.nombre}</h2>
        <h3>${product.stock}</h3>
        <p>${product.precios}$</p>
        `;
        modalContent.appendChild(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precios, 0);

    const totalFinal = document.createElement("div");
    totalFinal.className = "total-content";
    totalFinal.innerHTML = `Total a pagar: ${total}$`;
    
    modalContent.appendChild(totalFinal);
});

