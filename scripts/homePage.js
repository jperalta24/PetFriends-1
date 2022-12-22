
// let pf = new petfinder.Client({apiKey: "R6HHpSjeqYqBbA8WeS0BsgUrueBSrcTSSER2uVIXR7Zq81hAW0", secret:"NOR0WsQAKlIXfyAAYAnVBWVUrQxvm2MrRBaAnHv6"});

// // console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);

let animalCard = document.querySelector('#animal')

const client = new petfinder.Client({ apiKey: "R6HHpSjeqYqBbA8WeS0BsgUrueBSrcTSSER2uVIXR7Zq81hAW0", secret:"NOR0WsQAKlIXfyAAYAnVBWVUrQxvm2MrRBaAnHv6"});

async function showAnimals(dogBreed){
  let page = 1;
  do{
apiResult = await client.animal.search({
  breed: dogBreed,
  page,
  limit: 100,
});
let dogIdx = (page - 1) * 100;
    apiResult.data.animals.forEach(function(animal) {
      let results = ` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`;
      animalCard.textContent = results;
      console.log(animalCard.textContent);
});

page++;
  }
  while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
}

(async function() {
  await showAnimals("Bernedoodle");
})();




// async function showAnimals(animalType, searchBreed) {
//   let page = 1;
//   do {
//     apiResult = await client.animal.search({
//       type: animalType,
//       breed: searchBreed,
//       page,
//       limit: 100,
//     });
//     let dogIdx = (page - 1) * 100;
//     apiResult.data.animals.forEach(function(animal) {
//       let results = ` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`;
//       animalCard.textContent = results;
//       console.log(animalCard.textContent);
//     });

//     page++;
//   } 
//   while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
// }

// (async function() {
//   await showAnimals("Dog", "Bernedoodle");
// })();

client.animalData.types()
  .then(resp => {
    console.log(resp);
    
  });

//   create a dropdown menu that gives options on the type of animal the user wants
//  to adopt. 
// animal types: Dog, Cat, Rabbit, Small & Furry, Bird, Scales, Fins & Other, Barnyard.

// add a modal that takes in user zip code

// breed. add a dropdown tha lets user pick a breed. add an auto-suggest function to the drop down 
 
// when profile of animal is displayed; add a url to it to direct user to its petfinder adoption page.

// 
