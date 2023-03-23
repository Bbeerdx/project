Let menuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('ative');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        left offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
          navLinks.forEach(link => {
            navLinks.classList.remove('active');
            document.querySelector('header nava[href*=' + id + ']').classList.add('active');
          });
        };
    });
  Let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);
  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({reset: true
  reset: true,
  distance: '80px',
  duration:2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Youtuber'],
    typeSpeed: 100;
    backSpeed: 100,
    backdDelay: 1000,
    loop: true,
});