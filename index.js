let stopwatch = document.getElementById("sw");
let startBtn = document.getElementById("start-btn");
let timeoutId = null;
let ms = 0;
let sec = 0;
let min = 0;
 
/* function to start stopwatch */
function start(flag) {
    if (flag) {
        startBtn.disabled = true;
    }
 
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
 
        // calling start() function recursive to continue stopwatch
        start();
 
    }, 10); // setTimeout delay time 10 milliseconds
}
 
/* function to pause stopwatch */
function stop() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
 
/* function to reset stopwatch */
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
}