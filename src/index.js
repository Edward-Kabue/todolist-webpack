import './style.css';
import Todo from './js/todo.js';
import { checkBox, clearAll } from './js/check';

if (localStorage.getItem('list') !== null) {
  const list = JSON.parse(localStorage.getItem('list'));
  Todo.displayList(list);
}

const input = document.querySelectorAll('.input-text');

const toggleTrash = (event) => {
  const li = event.target.parentNode;
  const drag = event.target.nextElementSibling;
  const trash = drag.nextElementSibling;

  li.style.backgroundColor = '#FFFFE5';
  drag.style.visibility = 'hidden';
  trash.style.visibility = 'visible';
};

const toggleDrag = (event) => {
  const li = event.target.parentNode;
  const drag = event.target.nextElementSibling;
  const trash = drag.nextElementSibling;

  li.style.backgroundColor = '';
  drag.style.visibility = 'visible';
  trash.style.visibility = 'hidden';
};

input.forEach((element) => {
  element.addEventListener('focus', toggleTrash);
  element.addEventListener('blur', toggleDrag);
});

//  edit task

input.forEach((element) => {
  element.addEventListener('change', (event) => {
    const task = new Todo();
    task.editTask(Number(event.target.id) - 1, event.target.value);
  });
});

const form = document.getElementById('sub_form');
const addTodo = document.querySelector('.add-todo');
const submit = (event) => {
  if (addTodo.value === '') {
    event.preventDefault();
  } else {
    const task = new Todo(false, addTodo.value);
    task.addTask();
  }
};
form.addEventListener('submit', submit);

const remove = document.querySelectorAll('.trash');
remove.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    const index = this.parentNode.getAttribute('index');
    const task = new Todo();
    task.removeTask(Number(index));
  });
});

const checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach((element) => {
  element.addEventListener('click', function () {
    checkBox(this);
  });
});

const clearCompleted = document.getElementById('clear');

clearCompleted.addEventListener('click', clearAll);

const clear = document.querySelector('.icon');

clear.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});
