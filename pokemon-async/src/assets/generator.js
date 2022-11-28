
const minNumber = 0;
const maxNumber = 249;
let result = "";
let contador = "";

const generateRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const getCard = () => {
  result = cache[generateRandomNumber(minNumber, maxNumber)].images.small;
};

const showCard = () => {
  specialCard.src = result;
};

const generateCard = () => {
  getCard();
  showCard();
};

btn.onclick = generateCard;

