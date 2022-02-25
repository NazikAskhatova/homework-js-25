let details = document.querySelectorAll('details');
details.forEach((detail) => {
    detail.addEventListener('toggle', function(e) {
        let article = document.querySelector(`${e.target.id}`);
        article.style.display = 'none';
    })
})

const articles = [
    {
      id: "article-1",
      title: "Hello world",
      image: "./koala.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
    },
    {
      id: "article-2",
      title: "Hello world",
      image: "./koala.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
    },
    {
      id: "article-3",
      title: "Hello world",
      image: "./koala.jpg",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
    }
  ];
  

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