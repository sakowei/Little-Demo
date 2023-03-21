function $(args) {
  return document.querySelector(args);
}

const circles = document.querySelectorAll(".circle");
let now = 1;

function update() {
  circles.forEach((step, idx) => {
    idx < now ? 
      step.classList.add('active') : 
      step.classList.remove('active');
  });

  let actives = document.querySelectorAll('.active');
  $("#step").style.width = (actives.length-1) / (circles.length-1) * 100+"%"
  if (now === 1) {
    $("#prev").disabled = true;
  } else if (now === circles.length) {
    $("#next").disabled = true;
  } else {
    $("#prev").disabled = false;
    $("#next").disabled = false;
  }
}

$("#next").onclick = () => {
  now++;
  if (now > circles.length) now = circles.length;
  update();
}


$("#prev").onclick = () => {
  now--;
  if(now < 1) now = 1;
  update();
}
