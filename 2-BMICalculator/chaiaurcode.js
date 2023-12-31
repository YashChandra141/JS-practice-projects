const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const h = parseInt(document.getElementById("height").value);
  const w = parseInt(document.getElementById("weight").value);
  const r = document.getElementById("results");
  if (h === "" || h < 0 || isNaN(h)) {
    r.innerHTML = `Please ${h}`;
  } else if (w === "" || w < 0 || isNaN(w)) {
    r.innerHTML = `Please ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    r.innerHTML = `<span>${bmi}</span>`;
  }
});
