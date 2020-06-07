let menuButton = document.querySelector(".nav-btn");
let menu = document.querySelector(".nav-links");
let logo = document.querySelector(".nav-logo");
let nav = document.querySelector("nav")

menuButton.addEventListener("click",function(){
    menuButton.textContent = 'o'
    menu.style.display = 'block'
    menu.style.float = 'none'
    menu.style.position = 'absolute'
    menu.style.textAlign = 'left'
    nav.style.flexDirection = 'row-reverse'
})