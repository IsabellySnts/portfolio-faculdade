const navMenu = document.getElementById('nav-menu'),
    toggleMenu=document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/* Abrir menu */
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/* Fechar menu */
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/* Remover o menu após clicar no link */
const navLink = document.querySelectorAll('.link')
function linkAction(){
    navMenu.classList.remove('show')
    console.log('clicou')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop +sectionHeight) {
            document.querySelector('.nav-menu a[href*=' +sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav-menu a[href*=' +sectionId +']').classList.remove('active')
        }
    })
}