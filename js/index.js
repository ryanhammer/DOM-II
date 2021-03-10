// Your code goes here

// Define variables for selected elements
const nav = document.querySelector(".nav");
const bus = document.querySelector(".intro, img");
const btn = document.querySelector(".btn");

// Add mouseover event listener
nav.addEventListener("mouseover", function (event) {
    event.target.style.color = "#fad6a5";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
}, false);



