function buildTemplateCard({
  id,
  title,
  description,
  createdAt,
  place,
  performer,
}) {
  let selectTodo = '';
  let selectInProgress = '';
  let selectDone = '';
  let background = '';
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
    <div class="card ${background} d-flex gap-2 flex-column p-1" id="${id}">
      <h3 class="card__title">${title}</h3>
      <p class="card__description" ${none}>${description}</p>
      <div class="d-flex gap-2">
      <select class="form-select" name="fromto" data-id="select-place">
      <option value="todo" ${selectTodo}>Todo</option>
      <option value="inprogress" ${selectInProgress}>In progress</option>
      <option value="done" ${selectDone}>Done</option>
      </select>
        <button
          class="btn btn-primary btn-sm"
          type="button"
          data-id="btn-edit"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
        >
          Edit
        </button>
        <button class="btn btn-danger btn-sm" data-id="btn-delete" data-bs-toggle="modal"
              data-bs-target="#deleteSpecModal">Delete</button>
      </div>
      <div class="d-flex justify-content-between gap-2">
        <h3 class="card-date">Person: ${performer}</h3>
        <h3 class="card-date">${createdAt}</h3>
      </div>
    </div>
    `;
}
export { buildTemplateCard };
