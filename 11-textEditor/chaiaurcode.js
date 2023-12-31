const upperCase = document.getElementsByClassName("btn uppercase")[0];
const lowerCase = document.getElementsByClassName("btn lowercase")[0];
const capitalize = document.getElementsByClassName("btn capitalize");
const bold = document.getElementsByClassName("btn bold");
const italic = document.getElementsByClassName("btn italic");
const underline = document.getElementsByClassName("btn underline");
const output = document.getElementById("output-field");
const input = document.getElementById("input-field");

upperCase.addEventListener("click", () => {
  output.innerText = input.value.toUpperCase();
});
lowerCase.addEventListener("click", () => {
  output.innerText = input.value.toLowerCase();
});
capitalize.addEventListener("click", () => {
  const inpval = input.value;
  output.innerHTML = inpval.charAt(0).toUpperCase() + inpval.splice(1);
});
bold.addEventListener("click", () => {
  output.innerHTML = `<strong>${input.value}</strong>`;
});
italic.addEventListener("click", () => {
  output.innerHTML = `<i>${input.value}</i>`;
});
underline.addEventListener("click", () => {
  output.innerHTML = `<u>${input.value}</u`;
});
