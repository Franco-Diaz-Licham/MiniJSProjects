(function (app) {
    let state = false;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    app.execute = function () {
        wireupButtons();
    };

    function wireupButtons() {
        const start = document.getElementById('start');
        const stop = document.getElementById('stop');
        const reset = document.getElementById('reset');
        start.onclick = startTimer;
        stop.onclick = stopTimer;
        reset.onclick = resetTimer;
    }

    async function startTimer() {
        state = true;
        time();
    }

    async function sleep(time) {
        const pro = new Promise((resolve, reject) => {
            setTimeout(resolve, time);
        })
        return pro;
    }

    async function stopTimer() {
        state = false;
    }

    async function resetTimer() {
        const timer = document.getElementById('timer');
        timer.innerText = '00:00:00';
    }

    async function time(){
        while (true) {
            await sleep(1000);
            if (state === true) {
                seconds += 1;
                if (seconds !== 0 && seconds % 60 === 0) {
                    minutes += 1;
                    seconds = 0;
                }
                if (minutes !== 0 && minutes % 60 === 0) {
                    hours += 1;
                    minutes = 0;
                }
                updateTimer();
            }
            else {
                break;
            }
        }
    }

    function updateTimer() {
        const timer = document.getElementById('timer');
        let h = String(hours).padStart(2, '0');
        let m = String(minutes).padStart(2, '0');
        let s = String(seconds).padStart(2, '0');
        timer.innerText = `${h}:${m}:${s}`;
    }
    
})(window.app = window.app || {})