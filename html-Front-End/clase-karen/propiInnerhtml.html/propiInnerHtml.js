//let contenedor=document.getElementById("contenedor");// trae el contenido del div
//let parrafo2=document.getElementById("parrafo2");


//contenedor.innerHTML= "<h1> soy elemento que renplaza html </h1>";//nuevo elemeto o texto que se remplaza, cambia o crea desde html 
//parrafo2.innerText="soy un texto que renplaza html";//nos cambia solo el texto pero no la sintasis de html toma de prioridad innerHTML
//contenedor.innerHTML+= "<h2> soy otro elemento agregado </h2>";// si yo le coloco += se le suma  un nuevo  elemento al que tenia

//----------------parte 1----------------------------------------------------------------------//

//let contenedor=document.getElementById("contenedor");// trae el contenido del div
//let elemento=document.createElement("h2");// se crea el elemento
//let texto=document.createTextNode("texto ingresado en el elemento");// creamos el texto que lleva este elemento

//elemento.appendChild(texto);// se le pasa el texto a mi elemento
//contenedor.appendChild(elemento);// se agrega el elemento a mi contenedor
//--------------------------------------------------------------------------//


let lista=document.getElementById("lista");
const productos=["pan","leche","carne"];
const precios=[2000,1500,8000];

function pintarProducto(arrayProductos,arrayPrecios){

 for (let i = 0; i < arrayProductos.length; i++) {// cada ves que itere va crear un elemento li y un texto donde me va a mostrar el array de producto y de precio
    let li=document.createElement("li");
    let texto=document.createTextNode( `nombre: ${arrayProductos[i]}- precio: $${arrayPrecios[i]}`);//itera desde la posicion i porque va a ir cambiando de pociciones
    //li.setAttribute("class", "amarrilla"); si uno le quiere agregar la clase a li
    li.appendChild(texto);//pone los elemento li 
    lista.appendChild(li);//lleva los elemento que se creo 

 }

}
pintarProducto(productos, precios);
  
// otra forma de hacer una lista 
function pintarProducto2(arrayProductos, arrayPrecios){
   for (let i = 0; i < arrayProductos.length; i++) {
      lista.innerHTML+=`<li> producto: ${arrayProductos[i]}- precios: $${arrayPrecios[i]}</li>`
      
   }
}
pintarProducto2(productos,precios);