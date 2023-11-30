import { buildTemplateCard } from './template';
import { dataTasks } from './app';
import { $, $$, showAmountTodoCardEveryGroups } from './dom';
function render(array) {
  const cloneDataTasks = structuredClone(array);
  cloneDataTasks.reverse();

  let htmlTodo = '';
  let htmlInProgress = '';
  let htmlDone = '';

  const todoContentElement = $('#todo-content');
  const inprogressContentElement = $('#inprogress-content');
  const doneContentElement = $('#done-content');

  cloneDataTasks.forEach((todo) => {
    if (todo.place === 'todo') {
      const templateTodo = buildTemplateCard(todo);
      htmlTodo += templateTodo;
    } else if (todo.place === 'inprogress') {
      const templateTodo = buildTemplateCard(todo);
      htmlInProgress += templateTodo;
    } else if (todo.place === 'done') {
      const templateTodo = buildTemplateCard(todo);
      htmlDone += templateTodo;
    }
  });

  todoContentElement.innerHTML = htmlTodo;
  inprogressContentElement.innerHTML = htmlInProgress;
  doneContentElement.innerHTML = htmlDone;
  showAmountTodoCardEveryGroups();
}

export { render };
