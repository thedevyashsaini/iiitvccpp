let menuBtn = document.querySelector('.cta');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close');
menuBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
});  
closeBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
});