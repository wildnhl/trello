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
  const hours = now.getHours() + '';
  const minutes = now.getMinutes() + '';
  const seconds = now.getSeconds() + '';
  $('.clock').textContent = `${hours.padStart(2, '0')}:${minutes.padStart(
    2,
    '0'
  )}:${seconds.padStart(2, '0')}`;
}
export { $, $$, showAmountTodoCardEveryGroups, showClock };
