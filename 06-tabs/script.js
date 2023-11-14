const navElement = document.querySelector('nav');
const navbarLinks = navElement.querySelectorAll('a');
const sectionElements = document.querySelectorAll('section');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveLinks();
        hideSections();
        link.parentElement.classList.add('active');
        const sectionElement = document.querySelector(link.hash);
        sectionElement.classList.remove('hidden');
    });
});

const removeActiveLinks = () => {
    navbarLinks.forEach(link => link.parentElement.classList.remove('active'));
};
const hideSections = () => {
    sectionElements.forEach(section => section.classList.add('hidden'));
};