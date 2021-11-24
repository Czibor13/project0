if (!localStorage.getItem('cats')) {
    localStorage.setItem('cats', 0);
}

if (!localStorage.getItem('catGrass')){
    localStorage.setItem('catGrass', 0);
}

let cats = localStorage.getItem('cats');
let catGrass = localStorage.getItem('catGrass');

function count() {
    cats++;
    displayCats.innerHTML = cats;
    localStorage.setItem('cats', cats);
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutNav = document.getElementById('aboutNav');
    const gameNav = document.getElementById('gameNav');
    const resetNav = document.getElementById('resetNav');
    const gameDiv = document.getElementById('game');
    const aboutDiv = document.getElementById('about');
    const resetDiv = document.getElementById('reset');
    const displayCats = document.getElementById('displayCats');

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
        localStorage.setItem('cats', cats);
        localStorage.setItem('catGrass', catGrass);
        displayCats.innerHTML = cats;
        game();
        alert('Game has been reset.')
    }

    displayCats.innerHTML = cats;
    document.getElementById('add').onclick = count;
    aboutNav.onclick = about;
    gameNav.onclick = game;
    resetNav.onclick = reset;
    document.getElementById('resetGame').onclick = resetGame;
});