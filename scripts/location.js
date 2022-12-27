const client = new petfinder.Client({ apiKey: "tYjMHZupQz0KErvq5ks2tmbgVeeNjmcIcWNxdXWDZB214NzP4I", secret: "DjUBiCURqrNwtRv9GZcuT8CUb6tHWMua1EIlqthR" });
const dogApi = ('https://dog.ceo/api/breeds/image/random');
let animalContainer = document.querySelector('#animal-container');
let doggoBtn = document.querySelector('#doggoBtn');
let randomDog = document.querySelector('#randomDog');
let searchBtn = document.querySelector('#search-submit');
// let dogBreeds = document.querySelector('#dogSearch');



function doggo(){
fetch(dogApi)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    randomDogs = data.message
    randomDog.setAttribute('src', randomDogs);
    console.log(randomDogs);
});
}



async function showAnimals(animalType, searchBreed, postalCode) {
    let page = 1;
    //do {
    apiResult = await client.animal.search({
        type: animalType,
        breed: searchBreed,
        location: postalCode,
        page: 1,
        limit: 20,
    });
    let dogIdx = (page = 1) * 100;
    apiResult.data.animals.forEach(function (animal) {
        let results = `  ${++dogIdx}: ${animal.name} url: ${animal.url} breed: ${animal.breeds.primary} postcode: ${animal.contact.address} photo: ${animal.photos[0]} description: ${animal.description}`;

        displayAnimal(animal)

    });
    
    page++;

}

function dogData() {

    clearEl(animalContainer);
    
    let dogBreeds = document.querySelector('#dogSearch').value;
    let zips = document.querySelector('#zipSearch').value;
    let animalType = 'Dog'
   
    dogs(animalType,dogBreeds,zips);
}


    function dogs(animalType,dogBreeds,zips) {
    showAnimals(animalType,dogBreeds,zips);
   
    console.log(dogBreeds);
}



// (async function dogs () {
//     let dogBreeds = document.querySelector('#dog-id')
//     let dogBreed = dogBreeds.textContent;
//     await showAnimals("Dog", dogBreed, "80204");
// })() 
let clearEl = function (element) {
    element.innerHTML = "";
};


function displayAnimal(animal){
    

    const div = document.createElement('div')
    div.classList.add('tile', "is-child", "box", "my-2");
    div.innerHTML = "<strong>" + animal.name + "</strong>" + "</br> " + animal.description + ".</br> " + "<a href='"+animal.url+"'>Link to their WebPage</a>" + "</br> " + animal.breeds.primary + ".</br> " + animal.contact.address.city + ", " + animal.contact.address.country + " " + animal.contact.address.postcode;
    document.querySelector("#animal-container").appendChild(div)
    let newA = document.createElement("a");
    newA.setAttribute("href", animal.url)
    div.appendChild(newA);
    if (animal.description == null) {
        return div.innerHTML = div.innerHTML = "<strong>" + animal.name + "</strong>" + ".</br> " + "<a href='"+animal.url+"'>Link to their WebPage</a>" + "</br> " + animal.breeds.primary + ".</br> " + animal.contact.address.city + ", " + animal.contact.address.country + " " + animal.contact.address.postcode;
    }
    let animalImg = document.createElement("img");
    animalImg.classList.add("image", "is-128x128");
    if (animal.photos[0]) {
    animalImg.setAttribute("src", animal.photos[0].full)
    div.appendChild(animalImg)
    }

    
 
}


doggoBtn.addEventListener("click", doggo);


searchBtn.addEventListener('click', dogData);



