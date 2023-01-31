const API_URL_RANDOM =
  "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_6syFm55SSbOh69kvAmw6XPE8EvHjZj1pGQfCD5Ox2qAMjX9tzQ0LhdVunlw4CvEh";

const API_URL_FAVOURITES =
  "https://api.thecatapi.com/v1/favourites?limit=3&api_key=live_6syFm55SSbOh69kvAmw6XPE8EvHjZj1pGQfCD5Ox2qAMjX9tzQ0LhdVunlw4CvEh";

const spanError = document.getElementById("error");

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();

  console.log(data);
  if (res.status !== 200) {
    spanError.innerHtml = "hubo un error" + res.status;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}
async function loadFavoriteMichis() {
  const res = await fetch(API_URL_FAVOURITES);
  const data = await res.json();

  console.log(data);

  if (res.status !== 200) {
    spanError.innerHtml = "hubo un error" + res.status + data.message;
  }
}
loadRandomMichis();
loadFavoriteMichis();
