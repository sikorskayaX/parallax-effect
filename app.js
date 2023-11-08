let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let sec = document.getElementById('sec');
let header = document.querySelector('header');

function scroll(){
    let value = window.scrollY;
    moon.style.top = value * 1.25 + 'px';
    stars.style.left = value * 0.25 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0.05 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

}

window.addEventListener('scroll', scroll);

