const minNumber = 0;
const maxNumber = 249;

const generateRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

//! filtro para generar archivos de urls
// const cards = slack[0].data;
// const urlImgCards = cards.map((element) => element.images.large);
// console.log(urlImgCards);
// const urlCard = urlImgCards[generateRandomNumber(minNumber,maxNumber)]

console.log(urlImgCardsSmall[generateRandomNumber(minNumber,maxNumber)]);