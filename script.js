let hamburger = document.querySelector('.menu-btn');
let mobMenu = document.querySelector('.menu-nav');
hamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    hamburger.classList.toggle('menu-btn_active');
    mobMenu.classList.toggle('menu-nav_active')
})
