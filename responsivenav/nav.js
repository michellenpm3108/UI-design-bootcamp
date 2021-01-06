const menuBtn = document.getElementById('menu-btn')
const exitBtn = document.getElementById('exit-btn')
const nav = document.getElementById('nav')

menuBtn.addEventListener('click', function(){
 nav.classList.add('open-nav');
})
exitBtn.addEventListener('click', function(){
    nav.classList.remove('open-nav')
})