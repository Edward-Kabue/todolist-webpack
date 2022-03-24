import './style.css';
import todo from './js/todo.js';

if (localStorage.getItem('list') !== null) {
  const list = JSON.parse(localStorage.getItem('list'));
  todo.displayList(list);
}

const input = document.querySelectorAll('.input-text');

const getFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;

  li.style.backgroundColor = '#ffe24370';
  ellips.style.visibility = 'hidden';
  trash.style.visibility = 'visible';
};

const lostFocus = (event) => {
  const li = event.target.parentNode;
  const ellips = event.target.nextElementSibling;
  const trash = ellips.nextElementSibling;

  li.style.backgroundColor = '';
  ellips.style.visibility = 'visible';
  trash.style.visibility = 'hidden';
};

input.forEach((element) => {
  element.addEventListener('focus', getFocus);
  element.addEventListener('blur', lostFocus);
});

//  edit task

input.forEach((element) => {
  element.addEventListener('change', (event) => {
    const task = new todo();
    task.editTask(Number(event.target.id) - 1, event.target.value);
  });
});

const form = document.getElementById('sub_form');
const Nitem = document.getElementById('new-item');
const submit = (event) => {
  if (Nitem.value === '') {
    event.preventDefault();
  } else {
    const task = new todo(false, Nitem.value);
    task.addTask();
  }
};
form.addEventListener('submit', submit);

const remove = document.querySelectorAll('.trash');
remove.forEach((el) => {
  el.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    const index = this.parentNode.getAttribute('index');
    const task = new todo();
    task.removeTask(Number(index));
  });
});
