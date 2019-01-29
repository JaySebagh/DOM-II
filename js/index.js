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

// drag bus image = pink bg
busimg.addEventListener("drag", e => {
    document.body.style.backgroundColor = "pink";
})

// bus image loaded = black bg
busimg.addEventListener("load", e => {
    document.body.style.backgroundColor = "black";
})

let ptag = document.querySelector("p");
ptag.addEventListener("mousemove", e => {
    document.body.style.backgroundColor = "green";
})