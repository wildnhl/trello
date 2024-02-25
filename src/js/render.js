import { buildTemplateCard } from './template';
import { $, $$, showAmountTodoCardEveryGroups } from './dom';
function render(array) {
  const cloneDataTasks = structuredClone(array).reverse();

  let htmlTodo = '';
  let htmlInProgress = '';
  let htmlDone = '';

  cloneDataTasks.forEach((todo) => {
    switch (todo.place) {
      case 'todo':
        htmlTodo += buildTemplateCard(todo);
        break;
      case 'inprogress':
        htmlInProgress += buildTemplateCard(todo);
        break;
      case 'done':
        htmlDone += buildTemplateCard(todo);
        break;
    }
  });

  $('#todo-content').innerHTML = htmlTodo;
  $('#inprogress-content').innerHTML = htmlInProgress;
  $('#done-content').innerHTML = htmlDone;

  showAmountTodoCardEveryGroups(cloneDataTasks);
}

export { render };
