'use strict';

/*--- Make navbar transparent when it is on the top ---*/
// get navbar with query selector
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

/*--- Scroll by click ---*/
// get navbar menu elements with query selector
const navbarMenu = document.querySelector('.navbar__menu');
// register event for the navbar menu: run defined function by click
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    home.classList.remove('open');
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

/*--- Navbar toggle button ---*/
const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

/*--- Scroll to contact section when clicking on the contact-me button ---*/
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({behavior: "smooth"});
});

/*--- Make home slowly fade to transparent as the window scrolls down ---*/
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1-window.scrollY / homeHeight;
});

/*--- Show arrow up button when scrolling down ---*/
const arrowUp = document.querySelector('.arrow-up-btn');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

/*--- Scroll to home when arrow up button is clicked ---*/
arrowUp.addEventListener('click', () => {
    const homeSection = document.querySelector('#home');
    homeSection.scrollIntoView({behavior: "smooth"});
});

if(document.querySelector('#projects') != null) {
    /*--- Make projects filtered by categories ---*/
    const projectCategories = document.querySelector('.projects__categories');
    const projectItems = document.querySelector('.projects__item');
    const projects = document.querySelectorAll('.project');
    projectCategories.addEventListener('click', (event) => {
        const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
        if(filter==null) {
            return;
        }
    /* make the clicked project active */
        const active = document.querySelector('.category__btn.active');
        active.classList.remove('active');
        const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
        target.classList.add('active');
        /* animation */
        projectItems.classList.add('animation');
        setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectItems.classList.remove('animation');
        }, 300);
    });
};
