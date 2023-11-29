let navToggle  = document.querySelector('.hamburger  i');
let offCanvas = document.querySelector('.nav-links');


navToggle.addEventListener('click' , () => {
    offCanvas.classList.toggle('active');
    if(navToggle.clicked) {
    navToggle.classList.replace('fa-bars' , 'fa-times');
    } else {
    navToggle.classList.replace('fa-times' , 'fa-bars' );

    }
});


// NAVBAR SCROLL ANIMATION 
let navbar = document.querySelector('nav');
window.addEventListener('scroll' , () =>   (window.scrollY > 200) ? navbar.classList.add('active') : navbar.classList.remove('active'));


// SCROLL BUTTON ANIMATION
let scrollBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll' , () => (window.scrollY > 200) ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active'));