let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let clickerCounter = counter.textContent;
let speedCookie = document.getElementById('clicker__speed'); // В задании не нашёл информацию можно ли добавлять или менять html, поэтому добавил параметр скорости туда
let clicksPerSecond = speedCookie.textContent;
let seconds = 0;

let intervalId = setInterval(function () {
    seconds++;
    speedCookie.textContent = (seconds / counter.textContent).toFixed(2);
}, 1000)

cookie.addEventListener('mousedown', function() {
    cookie.width = 300;
    counter.textContent++
});

cookie.addEventListener('mouseup', function() {
    cookie.width = 200;
    
});

