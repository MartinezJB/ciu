var cambioFondo = document.querySelector("#seleccion");

document.querySelector("body").addEventListener("keypress", function(e) {
    if(e.keyCode === 13) 
        document.querySelector("body").style.backgroundColor = cambioFondo.value;
        
    else if(e.keyCode === 127)
        document.querySelector("body").style.backgroundColor = "white";
})