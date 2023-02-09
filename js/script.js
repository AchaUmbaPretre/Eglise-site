let nav = document.querySelector('nav');
let body = document.querySelector('.swiper');
let faq = document.querySelector('.faq-question');
let faqReponse = document.querySelector('.faq-reponse-quiz');

window.addEventListener('scroll', () => {
    nav.classList.toggle('navscroll', window.scrollY > 0);
})

let bars = document.querySelector('#bars');
let navCenter = document.querySelector('.navCenter');

faq.onclick = () =>{
    faqReponse.classList.toggle('faqQuestion')
}

bars.onclick = function(){
    navCenter.classList.toggle('navToggle')}

body.onclick = () =>{
    navCenter.classList.remove('navToggle')
}

let times = document.querySelector('.times-icon');
let bienvenu = document.querySelector('.bienvenu');
let header = document.querySelector('header');

times.onclick = function(){

    bienvenu.style.display =  "none";
}

//scrollreveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.apropos-img`, {origin:'left'})
sr.reveal(`.apropos-row-text`, {origin:'right'})
sr.reveal(`.lesContenus`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.programme-container`)
sr.reveal(`.programme-culte`)
sr.reveal(`.faq-image`, {origin:'left'})
sr.reveal(`.faq-row-quiz`, {origin:'right'})

//Swiper
