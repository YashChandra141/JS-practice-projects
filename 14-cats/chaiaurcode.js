const url = "https://api.thecatapi.com/v1/images/search";
const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      if (!response) throw new Error("nhk");
      return response.json();
    })
    .then((data) => {
      if (data && data.length > 0) {
        const imageUrl = data[0].url; // Assuming the API returns an array with image URLs
        // Display the image or use it as needed
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement); // Append the image to the body
        setTimeout(() => {
          document.body.removeChild(imageElement);
        }, 5000);
      } else {
        throw new Error("No image data received.");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
});
