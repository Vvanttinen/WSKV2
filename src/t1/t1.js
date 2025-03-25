// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
function main() {
  const list = document.getElementById('list');

  todoList.forEach(task => {
    list.insertAdjacentHTML('beforeend',
      `<li>
              <input type='checkbox' id='${task.id}' ${task.completed ? 'checked' : ''}>
              <label for="${task.id}">${task.task}</label>
             </li>`);
  });
}

main();
