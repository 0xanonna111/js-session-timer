let duration = 5 * 60; // 5 minutes
let timer = null;

const timeEl = document.getElementById("time");
const statusEl = document.getElementById("status");

function updateDisplay() {
  const min = Math.floor(duration / 60);
  const sec = duration % 60;
  timeEl.innerText =
    `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function startSession() {
  timer = setInterval(() => {
    duration--;
    updateDisplay();

    if (duration <= 0) {
      clearInterval(timer);
      statusEl.innerText = "Session expired. Logged out!";
      statusEl.style.color = "red";
    }
  }, 1000);
}

function extendSession() {
  duration = 5 * 60;
  statusEl.innerText = "Session extended!";
  statusEl.style.color = "green";
}

updateDisplay();
startSession();
