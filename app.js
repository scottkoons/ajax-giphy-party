// ------------ EventListeners -----------
// Search
const searchBtn = document
  .getElementById("searchGiphy")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let search = getCategory(giphySearch.value);
    giphySearch.value = "";
  });

// Delete images
const deleteBtn = document
  .getElementById("removeImg")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let allImg = document.querySelectorAll("img"); // Select all img tags
    for (let i = 0; i < allImg.length; i++) {
      allImg[i].parentElement.remove(); // Removes the parent of all img tags
    }
  });

// ------------ EventHandlers cathes errors -----------
// Generates random pic in selected category from form
async function getCategory(category) {
  console.log(`seach is passed in as category & set to ${category}`);
  try {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const response = await axios.get(url); // Calls the generated URL
    let random = Math.floor(Math.random() * 49); // Generates a random number between 0 and 49
    let gliphyURL = response.data.data[random].images.downsized.url; // Retrieves the random search URL
    showOutput(gliphyURL);
  } catch (err) {
    alert("NOT FOUND. PLEASE TRY ANOTHER CATEGORY");
  }
}

let showOutput = (randomImg) => {
  const giphySearch = document.querySelector("#giphySearch");
  const giphyArea = document.querySelector("#giphy-area");
  const giphyImg = document.createElement("div");
  giphyImg.className = "col-4 mb-4";
  giphyImg.innerHTML += `<img src="${randomImg}" alt="" width="100%" class="img-fluid" >`;
  giphyArea.append(giphyImg);
};
