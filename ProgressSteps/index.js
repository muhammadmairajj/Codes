let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.circle');

let currentActive = 1;

// for Next
next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    // update function
    update();
});

// for prev
prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    // update;
    update();
});

function update() {
    circles.forEach((element, index) => {
        if(index < currentActive) {    // index == 0 and currentActive == 1 so means 0 < 1 
            element.classList.add('active')
        }
        else {
            element.classList.remove('active');
        }
    });

    const active = document.querySelectorAll('.active');

    progress.style.width = ((active.length - 1) / (circles.length - 1)) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;

    }

}
