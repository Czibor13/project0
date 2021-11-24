if (!localStorage.getItem('cats')) {
    localStorage.setItem('cats', 0);
}

if (!localStorage.getItem('catGrass')){
    localStorage.setItem('catGrass', 0);
}

if (!localStorage.getItem('catNip')){
    localStorage.setItem('catNip', 0);
}

let cats = localStorage.getItem('cats');
let catGrass = localStorage.getItem('catGrass');
let catNip = localStorage.getItem('catNip');

function count() {
    cats++;

    updateDisplay();
    saveGame();
}

function buyCatGrass() {
    let cost = 10;
    if (cats >= cost) {
        cats = cats - cost;
        catGrass++;

        updateDisplay();
        saveGame();
    }
}

function buyCatNip() {
    let cost = 100;
    if (cats >= cost) {
        cats = cats - cost;
        catNip++;

        updateDisplay();
        saveGame();
    }
}

function timer() {
    cats = cats + catGrass + (10 * catNip);
    updateDisplay();
    saveGame();
}

function updateDisplay() {
    displayCats.innerHTML = cats;
    catGrassNum.innerHTML = catGrass;
    catNipNum.innerHTML = catNip;
}

function saveGame() {
    localStorage.setItem('cats', cats);
    localStorage.setItem('catGrass', catGrass);
    localStorage.setItem('catGrass', catNip);
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutNav = document.getElementById('aboutNav');
    const gameNav = document.getElementById('gameNav');
    const resetNav = document.getElementById('resetNav');
    const gameDiv = document.getElementById('game');
    const aboutDiv = document.getElementById('about');
    const resetDiv = document.getElementById('reset');
    const displayCats = document.getElementById('displayCats');
    const catGrassNum = document.getElementById('catGrassNum');
    const catNipNum = document.getElementById('catNipNum');

    function hide(){
        gameNav.classList.remove('active');
        aboutNav.classList.remove('active');
        resetNav.classList.remove('active');
        gameDiv.style.display = 'none';
        aboutDiv.style.display = 'none';
        resetDiv.style.display = 'none';
    }
    
    function about() {
        hide();
    
        aboutDiv.style.display = 'block';
        aboutNav.classList.add('active');
    }
    
    function game() {
        hide();
    
        gameDiv.style.display = 'block';
        gameNav.classList.add('active');
    }

    function reset() {
        hide();

        resetDiv.style.display = 'block';
        resetNav.classList.add('active');
    }

    function resetGame() {
        cats = 0;
        catGrass = 0;
        catNip = 0;
        updateDisplay();
        saveGame();
        game();
        alert('Game has been reset.')
    }

    updateDisplay();
    document.getElementById('add').onclick = count;
    document.getElementById('buyCatGrass').onclick = buyCatGrass;
    document.getElementById('buyCatNip').onclick = buyCatNip;
    aboutNav.onclick = about;
    gameNav.onclick = game;
    resetNav.onclick = reset;
    document.getElementById('resetGame').onclick = resetGame;

    setInterval(timer, 10000);
});