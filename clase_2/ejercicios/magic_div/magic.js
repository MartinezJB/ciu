var toggle = function() {
    document.querySelector("img").classList.toggle("magia")
}

document.querySelector("#magic").addEventListener("mouseover", toggle)

document.querySelector("#magic").addEventListener("mouseout", toggle)