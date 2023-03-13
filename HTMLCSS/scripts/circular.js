let cirPrgs = document.querySelector(".progress"),
prgsVal = document.querySelector(".value");

let startVal = 0, endVal = 45, speed = 100;

let progress = setInterval(() => {
  startVal++;
  prgsVal.textContent = `${startVal}%`;
  cirPrgs.style.background = `conic-gradient(#7d2ae8 ${startVal*3.6}deg, #ededed 0)`;

  if(startVal == endVal) clearInterval(progress);
}, speed);
