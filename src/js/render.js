import { buildTemplateCard } from './template';
import { dataTasks } from './app';
import { $, $$ } from './dom';
function render(array) {
  const todoContentElement = $('#todo-content');
  let html = '';
  const cloneDataTasks = structuredClone(array);
  cloneDataTasks.reverse();

  cloneDataTasks.forEach((todo) => {
    const templateTodo = buildTemplateCard(todo);
    html += templateTodo;
  });

  todoContentElement.innerHTML = html;
}

export { render };
