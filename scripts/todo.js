function $(args) {
  return document.querySelector(args);
}

const todos = JSON.parse(localStorage.getItem('todos'));

function updateList() {
  let todosEl = document.querySelectorAll('li');
  let todos = [];
  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      done: todoEl.classList.contains('done')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(todo) {
  let item = $('#input').value;
  if(todo) item = todo.text;
  if(item) {
    const todoEl = document.createElement('li');
    if(todo && todo.done) todoEl.classList.add('done');
    todoEl.innerText = item;
    todoEl.onclick = () => {
      todoEl.classList.toggle('done');
      updateList();
    }

    todoEl.oncontextmenu = (e) => {
      e.preventDefault();
      todoEl.remove();
      updateList();
    }
    $('#todos').appendChild(todoEl);
    $('#input').value = "";
    updateList();
  }
}

if(todos) todos.forEach(todo => addTodo(todo));

$('#form').onsubmit = () => addTodo();
