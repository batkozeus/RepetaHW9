// Task 1

// const clockface = document.querySelector(".js-time");
// const startBtn = document.querySelector(".js-start");
// const resetBtn = document.querySelector(".js-reset");
// const lapsField = document.querySelector(".js-laps");

// const defaultTimer = {
//   startTime: 0,
//   deltaTime: 0,
//   active: false
// };
// let timer = { ...defaultTimerr };

// let timerID;

// const basicTimer = () => {
//     if (!timer.active) {
//         let basicStartTimerPoint = new Date();
//         timer.startTime = timer.deltaTime;
//         timer.active = true;
//         startBtn.innerHTML = "Pause";
//         resetBtn.innerHTML = "Reset";

//         let changingTimerPoint = () => {
//             let continueTimer = new Date();
//             let timeDifference =
//                 continueTimer - basicStartTimerPoint + timer.startTime;
//             timer.deltaTime = timeDifference;
//             updateClockface(clockface, timeDifference);
//         };

//         timerID = setInterval(changingTimerPoint, 100);
//     } else {
//         clearInterval(timerID);
//         timer.active = false;
//         startBtn.innerHTML = "Continue";
//         resetBtn.innerHTML = "Lap";
//     }
// };

// startBtn.addEventListener("click", basicTimer);

// const resetTimer = event => {
//     if (event.target.innerHTML === "Reset") {
//         clearInterval(timerID);
//         timer = { ...defaultTimer
//         };
//         updateClockface(clockface, 0);
//         startBtn.innerHTML = "Start";
//         timer.active = false;
//     } else {
//         const newLap = document.createElement("li");
//         newLap.classList.add("js-time-record");
//         newLap.textContent = `Result: ${clockface.textContent}`;
//         lapsField.appendChild(newLap);
//     }
// };

// resetBtn.addEventListener("click", resetTimer);

// function updateClockface(elem, time) {
//     elem.textContent = getFormattedTime(time);
// }

// function getFormattedTime(time) {
//     let date = new Date(time);
//     let minute = date.getMinutes();
//     minute = minute < 10 ? `0${minute}` : `${minute}`;
//     let second = date.getSeconds();
//     second = second < 10 ? `0${second}` : `${second}`;
//     let millisec = date.getMilliseconds();
//     millisec = Math.floor(millisec / 100);
//     let result = `${minute}:${second}.${millisec}`;
//     return result;
// }

// ----------------------------------------------------

class Stopwatch {
    constructor(parent) {
        
        this.startTime = 0;
        this.deltaTime = 0;
        this.active = false;

        this.parent = document.querySelector(parent);

        this.createTimer();
    }

    createTimer () {
        const timerLayout = '<h2>Задание</h2><div class="stopwatch"><p class="time js-time">00:00.0</p><button class="btn js-start">Start</button><button class="btn js-reset">Reset</button></div><ul class="laps js-laps"></ul><hr>';
        this.parent.innerHTML = timerLayout;

        this.clockface = document.querySelector(".js-time");
        this.startBtn = document.querySelector(".js-start");
        this.resetBtn = document.querySelector(".js-reset");
        this.lapsField = document.querySelector(".js-laps");

        this.startBtn.addEventListener("click", this.basicTimer.bind(this));
        this.resetBtn.addEventListener("click", this.resetTimer.bind(this));
    };

    basicTimer () {
        if (!this.active) {
            let basicStartTimerPoint = new Date();
            this.startTime = this.deltaTime;
            this.active = true;
            this.startBtn.innerHTML = "Pause";
            this.resetBtn.innerHTML = "Reset";

            let changingTimerPoint = () => {
                let continueTimer = new Date();
                let timeDifference =
                    continueTimer - basicStartTimerPoint + this.startTime;
                this.deltaTime = timeDifference;
                this.updateClockface(this.clockface, timeDifference);
            };

            this.timerID = setInterval(changingTimerPoint, 100);
        } else {
            clearInterval(this.timerID);
            this.active = false;
            this.startBtn.innerHTML = "Continue";
            this.resetBtn.innerHTML = "Lap";
        }
    };

    resetTimer (event) {
        if (event.target.innerHTML === "Reset") {
            clearInterval(this.timerID);
            this.startTime = 0;
            this.deltaTime = 0;
            this.active = false;
            
            this.updateClockface(this.clockface, 0);
            this.startBtn.innerHTML = "Start";
            this.active = false;
        } else {
            const newLap = document.createElement("li");
            newLap.classList.add("js-time-record");
            newLap.textContent = `Result: ${this.clockface.textContent}`;
            this.lapsField.appendChild(newLap);
        }
    };

    updateClockface (elem, time) {
        elem.textContent = this.getFormattedTime(time);
    }

    getFormattedTime (time) {
        let date = new Date(time);
        let minute = date.getMinutes();
        minute = minute < 10 ? `0${minute}` : `${minute}`;
        let second = date.getSeconds();
        second = second < 10 ? `0${second}` : `${second}`;
        let millisec = date.getMilliseconds();
        millisec = Math.floor(millisec / 100);
        let result = `${minute}:${second}.${millisec}`;
        return result;
    }
}

const newStopwatch = new Stopwatch('.wrapper');