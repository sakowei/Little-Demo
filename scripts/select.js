const button = document.querySelector(".select-btn"),
items = document.querySelectorAll(".item");

button.onclick = () => button.classList.toggle("open");

items.forEach(item => {
  item.onclick = () => {
    item.classList.toggle("checked");
    let checked = document.querySelectorAll(".checked"),
    btnText = document.querySelector('.btn-text');

    (checked && checked.length > 0) ?
    btnText.innerText = `${checked.length} Selected`:
    btnText.innerText = "Select Language";
  }
});
