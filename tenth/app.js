 // set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) { 
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }

})
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {

// fixed navbar
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');

    }
    else {
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500 ){
        toplink.classList.add('show-link');
    }
    else{
        toplink.classList.remove('show-link');
    }
})

// smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        //prevent default
        e.preventDefault();
        // nav to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position  = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left : 0,
            top : position,
        })
        //close links
        linksContainer.style.height = 0
    })
})