// Toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


// Scroll Section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    // Sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link 

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// Scroll reveal 

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// Typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Mern stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})

// Cv download

document.getElementById('download-cv').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = 'resume/Rafi-resume.pdf';
    link.download = 'file.pdf';
    link.click();
});

// Get all the navigation links
var links = document.querySelectorAll('nav a');

// Attach an event listener to each link
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        var target = document.querySelector(link.getAttribute('href')); // Get the target section

        // Scroll to the target section with smooth behavior
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

