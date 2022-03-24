export default class Todo {
  constructor(checked = false, description = '') {
    this.checked = checked;
    this.description = description;
    this.list = localStorage.getItem('list') !== null
      ? JSON.parse(localStorage.getItem('list'))
      : '';
  }

  localStorage(task = this.list) {
    const storeList = JSON.stringify(task);
    localStorage.setItem('list', storeList);
  }

  static displayList(tasks) {
    const iterate = ({ index, desc, checked }) => {
      const todoItem = `
            <li index="${index}" class="list">
                <div class="checkbox" id="check" completed="${checked}" > 
                ${
  checked === false
    ? '<i style="width: 14.15px;" class="fas fa-ellipsis-v"></i>'
    : '<i style="color:blue; border: none" class="fas fa-check"></i>'
} 
                </div>
                <input type="text" style=" text-decoration: ${
  checked === false ? '' : 'line-through'
};"
                 class="input-text" id="${index}" value="${desc}">
                <div class="ellips">
                <i class="fas fa-ellipsis-v"></i>
                </div>
                <label class="trash" for="${index}">
                 <i class="fas fa-trash-alt"></i>
                </label>
            </li>`;
      const [ul] = document.getElementsByClassName('todo-list ');
      const position = 'beforeend';
      ul.insertAdjacentHTML(position, todoItem);
    };
    tasks.forEach((task) => {
      iterate(task);
    });
  }

  addTask() {
    if (this.list === '' || this.list.length <= 0) {
      this.list = [
        {
          index: 1,
          checked: this.checked,
          desc: this.description,
        },
      ];
      this.localStorage();
    } else {
      const task = {
        index: this.list.length + 1,
        checked: this.checked,
        desc: this.description,
      };
      this.list.push(task);
      this.localStorage();
    }
  }

  removeTask(taskId) {
    const Remove = this.list.filter(({ index }) => index !== Number(taskId));
    const update = Remove.map((item) => {
      item.index = Remove.indexOf(item) + 1;
      return item;
    });
    this.localStorage(update);
    const task = document.getElementById(taskId).parentNode;
    task.remove();
  }

  editTask(index, value) {
    if (typeof value === 'string') {
      this.list[index].desc = value;
      this.localStorage();
    } else {
      this.list[index].checked = value;
      this.localStorage();
    }
  }
}
