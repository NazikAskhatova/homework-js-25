let details = document.querySelectorAll('details');
details.forEach((detail) => {
    detail.addEventListener('toggle', function(e) {
        let article = document.querySelector(`${e.target.id}`);
        article.style.display = 'none';
    })
})

const main = document.querySelector('main');
articles.forEach(article => {
  const articleElement = document.createElement('article');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const a = document.createElement('a');

  articleElement.id = article.id;
  h1.textContent = article.title;
  img.src = article.image;
  p.textContent = article.body;
  a.href = './article.html';
  a.style.textDecoration = "none";
  a.style.color = 'black';

  articleElement.append(a);
  a.appendChild(h1);
  articleElement.append(img);
  articleElement.append(p);
  main.append(articleElement);
})