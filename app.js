// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const boulderButton = document.getElementById('boulder-button');
const treeButton = document.getElementById('tree-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.random(Math.floor() * arr.length);

    return arr[index];
}


function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-container`);

    correctHidingPlaceEl.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;

}
/*
function setStyles() {
    shedContainer.classList.add('face');
    treeContainer.classList.add('face');
    boulderContainer.classList.add('face');
}
*/
shedButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('shed', correctSpot);  
});

treeButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('tree', correctSpot);  
});

boulderButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('boulder', correctSpot);  
});

function resetStyles() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}
