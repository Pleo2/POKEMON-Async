const API = "https://api.pokemontcg.io/v2/cards/";
const options = {
    method: "GET",
    apiKey: "e45a77d6-5b1b-465d-a0ae-67038c51e6e8",
};

// -----------------------------------------------------------------------------------------------------------------------------//

const img = null || document.querySelector("#Card-Img");
const button = null || document.querySelector("button");

const minNumber = 0;
const maxNumber = 249;

const generateRandomNumber = (minNumber,maxNumber) => {
    return Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber);
} ;

const fetchData = async (urlApi, options) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    
    return data;
};

const getCard = async () => {
    const all = await fetchData(API, options);
    const slacksCards = await all.data
    const urlImagesCard = await slacksCards.map(element => element.images.small);
    return urlImagesCard[generateRandomNumber(minNumber,maxNumber)];
} 

const showCard = (urlCard) => {
    img.src = urlCard;
    return
}

(async () => {
  try {
    const result = await getCard();
    showCard(result);

} catch (error) {
    console.log(error);
}
})();


