import './style.css';

const todoList = document.querySelector('.todo-list');

const tasks = [
  {
    description: 'Drag  drop to reorder your list',
    completed: false,
    index: 0,
  },
  {
    description: 'Resync to clear out the old',
    completed: false,
    index: 1,
  },
  {
    description: 'Render the list dynamically ',
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
        <input type="text" value="${tasks[i].description}" class="Add">
    </li>
      `;
  }
};
render();
