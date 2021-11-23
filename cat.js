if (!localStorage.getItem('cats')) {
    localStorage.setItem('cats', 0);
}

function count() {
    let cats = localStorage.getItem('cats');
    cats++;
    document.getElementById('displayCats').innerHTML = cats;
    localStorage.setItem('cats', cats);
}

function about() {
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    document.getElementById('gameNav').classList.remove('active')


    document.getElementById('about').style.display = 'block';
    document.getElementById('aboutNav').classList.add('active');
}

function game() {
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    });

    document.getElementById('aboutNav').classList.remove('active')

    document.getElementById('game').style.display = 'block';
    document.getElementById('gameNav').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('displayCats').innerHTML = localStorage.getItem('cats');
    document.getElementById('add').onclick = count;
    document.getElementById('aboutNav').onclick = about;
    document.getElementById('gameNav').onclick = game;
});