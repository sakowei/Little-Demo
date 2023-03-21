let counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = 0;
  function update() {
     let target = + counter.getAttribute('data-target');
    let c = + counter.innerText;
    let increase = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c+increase)}`;
      setTimeout(update, 2);
    } else {
      counter.innerText = target;
    }
  }
  update();
});
