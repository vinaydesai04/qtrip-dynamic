import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    const res = await fetch(`${config.backendEndpoint}/cities`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching cities:", err);
    // 2. On any error, return null
    return null;
  }

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  const container = document.getElementById("data");

  const colDiv = document.createElement("div");
  colDiv.className = "col-6 col-lg-3 mb-4";

  const link = document.createElement("a");
  link.href = `pages/adventures/?city=${id}`;
  link.id = id;

  const tileDiv = document.createElement("div");
  tileDiv.className = "tile";

  const img = document.createElement("img");
  img.src = image;
  img.alt = city;

  const tileText = document.createElement("div");
  tileText.className = "tile-text";

  const cityName = document.createElement("h5");
  cityName.textContent = city;

  const cityDesc = document.createElement("p");
  cityDesc.textContent = description;

  tileText.appendChild(cityName);
  tileText.appendChild(cityDesc);
  tileDiv.appendChild(img);
  tileDiv.appendChild(tileText);
  link.appendChild(tileDiv);
  colDiv.appendChild(link);
  container.appendChild(colDiv);
}


export { init, fetchCities, addCityToDOM };
