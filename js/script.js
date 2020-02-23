//Fetching data from  Rick and Morty API
const baseUrl = `https://rickandmortyapi.com/api/character/`;
let resultDiv = document.querySelector(".results");
const loader = document.querySelector(".loader");

fetch(baseUrl)
  .then(response => response.json())

  .then(json => {
    const jsonResults = json.results;
    let newContent = "";
    jsonResults.forEach(element => {
      element.type === ""
        ? (element.type = "Unkown")
        : (element.type = element.type);
      newContent += `<div class="col-sm-6 col-md-4 col-lg-3">                
                            <div class="card">    
                                <img class="image" src="${element.image}" alt="${element.name}">
                                <div class="details">
                                    <h4 class="name">${element.name}</h4>
                                    <p>Type: <i>${element.type}</i></p>    
                                    <p>Episode count: ${element.episode.length}</p>                                  
                                     <a class="btn btn-primary" href="details.html?id=${element.id}">Details</a>
                                </div>
                             </div>
                        </div>`;
    });

    resultDiv.innerHTML = newContent;
  })

  .catch(() => (document.location.href = "error.html"));
