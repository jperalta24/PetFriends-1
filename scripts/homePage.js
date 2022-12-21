
let pf = new petfinder.Client({apiKey: "R6HHpSjeqYqBbA8WeS0BsgUrueBSrcTSSER2uVIXR7Zq81hAW0", secret:"NOR0WsQAKlIXfyAAYAnVBWVUrQxvm2MrRBaAnHv6"});

// pf.animal.search()
//     .then(function (response) {
//         console.log(response);
        
       
//     })
//     .catch(function (error) {
//         console.log(error);
        
//     });

const client = new petfinder.Client({ apiKey: "R6HHpSjeqYqBbA8WeS0BsgUrueBSrcTSSER2uVIXR7Zq81hAW0", secret:"NOR0WsQAKlIXfyAAYAnVBWVUrQxvm2MrRBaAnHv6"});

async function showAnimals(animalType, searchBreed) {
  let page = 1;
  do {
    apiResult = await client.animal.search({
      type: animalType,
      breed: searchBreed,
      page,
      limit: 100,
    });
    let dogIdx = (page - 1) * 100;
    apiResult.data.animals.forEach(function(animal) {
      console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
    });

    page++;
  } while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
}

(async function() {
  await showAnimals("Dog", "Bernedoodle");
})();