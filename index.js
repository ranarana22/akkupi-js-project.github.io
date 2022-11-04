const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const empmElement = document.getElementById("ampm");

function upDateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let t = "AM";
  if (h > 12) {
    h = h - 12;
    t = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  empmElement.innerText = t;
  setTimeout(() => {
    upDateClock();
  }, 1000);
}

upDateClock();
