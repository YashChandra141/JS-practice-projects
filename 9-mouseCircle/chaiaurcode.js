const cursor = document.querySelector(".cursor");
// an array of 10 colors in hex value
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];
let x = 0;
let y = 0;
cursor.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  cursor.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
