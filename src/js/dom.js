import { getData } from './localstorage';
function $(element) {
  return document.querySelector(element);
}
function $$(element) {
  return document.querySelectorAll(element);
}

function showAmountTodoCardEveryGroups() {
  const allTodos = getData('trello-todos');
  const todo = allTodos.filter((item) => item.place === 'todo').length;
  const inprogress = allTodos.filter(
    (item) => item.place === 'inprogress'
  ).length;
  const done = allTodos.filter((item) => item.place === 'done').length;
  $('#todo-count').textContent = todo;
  $('#inprogress-count').textContent = inprogress;
  $('#done-count').textContent = done;
}

function showClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  $('.clock').textContent = `${hours}:${minutes}:${seconds}`;
}
export { $, $$, showAmountTodoCardEveryGroups, showClock };
