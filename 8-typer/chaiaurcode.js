const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];

function type() {
  cursor.addEventListener("mouseover", (e) => {
    typedTextSpan.innerText = words[Math.floor(Math.random() * words.length)];
  });
}
type();
function erase() {
  typedTextSpan.innerText = "";
}
erase();
