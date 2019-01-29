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
let imgdblclick = document.querySelector("img");
imgdblclick.addEventListener("dblclick", e => {
    document.body.style.backgroundColor = "maroon";
})