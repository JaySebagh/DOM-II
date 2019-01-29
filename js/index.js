// Your code goes here

// hover "Fun Bus" = gray background
let name = document.querySelector("h1");
name.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "gray";
});

// click anywhere on body = lightblue background
let bodyclick = document.querySelector("body");
bodyclick.addEventListener("click", e => {
    document.body.style.backgroundColor = "lightblue";
})

// double click bus image = maroon background
let busimg = document.querySelector("img");
busimg.addEventListener("dblclick", e => {
    document.body.style.backgroundColor = "maroon";
})

// click bus img = light green bg
// used stopPropagation so background doesn't become lightblue
busimg.addEventListener("click", e => {
    document.body.style.backgroundColor = "lightgreen";
    e.stopPropagation();
})

// drag bus image = pink bg
busimg.addEventListener("drag", e => {
    document.body.style.backgroundColor = "pink";
})

// bus image loaded = black bg
busimg.addEventListener("load", e => {
    document.body.style.backgroundColor = "black";
})

// paragraph mouse move = green bg
let ptag = document.querySelector("p");
ptag.addEventListener("mousemove", e => {
    document.body.style.backgroundColor = "green";
})

// bus image mouse out = yellow bg
busimg.addEventListener("mouseout", e => {
   document.body.style.backgroundColor = "yellow"
});

// bus image mouse enter = purple bg
busimg.addEventListener("mouseenter", e => {
    document.body.style.backgroundColor = "purple"
});

// nav click down = red bg
let navclick = document.querySelector("nav");
navclick.addEventListener("mousedown", e => {
    document.body.style.backgroundColor = "red"
    e.preventDefault();
});

navclick.addEventListener("mouseup", e => {
    document.body.style.backgroundColor = "orange"
    e.stopPropagation();
})

// prevents Home to go to link
document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault()
});