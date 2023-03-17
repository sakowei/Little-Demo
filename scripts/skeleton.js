window.onload = () => {
  const aniBGs = document.querySelectorAll('.ani-bg');
  const aniTexts = document.querySelectorAll('.ani-text');
  function $(name) {
    return document.querySelector(name);
  }

  function getData() {
    $('.header').innerHTML = `<img src="./assets/desktop.jpg"/>`;
    $('.title').innerText = 'Lorem ipsum dolor sit amet';
    $('.exp').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    $('.profile-img').innerHTML = `<img src="https://randomuser.me/api/portraits/men/64.jpg" />`;
    $('#name').innerText = "Mc. John";
    $('#date').innerText = 'Mar 24, 2023';
    aniBGs.forEach((bg) => bg.classList.remove('ani-bg'));
    aniTexts.forEach((text) =>text.classList.remove('ani-text')); 
  }

  setTimeout(getData, 2500);
}
