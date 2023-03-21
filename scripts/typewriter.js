const textEl = document.querySelector("#text");
const texts = JSON.parse(textEl.getAttribute('data-text'));

let index = 0, charIndex = 0, interval = 500;
let timer = null, isDeleting = false;

function type(time) {
  window.requestAnimationFrame(type);
  if (!timer) timer = time;
  let tarvel = time - timer;
  if (tarvel > interval) {
    let text = texts[index];
    if(!isDeleting) {
      textEl.innerHTML = text.slice(0, ++charIndex);
      interval = 600 - Math.random() * 400;
    } else {
      textEl.innerHTML = text.slice(0, charIndex--);
    }
    timer = time;

    if (charIndex === text.length) {
      isDeleting = true;
      interval = 200;
      timer = time + 1200;
    }

    if (charIndex < 0) {
      isDeleting = false;
      timer = time + 200;
      index = ++index % texts.length;
    }
  }
}

window.requestAnimationFrame(type);
