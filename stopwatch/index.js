let mi = document.querySelector(".min");
let se = document.querySelector(".sec");
let mil = document.querySelector(".milsec");
let start = document.querySelector(".start");
let Reset = document.querySelector(".Reset");
let milsec = 0;
let sec = 0;
let min = 0;
let timerId = 0;
function timer() {
  milsec++;

  if (milsec == 100) {
    sec = sec + 1;
    milsec = 0;
  }
  if (sec == 60) {
    min = min + 1;
    sec = 0;
    mi.innerHTML = `${min}m`;
  }
  mil.innerHTML = milsec;
  se.innerHTML = `${sec}s`;
}
function cleartimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    start.innerText = "start";
  } else {
    timerId = setInterval(timer, 10);
    start.innerText = "stop";
  }
}
start.addEventListener("click", function () {
  cleartimer();
});
Reset.addEventListener("click", function () {
  min = sec = milsec = 0;
  mi.innerHTML = "";
  mil.innerHTML = 0;
  se.innerHTML = `${0}s`;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    start.innerText = "start";
  }
});
