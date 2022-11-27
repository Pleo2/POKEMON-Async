const APIyoutube =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCcqvmc1uRblenC_-z2pizfA&part=snippet%2Cid&order=date&maxResults=9";

  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      "X-RapidAPI-Key": "bfa734cd8emsh6bd35a5af181555p1d441ajsnd13d8ac0acbe",
    },
  };

//----------------------------------------------------------------------------------------------------------------------------//  

const content = null || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(APIyoutube);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <a href="https://www.youtube.com/watch?v=${video.id.videoId}">
        <div
          class="w-full bg-black aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-500">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
        </a>
      </div>
    `
      )
      .slice(0, 8)
      .join("")}
    `;
    content.innerHTML = view;

  } catch (error) {
    console.log(error)
  }
})();