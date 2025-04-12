function getCurrentTime() {
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds;
}

let smth = 10 / getCurrentTime()
console.log(smth);