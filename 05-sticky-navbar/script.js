const navElement = document.querySelector('nav');
const navPosition = navElement.getBoundingClientRect().top;
const navbarLinks = navElement.querySelectorAll('a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    navElement.style.top = scrollPos + 'px';

    navbarLinks.forEach(link => {
        const offset = 10;
        const sectionElement = document.querySelector(link.hash);
        if (scrollPos + offset > sectionElement.offsetTop && scrollPos + offset < sectionElement.offsetTop + sectionElement.offsetHeight) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
