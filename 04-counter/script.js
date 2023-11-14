const addButtonElement = document.getElementById('counterAdd')
const subButtonElement = document.getElementById('counterSub');
const counterDisplayElement = document.getElementById('counterDisplay');

let total = 0;
const limit = 20;

const updateCounterDisplay = function() {
    if (total > limit) {
        total = limit;
    }

    if (total < 0) {
        total = 0;
    }

    counterDisplayElement.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`)
};

addButtonElement.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
});

subButtonElement.addEventListener('click', () => {
    total -=1;
    updateCounterDisplay();
});

updateCounterDisplay();
