let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let clickerCounter = counter.textContent;
let speedCookie = document.getElementById('clicker__speed'); // В задании не нашёл информацию можно ли добавлять или менять html, поэтому добавил параметр скорости туда
let clicksPerSecond = speedCookie.textContent;
let seconds = 0;

let lastClickTime = 0;

cookie.addEventListener('mousedown', function() {
    cookie.width = 300;
    counter.textContent++
    const currentTime = performance.now(); 
    if (lastClickTime !== 0) {
        const timeBetweenClicks = (currentTime - lastClickTime) / 1000; 
        const clicksPerSecond = 1 / timeBetweenClicks; 
        speedCookie.textContent = clicksPerSecond.toFixed(2);
    }
    lastClickTime = currentTime;
});

cookie.addEventListener('mouseup', function() {
    cookie.width = 200;
    
});

