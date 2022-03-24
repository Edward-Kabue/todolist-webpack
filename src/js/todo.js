export default class todo {
  constructor(checked = false, description = '') {
    this.checked = checked;
    this.description = description;
    this.list =
      localStorage.getItem('list') !== null
        ? JSON.parse(localStorage.getItem('list'))
        : '';
  }

  localStorage(task = this.list) {
    const storeList = JSON.stringify(task);
    localStorage.setItem('list', storeList);
  }

  static displayList(task) {
    const iterate = ({ index, Tdescription }) => {
      const lItem = `
    <li index="${index}" class="list">
     <div class="checkbox" id="check" >
      <i class="fas fa-stop"></i>
     </div>
     <input type="text" class="input-text" id="${index}" value="${Tdescription}">
     <div class="ellips">
      <i class="fas fa-ellipsis-v"></i>
     </div>
     <label class="trash" for="${index}">
      <i class="fas fa-trash-alt"></i>
     </label>
    </li>`;
      const [ul] = document.getElementsByClassName('todo-list ');
      ul.insertAdjacentHTML('beforeend', lItem);
    };
    task.forEach((element) => {
      iterate(element);
    });
  }

  addTask() {
    if (this.list === '' || this.list.length <= 0) {
      this.list = [
        {
          index: 1,
          Tcompleted: this.checked,
          Tdescription: this.description,
        },
      ];
      this.localStorage();
    } else {
      const task = {
        index: this.list.length + 1,
        Tcompleted: this.checked,
        Tdescription: this.description,
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

  editTask(who, value) {
    this.list[who].Tdescription = value;
    this.localStorage();
  }
}
