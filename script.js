var box = document.querySelector(".box");
console.log(box);

function defaultColor() {
    square.style.backgroundColor = originialColor;
}

function hoverColor(color) {
  square.style.backgroundColor = color;
}

function defaultColor() {
  square.style.backgroundColor = originialColor;
}

function upClickColor(color) {
  square.style.backgroundColor = color;
}

function doubleColor(color) {
  square.style.backgroundColor = color;
}

function scrollColor(color) {
  square.style.backgroundColor = color;
}

function leftClickColor(color) {
    square.style.backgroundColor = color;
}

box.addEventListener("mouseover", (e => e.target.style.backgroundColor = "blue"))

box.addEventListener("mouseout", (e => e.target.style.backgroundColor = "white"))

box.addEventListener("mousedown", (e => e.target.style.backgroundColor = "red"))

box.addEventListener("mouseup", (e => e.target.style.backgroundColor = "yellow"))

box.addEventListener("dblclick", (e => e.target.style.backgroundColor = "green"))

box.addEventListener("wheel", (e => e.target.style.backgroundColor = "orange"))

document.addEventListener("keydown", (e => {

    if (e.keyCode == 82){
        box.style.backgroundColor = "red"
    }
    if (e.keyCode == 71){
        box.style.backgroundColor = "green"
    }
    if (e.keyCode == 66){
        box.style.backgroundColor = "blue"
    }

}))
