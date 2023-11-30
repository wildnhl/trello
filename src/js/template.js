function buildTemplateCard({ id, title, description, createdAt, place }) {
  let selectTodo = '';
  let selectInProgress = '';
  let selectDone = '';
  let background = '';
  // if (checked) {
  //   isChecked = 'checked';
  //   background = 'bg-copmlete';
  //   throughLine = 'task-done';
  // }
  let none = '';
  if (description.trim() === '') {
    none = `style = 'display: none'`;
  }

  if (place === 'todo') {
    selectTodo = 'selected';
    background = 'bg-todo';
  }

  if (place === 'inprogress') {
    selectInProgress = 'selected';
    background = 'bg-inprogress';
  }

  if (place === 'done') {
    selectDone = 'selected';
    background = 'bg-done';
  }

  return `
    <div class="card ${background}" id="${id}">
      <h3 class="card__title">${title}</h3>
      <p class="card__description" ${none}>${description}</p>
      <div class="d-flex gap-4">
        <select class="form-select" name="fromto" data-id="select-place">
          <option value="todo" ${selectTodo}>Todo</option>
          <option value="inprogress" ${selectInProgress}>In progress</option>
          <option value="done" ${selectDone}>Done</option>
        </select>
        <button
          class="btn btn-primary"
          data-id="btn-edit"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
        >
          Edit
        </button>
        <button class="btn btn-danger" data-id="btn-delete">Delete</button>
      </div>
    </div>
    `;
}

export { buildTemplateCard };
