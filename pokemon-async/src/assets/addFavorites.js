const favoritesLimitNumber = 12;
let idFavoriteCard;
let favoriteArray;
let favoritesString;
let parceUrl;
let imgId;


let articleParent = () => event.target.parentNode.parentNode;

document.addEventListener("DOMContentLoaded", () => {
  favoriteArray = JSON.parse(localStorage.getItem("Favorites")) || [];
  domListener();
  if(localStorage.Favorites) {
    const arrowDown = null || document.getElementById("container-arrow-down");

    arrowDown.innerHTML = ` <span id="down-arrows-button" class="opacity-20 scale-50 animate-ping" style="animation-duration: 2s">
    <svg class="-rotate-90" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="48" width="48"><path d="m22.65 35.95-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Zm12.65 0-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Z"/></svg>
    </span>`
  }
});

const domListener = () => {
  favoriteArray = JSON.parse(localStorage.getItem("Favorites")) || [];
  
  if (!localStorage.Favorites) {
    return;
  } else {

    const parceUrl = getArticules();
    showArticules(parceUrl);
    
    if (favoriteArray.length > 0) {
      const btn0 = btnSelect(0);
      btn0.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        deleteFavorites(articleId);
        event.target.parentNode.parentNode.remove();
        domListener();
      };
    }

    if (favoriteArray.length > 1) {
      const btn1 = btnSelect(1);
      btn1.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 2) {
      const btn2 = btnSelect(2);
      btn2.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 3) {
      const btn3 = btnSelect(3);
      btn3.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 4) {
      const btn4 = btnSelect(4);
        btn4.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 5) {
      const btn5 = btnSelect(5);
      btn5.onclick = (event) => {  
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }
  }
};

const getFavorites = () => {
  if (favoriteArray.length === 0) {
    favoriteArray.push({
      img: specialCard.src,
      id: randomNumber,
    }); 
  } else if (
    favoriteArray[favoriteArray.length - 1].img !== specialCard.src &&
    favoriteArray.length < favoritesLimitNumber
  ) {
    favoriteArray.push({
      img: specialCard.src,
      id: randomNumber,
    });
  }
  return favoriteArray;
};

const stringifyFavorites = () => {
  favoritesString = JSON.stringify(favoriteArray);
  return favoritesString;
};

const setLocalStorage = () => {
  localStorage.setItem("Favorites", favoritesString);
};

const getArticules = () => {
  const stringsUrl = localStorage.getItem("Favorites");
  const parceUrl = JSON.parse(stringsUrl);
  return parceUrl;
};

const showArticules = (parceUrl) => {
  let btnNumber = 0;
  let view = `
          ${parceUrl
            .map(
              (element) => `
            <article class="w-max mx-auto" id="${element.id}">
            <img 
            src="${element.img}" 
            alt="" 
            class="w-40 pb-2 mx-auto" />
            
            <div class="w-full flex justify-center mt-4">
            <button
            class="text-gray-300 font-mono font-black text-sm opacity-75 border-2 border-gray-300 rounded-lg w-48 h-max pt-1"
            id="btn-delete${btnNumber++}"
            >delete card 🗑
            </button>
            </div>
            </article>
            `
            )
            .join("")}
            `;
  content.innerHTML = `<h2
            class=" mt-32 cursor-pointer text-center font-sans font-black text-gray-400 text-2xl md:text-4xl lg:text-6xl xl:text-8xl transition-colors duration-500 ease-out">
            <span class="block text-2xl h-18 md:h-18 md:text-7xl xl:h-24 xl:text-9xl">Favorite</span>
            <span
            class="block text-xl text-red-700 xl:inline transition-colors duration-500 ease-out hover:text-orange-500 md:text-4xl lg:text-6xl xl:text-8xl">Cards</span>
            </h2>`;
  content.innerHTML += view;
};

const runfavoriteBtn = () => {
  if (specialCard.src !== "http://127.0.0.1:5500/src/generator-cards.html") {
    getFavorites();
    stringifyFavorites();
    setLocalStorage();
    parceUrl = getArticules();
    showArticules(parceUrl);
    domListener();
    const arrowDown = null || document.getElementById("container-arrow-down");

    arrowDown.innerHTML = ` <span id="down-arrows-button" class="opacity-20 scale-50 animate-ping" style="animation-duration: 2s">
    <svg class="-rotate-90" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="48" width="48"><path d="m22.65 35.95-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Zm12.65 0-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Z"/></svg>
    </span>`
  }
};

const deleteFavorites = (imgId) => {
  let indexInArray = favoriteArray.findIndex((element) => element.id == imgId);
  favoriteArray.splice(indexInArray, 1);
  stringifyFavorites();
  setLocalStorage();
  parceUrl = getArticules();
  showArticules(parceUrl);
};

btnFavorite.onclick = runfavoriteBtn;
