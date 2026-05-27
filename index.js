const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    animeNameEl.innerText = "Updating..."
    animeImgEl.src = "spinner.svg";
    const response = await fetch("https://nekos.best/api/v2/waifu");
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";

    console.log(data);

    animeContainerEl.style.display = "block";

    animeImgEl.src = data.results[0].url;
    animeNameEl.innerText = data.results[0].artist_name;
  } catch (error) {
    console.log(error);
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "An error happened, please try again";
  }
});