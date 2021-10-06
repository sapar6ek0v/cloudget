const button = document.getElementById('menu-burger')
const menu = document.getElementById('ul-header-menu')

button.addEventListener('click', () =>{
    menu.classList.toggle('header-menu-ul')
})