document.querySelector("img").addEventListener("click", seguir)

function seguir (e) {
    document.querySelector("body").addEventListener("mousemove", mouseTracker);
}

function mouseTracker(e) {
    document.querySelector("img").style.top = e.clientY + "px";
    document.querySelector("img").style.left = e.clientX + "px";
    this.style.cursor = "none";
}