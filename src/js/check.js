import Todo from './todo.js';

export const checkBox = (item) => {
  const isChecked = item.getAttribute('completed');
  const task = new Todo();
  if (isChecked === 'false') {
    item.innerHTML =
      '<i style="color:blue; border: none" class="fas fa-check"></i>';
    item.nextElementSibling.style.textDecoration = 'line-through';
    const index = Number(item.parentNode.getAttribute('index'));
    task.editTask(index - 1, true);
    item.setAttribute('completed', 'true');
  } else {
    item.innerHTML = '<i class="fas fa-stop"></i>';
    item.nextElementSibling.style.textDecoration = '';
    const index = Number(item.parentNode.getAttribute('index'));
    task.editTask(index - 1, false);
    item.setAttribute('completed', 'false');
  }
};

export const clearAll = () => {
  const check = document.querySelectorAll('.checkbox');
  const task = new Todo();
  const RemoveAll = task.list.filter(({ checked }) => checked === false);
  const UpdateTask = RemoveAll.map((item) => {
    item.index = RemoveAll.indexOf(item) + 1;
    return item;
  });
  task.localStorage(UpdateTask);
  check.forEach((element) => {
    if (element.getAttribute('completed') === 'true') {
      element.parentNode.remove();
    }
  });
};
