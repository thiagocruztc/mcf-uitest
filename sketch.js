// Search API //

// let searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=books&api-key=nORWAA7PeGfF1KNvEhtngpvB4wgRZMZo'

var searchUrl;

function searchString() {
  var str = document.getElementById("searchBar").value;
  searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + str + '&api-key=nORWAA7PeGfF1KNvEhtngpvB4wgRZMZo';

  let searchApi = document.getElementById("searchApi");

  fetch(searchUrl)
  .then(response => response.json())
  .then(searchData => {
    console.log(searchData);
    searchData.response.docs.slice(0,9).map(searchArticle => {

          console.log(searchArticle.title); 

          let searchContainer = document.createElement ("div");
          searchContainer.setAttribute('class', "headline-container");

          let searchA = document.createElement ("a");
          searchA.setAttribute('href', searchArticle.web_url);
          searchA.innerHTML = searchArticle.headline.main;
          searchA.setAttribute('class', "headline-title")
          
          let searchP = document.createElement ("p");
          searchP.innerHTML = searchArticle.abstract;
          searchP.setAttribute('class', "headline-snippet")

          let searchImg = document.createElement ("img");
          searchImg.setAttribute('src', 'https://nytimes.com/' + searchArticle.multimedia[0].url);
          searchImg.setAttribute('class', "headline-img");

          searchApi.append(searchContainer);
          searchContainer.append(searchImg);
          searchContainer.appendChild(searchA);
          searchContainer.appendChild(searchP);

  })
})
}

function searchDef(){
  console.log(searchUrl) 
}



/* const searchBar = document.getElementById('searchBar');

  searchBar.addEventListener('input', (event) => {
    console.log(event.target.value);
    }
) */


// Top Stories API //

let topUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nORWAA7PeGfF1KNvEhtngpvB4wgRZMZo'

let topApi = document.getElementById("topApi");

fetch(topUrl)
.then(response => response.json())
.then(topData => {
  console.log(topData);

topData.results.slice(0,3).map(topArticle => {

  console.log(topArticle.title);

  let topContainer = document.createElement ("div");
  topContainer.setAttribute('class', "headline-container");

  let topA = document.createElement ("a");
  topA.setAttribute('href', topArticle.url);
  topA.innerHTML = topArticle.title;
  topA.setAttribute('class', "headline-title");
  
  let topP = document.createElement ("p");
  topP.innerHTML = topArticle.abstract;
  topP.setAttribute('class', "headline-snippet")

  let topImg = document.createElement ("img");
  topImg.setAttribute('src', topArticle.multimedia[0].url);
  topImg.setAttribute('class', "headline-img");
  
  topApi.append(topContainer);
  topContainer.append(topImg);
  topContainer.append(topA);
  topContainer.append(topP);
})
})

// Real-Time Feed  API //

let recentUrl = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=nORWAA7PeGfF1KNvEhtngpvB4wgRZMZo&offset=50'

let recentApi = document.getElementById("recentApi");

fetch(recentUrl)
.then(response => response.json())
.then(recentData => {
  console.log(recentData);

recentData.results.slice(0,9).map(recentArticle => {

  console.log(recentArticle.title);

  let recentContainer = document.createElement ("div");
  recentContainer.setAttribute('class', "headline-container");

  let recentA = document.createElement ("a");
  recentA.setAttribute('href', recentArticle.url);
  recentA.innerHTML = recentArticle.title;
  recentA.setAttribute('class', "headline-title");
  
  let recentP = document.createElement ("p");
  recentP.innerHTML = recentArticle.abstract;
  recentP.setAttribute('class', "headline-snippet")

  let recentImg = document.createElement ("img");
  recentImg.setAttribute('src', recentArticle.multimedia[2].url);
  recentImg.setAttribute('class', "headline-img");
  
  recentApi.append(recentContainer);
  recentContainer.append(recentImg);
  recentContainer.append(recentA);
  recentContainer.append(recentP);
})
})