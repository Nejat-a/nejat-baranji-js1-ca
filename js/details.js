const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id;
let detailsContainer = document.querySelector(".detail-container");

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseUrl = `https://rickandmortyapi.com/api/character/`;
const detailsUrl = `${baseUrl}${id}`;

fetch(detailsUrl)
  .then(response => response.json())

  .then(getDetails => {
    let createDetailsDiv = `<div class="detail-container">
                                <img class="details-image" src="${getDetails.image}" alt="${getDetails.name}" />
                                    <div class="detail-details">
                                        <h1>${getDetails.name}</h1>
                                        <p>Status: <span class="value" id="status">${getDetails.status}</span></p>
                                        <p>Species: <span class="value" id="species">${getDetails.species}</span></p>
                                        <p>Origin: <span class="value" id="origin">${getDetails.origin.name}</span></p>
                                        <p>Location: <span class="value" id="location">${getDetails.location.name}</span></p>                   
                                     </div>
                            </div>`;

    detailsContainer.innerHTML = createDetailsDiv;
    document.title = getDetails.name;
  })

  .catch(() => (document.location.href = "error.html"));
