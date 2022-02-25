let details = document.querySelectorAll('details');
details.forEach((detail) => {
    detail.addEventListener('toggle', function(e) {
        let article = document.querySelector(`${e.target.id}`);
        article.style.display = 'none';
    })
})