const url = "https://api.chucknorris.io/jokes/random";
const btn = document.getElementById("getJoke");
const display = document.getElementById("display-joke");
// handle this end point with XMLHttpRequest
btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        display.textContent = response.value;
      } else {
        console.error("Error:", xhr.statusText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
});
// handle this end point with promises
// btn.addEventListener("click", () => {
//   fetch(url)
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error("network error: ");
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       display.innerText = data.value;
//     })
//     .catch(function (err) {
//       console.Error("error");
//     });
// },);

// handle the case of race condition
// let tid;
// btn.addEventListener("click", () => {
//   if (tid) return clearTimeout(tid);
//   tid = setTimeout(() => {
//     fetch(url)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         display.innerText = data.value;
//       })
//       .catch(function (err) {
//         console.Error("error", err);
//       }, 500);
//   });
// });
