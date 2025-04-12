let time = document.getElementById('timer');
let timeAcquired = time.textContent
let [hours, minutes, seconds] = timeAcquired.split(':').map(Number); 

const intervalId = setInterval(function () {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if (minutes < 0) {
        minutes = 59;
        hours--;
    } 
    
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!')
    }
    let formatedHours = hours < 10 ? '0' + hours : hours;
    let formatedMinutes  = minutes < 10 ? '0' + minutes : minutes;
    let formatedHSeconds = seconds  < 10 ? '0' + seconds : seconds;
    time.textContent = `${formatedHours}:${formatedMinutes}:${formatedHSeconds}`;
}, 1000)
