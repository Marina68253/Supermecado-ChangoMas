// let arr=[0,1,2,3];

// arr.forEach(function(params) {
//     console.log(params);
// })
/*
const persona={
    "nombre":"jose",
    "edad":35,
    "dni":40000000
}
console.log(persona.dni)
let prod=["arroz", "papa"];
let stock=[8,20];
let precio=[1500,4000];
for (let i = 0; i < prod.length; i++) {
   console.log("Del producto "+ prod[i]+ " tengo "
    + stock[i]+ " unidades que valen c/u $"+ precio[i]);
}
*/
const producto={
    "nombre":"arroz",
    "cantidad":35,
    "precio":1500,
    "id2":"papa",
    "id":20,
    "idPre":1300
}

console.log("Del producto "+ producto.nombre + " tengo "
    + producto.cantidad + " unidades que valen c/u $"+ producto.precio);
    console.log("Del producto "+ producto.id2 + " tengo "
        + producto.id+ " unidades que valen c/u $"+ producto.idPre);document.querySelector("ul li").innerHTML=`El producto ${producto[0].nombre} tiene un stock de ${producto[0].cantidad}`