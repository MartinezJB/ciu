var seEjecutaEnEvento = function () {
    document.querySelector("body").insertAdjacentHTML("beforeend", "<p>BEEP</p>");
    document.querySelector("body").classList.toggle("color");
    document.querySelector("body").classList.toggle("colorLetra");
};

document.querySelector("button").addEventListener("click", seEjecutaEnEvento);