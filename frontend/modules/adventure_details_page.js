import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const params = new URLSearchParams(search);   
  const adventureId = params.get("adventure");


  // Place holder for functionality to work in the Stubs
  return adventureId;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    const res = await fetch(
      config.backendEndpoint + `/adventures/detail?adventure=${adventureId}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }

  // Place holder for functionality to work in the Stubs
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
   // 1. Name and subtitle
   document.getElementById("adventure-name").textContent = adventure.name;
   document.getElementById("adventure-subtitle").textContent = adventure.subtitle;
 
   // 2. Content/description
   document.getElementById("adventure-content").textContent = adventure.content;
 
   // 3. Images list in #photo-gallery
   const gallery = document.getElementById("photo-gallery");
   gallery.innerHTML = ""; // clear if anything is there
 
   adventure.images.forEach((imgUrl) => {
     const div = document.createElement("div");
     div.className = "col-12"; // full width, one below another
 
     div.innerHTML = `
       <img src="${imgUrl}" alt="${adventure.name}"
            class="activity-card-image img-fluid" />
     `;
 
     gallery.appendChild(div);
   });

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  const gallery = document.getElementById("photo-gallery");

  // 1. Base carousel structure
  gallery.innerHTML = `
    <div id="adventureCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" id="carousel-inner"></div>

      <button class="carousel-control-prev" type="button"
              data-bs-target="#adventureCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button"
              data-bs-target="#adventureCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

  const inner = document.getElementById("carousel-inner");
  inner.innerHTML = "";

  // 2. Add each image as a carousel-item
  images.forEach((imgUrl, index) => {
    const div = document.createElement("div");
    div.className = `carousel-item${index === 0 ? " active" : ""}`;

    div.innerHTML = `
      <img src="${imgUrl}" class="d-block w-100 activity-card-image" alt="Adventure image">
    `;

    inner.appendChild(div);
  });
}


//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
