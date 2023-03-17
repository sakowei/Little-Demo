let boxes = [];
let timer, nowBox, nowLoop, stopBox;

window.onload = function () {
  for (var i = 0; i <= 8; i++) {
    boxes[i] = document.getElementById(i);

    boxes[0].onclick = () => {
      init();
      timer = setInterval(loop, 200);
    }
  }
}

function init() {
  clearInterval(timer);
  timer = null;
  nowBox = 0;
  nowLoop = 1;
  stopBox = 0;

  for (let i = 1; i <= 8; i++) {
    boxes[i].innerHTML = i;
    boxes[i].style.backgroundColor = 'transparent';
  }
}

function loop() {
  if (nowBox >= 1 || nowBox > 1) boxes[nowBox].style.backgroundColor = "transparent";
  if (nowBox == 8) nowBox = 0;
  nowBox++;
  boxes[nowBox].style.backgroundColor = "dodgerblue";
  if (nowLoop == 4 && stopBox == nowBox) {
    boxes[nowBox].innerHTML = "WIN";
    clearInterval(timer);
    return;
  }

  if (nowBox == 8) {
    nowLoop++;
    if (nowLoop == 4) stopBox = Math.floor(Math.random()*(8-1+1)+1);
    if (nowLoop == 4 && nowBox == 1) {
      clearInterval(timer);
      timer = setInterval(loop, 1000);
    }
  }
}