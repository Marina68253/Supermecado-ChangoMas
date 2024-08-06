
let btn=document.getElementById("btn"); /* trae el btn de html*/

btn.addEventListener("click",function(e){ /* click es el evento y e es una fuction anonima*/

    let tiempoBomba=5; /* tiempo de bomba*/

    setTimeout(function(){/*recibe como parametro una funcion y el evento de mile segundo */
   cuentaRegresiva(tiempoBomba)


},5000);/* le decimos que se ejecute 5 miliSegundo depues que se ejecute el btn */


});

function cuentaRegresiva(i){/* recibe como parametro i que es el contador por la cantidad de tiempo q le digamos */
   
    let intervalo = setInterval(function() { /*variable intervalo y recibe una una funcion  anonima setIntervalo que se ejecuta cada un miliSegundo */
    
    console.log(i);
    
    if (i === 0) { // si i (tiempo de bomba) es ===  a 0 entoce clearIntervalar lo limpia y si se limpia la bomba explot
    
    clearInterval(intervalo); // donde limpia el intervalo
    alert('BOOOOOM!!');
    }
    else {
    i--;  // Y si no esxplota entoce se va decrementando el tiempo
    }
    }, 1000);
    }

