let div = document.querySelector("div");

// div.textContent = "<h1>Holis</h1>"; //Esto añade los textos tal cual son, sin tener en cuenta el codigo html
// div.innerHTML = "<h2>Como estas</h2>";  //en cambio esto añade el texto que puede interpretar html
//console.log(div.textContent);  //No muestra codigo html (por ej: <h1>Hola</h1>). solo el texto que estas tienen
// console.log(div.innerHTML);    //innerHTML si muestra todo a la literal


// console.log(div.getAttribute("id")) //como un get de toda la vida: devuelve el dato que solicitamos, en este caso un atributo que pasamos por parametros
// div.setAttribute("id", "divPrimero")  //al igual que un set ... setea el atributo pasado como primer parametro al valor pasado como 2do parametro
// console.log(div.getAttribute("id"))
//+++++++++otro ejemplo interesante para usar en un futuro
// var img=document.querySelector("img")
// img.getAttribute("src") // "logo.png"
// img.setAttribute("src", "http://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg");


// parrafos = document.querySelectorAll("p");
// console.log(parrafos);
// parrafosNormal = Array.from(parrafos)          //Array.from( unArrayHTML )  :  esto es un metodo para convertirlo en un arreglo "normal" de js
// parrafosNormal.map((e) => e.textContent = "hola")  //y así podemos iterarlo con un map, foreach, etc


// let x = setInterval(function() {
//     console.log(div.classList);
//     div.classList.toggle("square");
// }, 1000)


// div.style.height = "300px";
// div.style.width = "250px";
// div.style.backgroundColor = "red";
