import { buildTemplateCard } from './template';
import { $, $$, showAmountTodoCardEveryGroups } from './dom';
function render(array) {
  const cloneDataTasks = structuredClone(array).reverse();

  let htmlTodo = '';
  let htmlInProgress = '';
  let htmlDone = '';

  cloneDataTasks.forEach((todo) => {
    if (todo.place === 'todo') {
      htmlTodo += buildTemplateCard(todo);
    } else if (todo.place === 'inprogress') {
      htmlInProgress += buildTemplateCard(todo);
    } else if (todo.place === 'done') {
      htmlDone += buildTemplateCard(todo);
    }
  });

  $('#todo-content').innerHTML = htmlTodo;
  $('#inprogress-content').innerHTML = htmlInProgress;
  $('#done-content').innerHTML = htmlDone;

  showAmountTodoCardEveryGroups();
}

export { render };
