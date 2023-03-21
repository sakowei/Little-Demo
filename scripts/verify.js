function $(args){
  return document.querySelector(args);
}

window.onload = function() {
  const items = document.querySelectorAll(".num");
  
  function showNum() {
    let nowNum = $(".input").value;
    Array.from(items).map((item, index) => {
      nowNum[index] ?
        item.innerText = nowNum[index] :
        item.innerText = "";
    });
  }

  function setActive(type) {
    const valLength = $(".input").value.length;
    Array.from(items).map(item => item.className = "num");
    if (type === "focus") {
      items[valLength === 6 ? valLength - 1 : valLength].classList.add("active");
    }
  }

  $(".input").onfocus = () => setActive('focus');

  $(".input").onblur = () => setActive('blur');

  $(".input").oninput = () => {
    showNum();
    setActive('focus');
  }
}
