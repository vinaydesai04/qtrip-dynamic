import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    const res = await fetch(`${config.backendEndpoint}/reservations/`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  const noBanner = document.getElementById("no-reservation-banner");
  const tableParent = document.getElementById("reservation-table-parent");
  const tableBody = document.getElementById("reservation-table");

  if (!reservations || reservations.length === 0) {
    noBanner.style.display = "block";
    tableParent.style.display = "none";
    return;
  }

  noBanner.style.display = "none";
  tableParent.style.display = "block";
  tableBody.innerHTML = "";

  reservations.forEach((resv) => {
    const tr = document.createElement("tr");

    const reservationDate = new Date(resv.date);
    const bookingTime = new Date(resv.time);

    // Date: en-IN
    const dateStr = reservationDate.toLocaleDateString("en-IN");

    // Booking Time: EXACT format "4 November 2020, 9:32:31 pm"
    const day = bookingTime.getDate();
    const month = bookingTime.toLocaleString("en-IN", { month: "long" });
    const year = bookingTime.getFullYear();

    let hours = bookingTime.getHours();
    const minutes = bookingTime.getMinutes().toString().padStart(2, "0");
    const seconds = bookingTime.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    if (hours === 0) hours = 12;

    const bookingTimeStr = `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;

    tr.innerHTML = `
      <td>${resv.id}</td>
      <td>${resv.name}</td>
      <td>${resv.adventureName}</td>
      <td>${resv.person}</td>
      <td>${dateStr}</td>
      <td>${resv.price}</td>
      <td>${bookingTimeStr}</td>
      <td id="${resv.id}">
        <a class="reservation-visit-button" href="../detail/?adventure=${resv.adventure}">
          Visit Adventure
        </a>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}



export { fetchReservations, addReservationToTable };
