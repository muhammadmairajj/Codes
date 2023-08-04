let testimonialContainer = document.querySelector('.testimonial-container');
let testimonial = document.querySelector('.testimonial');
let userImage = document.querySelector('.user-img');
let userRole = document.querySelector('.user-role');
let userName = document.querySelector('.username');

let testimonials = [];

let index = 1;

function updateTestimonial() {
    const { name, text, photo, position } = testimonials[index];

    testimonial.innerHTML = text;
    userImage.src = photo;
    userRole.innerHTML = position;
    userName.innerHTML = name;

    index++;

    if(index > testimonial.length - 1) {
        index = 0;
    }
}

setInterval(updateTestimonial, 1000);