const baseURL = "https://source.unsplash.com/all/300x300";

// this url gives an image. Use this and NO API calls
const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", (e) => {
  window.location.href = baseURL;
});
