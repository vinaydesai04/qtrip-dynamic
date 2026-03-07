
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
   // 1. Create URLSearchParams object from the query string
   const params = new URLSearchParams(search);

   // 2. Get the value of "city" from the params
   const city = params.get("city");
   
 
   // 3. Return that value
   return city;

}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try {
    const res = await fetch(
      `${config.backendEndpoint}/adventures?city=${city}`
    );

    // Parse and return JSON
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error in fetchAdventures:", err);
    // On any error, return null (this is what tests expect)
    return null;
  }

}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // Get the parent container
  const container = document.getElementById("data");

  // Clear existing cards (if any)
  container.textContent = "";

  // Loop through each adventure and create a card
  adventures.forEach((adventure) => {
    // Outer column div
    const colDiv = document.createElement("div");
    colDiv.className = "col-6 col-lg-3 mb-4";

    // Clickable link wrapping the card
    const link = document.createElement("a");
    link.href = `detail/?adventure=${adventure.id}`;
    link.id = adventure.id;
    link.className = "activity-card";

    // Category banner
    const categoryBanner = document.createElement("div");
    categoryBanner.className = "category-banner";
    categoryBanner.textContent = adventure.category;

    // Image
    const img = document.createElement("img");
    img.src = adventure.image;
    img.alt = adventure.name;
    img.className = "activity-card img";

    // Card body
    const cardBody = document.createElement("div");
    cardBody.className = "d-flex flex-column p-2 w-100";

    // Name and cost row
    const nameCostDiv = document.createElement("div");
    nameCostDiv.className = "d-flex justify-content-between w-100";
    nameCostDiv.innerHTML = `
      <h5 class="mb-1">${adventure.name}</h5>
      <p class="mb-1">₹${adventure.costPerHead}</p>
    `;

    // Duration row
    const durationDiv = document.createElement("div");
    durationDiv.className = "d-flex justify-content-between w-100";
    durationDiv.innerHTML = `
      <p class="mb-1">Duration</p>
      <p class="mb-1">${adventure.duration} Hours</p>
    `;

    // Assemble card body
    cardBody.appendChild(nameCostDiv);
    cardBody.appendChild(durationDiv);

    // Assemble link
    link.appendChild(categoryBanner);
    link.appendChild(img);
    link.appendChild(cardBody);

    // Add to column, then to container
    colDiv.appendChild(link);
    container.appendChild(colDiv);
  });
}


//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
  

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
