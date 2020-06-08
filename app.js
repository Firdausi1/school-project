const navSlide = () => {
    const burger = document.querySelector('.nav-btn')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation= ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle')
    })
    //animate links
   
}

let slideIndex = 0
const slide = () => {
    let i;
    const slides = document.querySelectorAll('.testimonials-text')
    const dots = document.querySelectorAll('.scroll span')
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[1].className.replace(" active", "")
    }
    slideIndex++
    if(slideIndex>slides.length){
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += " active"


    setTimeout(slide, 5000)
}

slide();
navSlide();

// if(slides[i].style.display === 'block'){
//     slides[i].style.display = 'none'
// }
// else{
//     slides[i].style.display = 'block'
// }