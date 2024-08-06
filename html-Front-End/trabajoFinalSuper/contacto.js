
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let mail = document.getElementById("mail");
let description = document.getElementById("description");

let informacion =[];

let btnEnviar = document.getElementById("enviar")

btnEnviar.addEventListener("click", (e) => {
 // Evita la navegación a la URL
    e.preventDefault();

        informacion[0] = nombre.value

        informacion[1] = "\n" + apellido.value

        informacion[2]=  "\n" + parseInt(telefono.value)

        informacion[3] = "\n" +mail.value

        informacion[4] = "\n" +description.value


        console.log(informacion)

   

        console.log(nombre.value)

    

if (nombre.value == '' || apellido.value == '' || telefono.value == '' || mail.value == '' || description.value == '' ) {
   alert('Por favor, ingrese todos los datos.');
  
}

   else {

       let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});

       saveAs(blob, "contact.txt");

       console.log(blob);

       alert("Enviado con exito");

    }
    });
    
    function limpiarLabels() {
      const labels = document.querySelectorAll('.formulario label');
      for (let i = 0; i < labels.length; i++) {
          labels[i].innerHTML = '';
      }
  }
