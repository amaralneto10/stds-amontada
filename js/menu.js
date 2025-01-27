let burguerMenu = document.getElementById('burguer')
let menu = document.getElementById('menu')
let overlay = document.getElementById('overlay-menu')

burguerMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})