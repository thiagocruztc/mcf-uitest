let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=building&api-key=nORWAA7PeGfF1KNvEhtngpvB4wgRZMZo';

let headlines = document.getElementById("headlines");

fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);

data.response.docs.map(article => {

    console.log(article.title);

    let container = document.createElement ("div");
    container.setAttribute('class', "headline-container");

    let a = document.createElement ("a");
    a.setAttribute('href', article.web_url);
    a.innerHTML = article.headline.main;
    
    let p = document.createElement ("p");
    p.innerHTML = article.abstract;

    let img = document.createElement ("img");
    img.setAttribute('src', 'https://nytimes.com/' + article.multimedia[0].url);
    img.setAttribute('class', "headline-img")

    headlines.append(container);
    container.append(img);
    container.appendChild(a);
    container.appendChild(p);

  })
})
