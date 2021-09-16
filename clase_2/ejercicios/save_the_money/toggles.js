var botones = document.querySelectorAll("button");

botones.forEach(boton => boton.addEventListener("click", function(){
    document.querySelector("." + this.id).classList.toggle("oculto");
}));

document.querySelectorAll("img")
.forEach ( img => img.addEventListener("click", function() {
    this.classList.toggle("oculto")
}) );