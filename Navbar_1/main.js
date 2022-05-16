const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}));