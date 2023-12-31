const random = () => {
  const l = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += l[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const start = () => {
  if (!interval) {
    interval = setInterval(change, 1000);
  }
  function change() {
    document.body.style.background = random();
  }
};
const stop = () => {
  clearInterval(interval);
  interval = null;
};
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
