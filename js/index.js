// Your code goes here

// Define variables for selected elements
const nav = document.querySelector(".nav");
const bus = document.querySelector(".bus-photo");
const btn = document.querySelector(".btn");
const logo = document.querySelector("h1");
const destination = document.querySelector(".content-destination");
const destinationTypes = document.querySelectorAll(".destination");
const contentSection = document.querySelector(".text-content");
const destinationSection = document.querySelector(".content-pick");

// Add mouseover event listener
nav.addEventListener("mouseover", function (event) {
    event.target.style.color = "#fad6a5";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
}, false);

// Add mouseleave event listener
nav.addEventListener("mouseenter", function() {
    nav.style.border = "1px solid #fad6a5";
    setTimeout(function() {
        nav.style.border = "";
      }, 500);
});

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

// Add keydown event listener that emphasizes destinations
window.addEventListener("keydown", () => {
    destinationTypes.forEach( (div) => {
        div.style.backgroundColor = "aquamarine";
    });
});

// Add keyup event listener that de-emphasizes destinations
window.addEventListener("keyup", () => {
    destinationTypes.forEach( (div) => {
        div.style.backgroundColor = "";
    });
});

// Add select event listener that logs copied text
contentSection.addEventListener("copy", function (event) {
    const copiedText = document.getSelection();
    event.clipboardData.setData("text/plain", copiedText.toString().toLowerCase());
    event.preventDefault();
    console.log(`The user copied '${copiedText}' to their clipboard`);
});

// Add page load event listener
window.addEventListener("load", (event) => {
    console.log("The fun bus is ready for passengers");
  });

// Nesting two similar events somewhere in the site and preventing the event propagation properly.
function bubblingListener (event) {
    console.log(`The ${event.target.nodeName} was clicked and now it's passing through ${event.currentTarget.nodeName || "Window"}`);
}

btn.addEventListener("click", bubblingListener);
destinationSection.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
});
destinationSection.addEventListener("click", bubblingListener);
