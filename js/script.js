const scroll = new SmoothScroll('.navlinks a[href*="#"]', {
speed: 1000
}  );

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.navlinker')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})