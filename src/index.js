import './style.css';

const todoList = document.querySelector('.todo-list');

const tasks = [
  {
    description: 'This is my first task',
    completed: false,
    index: 0,
  },
  {
    description: 'This is my second task',
    completed: false,
    index: 1,
  },
  {
    description: 'This is my third task',
    completed: false,
    index: 2,
  },
  {
    description: 'This is my fourth task',
    completed: false,
    index: 3,
  },
];

const render = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    todoList.innerHTML += `
    <li class="list">
        <input id="check" type="checkbox" >
        <input type="text" value="${tasks[i].description}" class="new-task">
    </li>
      `;
  }
};
render();
