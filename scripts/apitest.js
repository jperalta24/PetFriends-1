// const apiKey = "R6HHpSjeqYqBbA8WeS0BsgUrueBSrcTSSER2uVIXR7Zq81hAW0"

//  var petFind = function() {
//      fetch(websiteUrl)
//      curl
//      -H ; "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSNkhIcFNqZXFZcUJiQThXZVMwQnNnVXJ1ZUJTcmNUU1NFUjJ1VklYUjdacTgxaEFXMCIsImp0aSI6ImE3NDE4NTRkOGI1MDAzMWM2YzY0M2UzZTRlODE3MGQ5MTBiMmFhYTExYWM5YzdlZGIwNWJiOWQ5YmY0NzNkNmYwNTk1ZWU0Mzk4OGQxZTkzIiwiaWF0IjoxNjcxNTEwNjMwLCJuYmYiOjE2NzE1MTA2MzAsImV4cCI6MTY3MTUxNDIzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Q4v60itBpvMSw_7_iXajY7cXJl6x-4JaZqA8SWNThAnnICM8CaAIKri-3s0fa6iiJXZ8CfYd81S7diDmWvxkvIxO8HnTgKA_dhU36FIIHZsVrkdmL9xG9vPYzwaQmN01ibeObVctmZsvZUwhcSZ7oJZfeENCx0pY3EwsAJw-XRCQGYcTZNVnTBfLLGWIDqrnFIyeQH8Ltr8QU4tGgMppLx3r9XGsQNMloFMhSIptba6PuvLKMPpG72V9daHxlSHL3aHWQRBeq-vOGQmToBHWTLnYwgohUcbXCzljvykIOy7TL_272BwEjSNW4i71_72CpjJJc_38CMBkJa1ZGBMbNA"
//  }

//var petfinder = require("@petfinder/petfinder-js");
const client = new petfinder.Client({apiKey: "R6HHpSjeqYqBbA8WeS0BsgUrueBSrcTSSER2uVIXR7Zq81hAW0", secret: "NOR0WsQAKlIXfyAAYAnVBWVUrQxvm2MrRBaAnHv6"});
let animalCard = document.querySelector('#animalCard')
// const output = document.querySelector('#results')
// const ul = document.createElement('ul');
// const output1 = document.createElement('div')
// output1.append(output);
// output.append(ul)

async function showAnimals(animalType, searchBreed) {
    let page = 1; 
    do {
        apiResult = await client.animal.search({
            type: animalType,
            breed: searchBreed,
            page, 
            limit: 100,
        });
        let dogIdx = (page = 1) * 100;
        apiResult.data.animals.forEach(function(animal) {
            let results = `  ${++dogIdx}: ${animal.name} url: ${animal.url} breed: ${animal.breeds.primary} postcode: ${animal.contact.address.postcode}`;
            //animalCard.textContent = results;
            displayAnimal(animal)
            //innerHTML = JSON.stringify(results);
            console.log(` == ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
        });
        console.log(apiResult)
        page++;
    } while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
}

(async function() {
    await showAnimals("Dog", "Bernedoodle");
})();

function displayAnimal(animal){
    const div = document.createElement('div')
    div.classList.add('tile', "is-child", "box",);
    div.textContent = animal.name + " " + animal.id + " "  + animal.url + " " + animal.breeds.primary + " " + animal.contact.address.postcode;
    document.querySelector("#animal-container").appendChild(div)
    let newA = document.createElement("a");
    newA.setAttribute("href", animal.url)
    div.appendChild(newA);
    let animalImg = document.createElement("img");
    animalImg.classList.add("image", "is-128x128");
    animalImg.setAttribute("src", "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59218632/1/?bust=1671570392&")
    div.appendChild(animalImg)
}

  client.animalData.types()
  .then(resp => {
    console.log(resp);
  });

  client.animalData.breeds('dog')
  .then(resp => {
    console.log(resp)
  });







