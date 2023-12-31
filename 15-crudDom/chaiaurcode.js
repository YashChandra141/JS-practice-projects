// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const year = document.getElementById("year");
// const bookList = document.getElementById("book-list");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const newTitle = title.value;
//   const newAuthor = author.value;
//   const newYear = year.value;
//   if (newTitle && newAuthor && newYear) {
//     const newBook = document.createElement("li");
//     newBook.innerText = `${newTitle} -  ${newAuthor} (${newYear})`;
//     //update
//     bookList.appendChild(newBook);
//     title.value = "";
//     author.value = "";
//     year.value = "";
//   } else {
//     alert("please fill");
//   }
//   //work on CRUD operation of DOM
// });
const form = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTitle = title.value;
  const newAuthor = author.value;
  const newYear = year.value;

  if (newTitle && newAuthor && newYear) {
    const newBook = document.createElement("li");
    newBook.textContent = `${newTitle} - ${newAuthor} (${newYear})`;

    bookList.appendChild(newBook);

    title.value = "";
    author.value = "";
    year.value = "";
  } else {
    alert("Please fill in all fields");
  }
});
