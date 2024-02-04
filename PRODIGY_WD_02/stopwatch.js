let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStop").innerText = "Stop";
  }

  isRunning = !isRunning;
}

function updateDisplay() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").innerText = formattedTime;
}

function recordLap() {
  const lapTimesContainer = document.getElementById("lapTimes");
  const lapTime = document.createElement("div");
  lapTime.innerText = `Lap ${lapCounter}: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  lapTimesContainer.appendChild(lapTime);
  lapCounter++;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCounter = 1;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("lapTimes").innerHTML = "";
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
