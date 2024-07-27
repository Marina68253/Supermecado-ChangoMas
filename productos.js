const contenedorLista = document.getElementById("listaContent"); /* me traigo el  elemento id  padre contenedor html */
const verCarrito = document.getElementById("ver-carrito");
const modalContent = document.getElementById("modal-content");


const producto = [
    {
        id: 1,
        nombre: "Arbejas Inca 340gr",
        precios: 600,
        stock: "producto en stock 50",
        image: "./imagenes/arbejas.jpeg",
    },
    {
        id: 2,
        nombre: "Arroz Largo Fino Check 1kg",
        precios: 1689,
        stock: "producto en stock 50",
        image: "./imagenes/arrozCheck.jpeg",
    },
    {
        id: 3,
        nombre: "Fideo Matarazzo 500gr",
        precios: 999,
        stock: "producto en stock 50",
        image: "./imagenes/fideo.jpeg",
    },
    {
        id: 4,
        nombre: "Galletias Oreo",
        precios: 1400,
        stock: "producto en stock 50",
        image: "./imagenes/galletitasOreo.jpg",
    },
    {
        id: 5,
        nombre: "Jugo Bc",
        precios: 290,
        stock: "producto en stock 50",
        image: "./imagenes/jugoBc.jpeg",
    },
    {
        id: 6,
        nombre: "Gelatina Royal 125gr",
        precios: 890,
        stock: "producto en stock 100",
        image: "./imagenes/gelatina.jpeg",
    },
    {
        id: 7,
        nombre: "Sopa de Zapallo 63gr",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/sopaZapallo.jpeg",
    },
    {
        id: 8,
        nombre: "Promo de Shampoo Acondicinador",
        precios: 4500,
        stock: "producto en stock 50",
        image: "./imagenes/ShampooAcondicinador.jpeg",
    },
    {
        id: 9,
        nombre: "Suprema de Pollo x kg",
        precios: 4899,
        stock: "producto en stock 50",
        image: "./imagenes/supremaDePollo.jpeg",
    },
    {
        id: 10,
        nombre: "Tallarines Matarazzo 500gr",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/tallarines.jpeg",
    },
    {
        id: 11,
        nombre: "Tapa de Empanda La Salteña 12 Uds",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/tapaEmpanada.jpeg",
    },
    {
        id: 12,
        nombre: "Vino Toro 1 ltrs",
        precios: 999,
        stock: "producto en stock 100",
        image: "./imagenes/vinoToro.jpg",
    },
    {
        id: 13,
        nombre: "Yerba Playadito 1Kg",
        precios: 999,
        stock: "producto en stock 50",
        image: "./imagenes/yerbaPlayadito.jpeg",
    },
    {
        id: 14,
        nombre: "Yogur Serenisima 1Ltrs",
        precios: 999,
        stock: "producto en stock 50",
        image: "./imagenes/yogur.jpeg",
    },
    {
        id: 15,
        nombre: "Jabon Dove ",
        precios: 1200,
        stock: "producto en stock 50",
        image: "./imagenes/jabonDove.jpeg",
    },
    {
        id: 16,
        nombre: "Leche Ilolay 1Ltrs ",
        precios: 1200,
        stock: "producto en stock 50",
        image: "./imagenes/lecheIlolay.webp",
    },
    
];



let carrito = [];

       function listaProducto() {

       producto.forEach((product) => {

        let content = document.createElement("div");/* se crea el elemento div que se lo asigna al content */
        
        content.className = "car";/* se crea class car que me sirbe para darle estilo */
        /* se lo agrega al div lista-contenedor */
        content.innerHTML = `     
            <img src="${product.image}" alt="${product.nombre}">
            <h2>${product.nombre}</h2>
            <h3>${product.stock}</h3>
            
            <p class="precioProduc">${product.precios}$</p> 
        `;/* se crea la class compra */

        // Crea el btn comprar
        let comprar = document.createElement("button"); /* se cre el elemento btn */
        comprar.innerText = "Comprar";
        comprar.className = "comprar";
    content.appendChild(comprar); /*agrega boton cada producto*/
    

        
        contenedorLista.appendChild(content);//agrega al contendor lista 

        
             comprar.addEventListener("click", () => {//le paso a btn comprar el escuchador de evento click
                carrito.push({  // con el metodo push le pasamos todo lo queremos ver en el carrito
                id: product.id,
                image: product.image,
                nombre: product.nombre,
                precios: product.precios,
                stock: product.stock
            });
            console.log(carrito);
        });
    });
}

listaProducto();


   function mostrarCarrito() {
    verCarrito.addEventListener("click", () => { //le paso a btn comprar el escuchador de evento click
        modalContent.innerHTML = "";
        modalContent.style.display = "flex";

        // se crea style se modal header
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";//creo una classe modal header para darle estilo
        modalHeader.innerHTML = `<h1 class="modal-header-title">Carrito</h1>`;

        modalContent.appendChild(modalHeader);//agrega al content modal 

        // Crea btn para cerra el carrito 
        const modalBtn = document.createElement("h1");
        modalBtn.innerText = "X";
        modalBtn.className = "modal-header-btn";
        modalBtn.addEventListener("click", () => {
            modalContent.style.display = "none";
        });
        modalHeader.appendChild(modalBtn);


        carrito.forEach((product) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML = `
                <img src="${product.image}" alt="${product.nombre}">
                <h2>${product.nombre}</h2>
                <h3>${product.stock}</h3>
                <p>${product.precios}$</p>
            `;
            modalContent.appendChild(carritoContent);
        });

        // llamo a mi funcion carrito
        precioTotal();
    });
}

mostrarCarrito();


function precioTotal() {
    const total = carrito.reduce((acc, el) => acc + el.precios, 0);//recorro  producto usado el metodo reduce a lo cual acc es el acumulador y el producto   
    const totalFinal = document.createElement("div");
    totalFinal.className = "total-content";
    totalFinal.innerHTML = `Total a pagar: ${total}$`;
    modalContent.appendChild(totalFinal);
}