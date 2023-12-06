function $(element) {
  return document.querySelector(element);
}
function $$(element) {
  return document.querySelectorAll(element);
}

function showAmountTodoCardEveryGroups(array) {
  const todo = array.filter((item) => item.place === 'todo');
  const inprogress = array.filter((item) => item.place === 'inprogress');
  const done = array.filter((item) => item.place === 'done');
  $('#todo-count').textContent = todo.length;
  $('#inprogress-count').textContent = inprogress.length;
  $('#done-count').textContent = done.length;
}

function showClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  $('.clock').textContent = `${hours}:${minutes}:${seconds}`;
}
export { $, $$, showAmountTodoCardEveryGroups, showClock };
