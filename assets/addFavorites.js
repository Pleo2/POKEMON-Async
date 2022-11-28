let favoriteArray = [];
let favoritesString;
let parceUrl;


document.addEventListener('DOMContentLoaded', () => {
  favoriteArray = JSON.parse(localStorage.getItem("Favorites")) || [];
  if(!localStorage.Favorites){
    return 
  } 
    const parceUrl = getArticules();
    showArticules(parceUrl);
});

const getFavorites = () => {
  if (favoriteArray[favoriteArray.length -1] !== specialCard.src){
    favoriteArray.push(specialCard.src)
  }
  return favoriteArray
}

const stringifyFavorites = () => {
  favoritesString = JSON.stringify(favoriteArray);
  return favoritesString;
}

const setLocalStorage = () => {
  localStorage.setItem("Favorites", favoritesString)
}

const getArticules = () => {
  const stringsUrl = localStorage.getItem("Favorites");
  const parceUrl = JSON.parse(stringsUrl);
  return parceUrl;
}

const showArticules = (parceUrl) => {
  let view = `
  ${parceUrl.map(img => `
  <article class="w-max mx-auto">
  <img 
  src="${img}" 
  alt="" 
  class="w-40 pb-2 mx-auto" />
  
  <div class="w-full flex justify-center mt-4">
    <button
      class="text-white font-mono font-black opacity-75 animate container animated w-48 h-max pt-1 inline "
      id="btn-delete"
      >delete card 🗑
    </button>
  </div>
  </article>
  `
    )
    .join("")}
  `;
  content.innerHTML = `<h2
  class=" mt-8 cursor-pointer text-center font-sans font-black text-gray-400 md:text-8xl lg:text-8xl xl:text-9xl transition-colors duration-500 ease-out">
  <span class="block text-2xl h-18 md:h-18 md:text-7xl xl:h-24 xl:text-9xl">Favorite</span>
  <span
    class="block text-xl text-red-700 xl:inline transition-colors duration-500 ease-out hover:text-orange-500 md:text-4xl lg:text-6xl xl:text-8xl">Cards</span>
  <span class="text-gray-600">( お気に入りのカード )</span>
</h2>`
  content.innerHTML += view;
}

const runfavoriteBtn = () => {
  if (specialCard.src !== "http://127.0.0.1:5500/src/generator-cards.html") {
    getFavorites();
    stringifyFavorites();
    setLocalStorage();
    const parceUrl = getArticules();
    showArticules(parceUrl);
  }
}

btnFavorite.onclick = runfavoriteBtn;