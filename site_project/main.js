const toggleBtn = document.querySelector('.navbar__toogleBtn'); // 수정: toggleBtn -> toogleBtn
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});