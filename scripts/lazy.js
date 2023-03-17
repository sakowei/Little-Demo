function lazyLoad() {
  let cards = document.querySelectorAll('.card-img');
  cards.forEach((card) => {
    let URL = card.getAttribute('data-image-full');
    let image = card.querySelector('img');
    image.src = URL;
    image.addEventListener('load', () => {
      image.style.backgroundImage =  `url(${URL})`;
      card.className += 'is-loaded';
    });
  });
}

window.onload = () => {
  setTimeout(lazyLoad, 1000);
}
