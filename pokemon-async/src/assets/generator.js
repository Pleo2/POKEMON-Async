const btn = null || document.querySelector("#btn");
const specialCard = null || document.getElementById("Special-Card");
const btn2 = null || document.querySelector("#btn2");

const minNumber = 0;
const maxNumber = 249;
let result = "";
let contador = "";

const generateRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const getCard = () => {
  result = urlImgCardsSmall[generateRandomNumber(minNumber,maxNumber)];
}

const showCard = () => {
  specialCard.src = result
}

const generateCard = () => {
  getCard();
  showCard();
}

btn.onclick = generateCard;

btn2.onclick = showCard;