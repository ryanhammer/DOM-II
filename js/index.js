// Your code goes here

// Define variables for selected elements
const nav = document.querySelector(".nav");
const bus = document.querySelector(".bus-photo");
const btn = document.querySelector(".btn");
const logo = document.querySelector("h1");
const destination = document.querySelector(".content-destination");

// Add mouseover event listener
nav.addEventListener("mouseover", function (event) {
    event.target.style.color = "#fad6a5";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
}, false);

// Add wheel event listener
let scale = 1;
function wheelZoom (event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    bus.style.transform = `scale(${scale})`;
}
bus.addEventListener("wheel", wheelZoom);

// Add resize event listener that changes background color if window is resized
window.addEventListener("resize", function () {
    document.body.style.backgroundColor = "yellow";
});

// Add dblclick event listener that changes the logo color
logo.addEventListener("dblclick", function (event) {
    event.target.classList.toggle("logo-toggle");
});

// Add scroll event listener that toggles the content font
window.addEventListener("scroll", function () {
    destination.style.fontWeight = "bold";
    setTimeout(function() {
        destination.style.fontWeight = "";
      }, 500);
});

