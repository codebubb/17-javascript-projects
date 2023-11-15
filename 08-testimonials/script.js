const testimonials = [
    {
        author: {
            name: 'Gabriel Moore',
            image: 'author-01.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '23rd May',
    },
    {
        author: {
            name: 'Billy Bailey',
            image: 'author-02.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '25th May',
    },
    {
        author: {
            name: 'Jackie Oliver',
            image: 'author-03.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '02nd June',
    },
    {
        author: {
            name: 'Pauline Carter',
            image: 'author-04.jpg',
        },
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus? Impedit mollitia nesciunt itaque optio incidunt enim quae, molestiae, accusamus ratione illum eum sapiente tempore fugiat quam, expedita vel perferendis!',
        date: '09th June',
    },
];

const makeTestimonialCard = testimonial => {
    return `<div class="testimonial-card"> 
        <img src="${testimonial.author.image}">
        <h2>${testimonial.author.name} </h2>
        <p>${testimonial.text}</p>
        <date>Written on ${testimonial.date}</date>
    </div>`
};

let currentTestimonial = 0;

const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length - 1) {
        currentTestimonial += 1;
        updatePage();
    }
}
const prevTestimonial = () => {
    if (currentTestimonial > 0) {
        currentTestimonial -= 1;
        updatePage();
    }
}

const updatePage = () => {
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);

    if (testimonials.length > 1) {
        markup += `<nav>
        <button onclick="prevTestimonial()">Previous</button>
    <button onclick="nextTestimonial()">Next</button>
   </nav>`
    }

    const container = document.getElementById('testimonials-container');

    container.innerHTML = markup;
}

updatePage();


