function buildTemplateCard({
  id,
  title,
  description,
  createdAt,
  place,
  performer,
}) {
  let selectTodo = '',
    selectInProgress = '',
    selectDone = '',
    background = '',
    noneDesc = '',
    noneTitle = '',
    nonePerform = '';

  noneDesc = description === '' ? 'style = "display: none"' : '';
  noneTitle = title === '' ? 'style = "display: none"' : '';
  nonePerform = performer === '' ? 'style = "display: none"' : '';

  switch (place) {
    case 'todo':
      selectTodo = 'selected';
      background = 'bg-todo';
      break;
    case 'inprogress':
      selectInProgress = 'selected';
      background = 'bg-inprogress';
      break;
    case 'done':
      selectDone = 'selected';
      background = 'bg-done';
      break;
  }

  return `
    <div class="card ${background} d-flex gap-2 flex-column p-1" id="${id}">
      <h3 class="card__title" ${noneTitle}>${title}</h3>
      <p class="card__description" ${noneDesc}>${description}</p>
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
        <h3 class="card-date" ${nonePerform}>Person: ${performer}</h3>
        <h3 class="card-date ms-auto">${createdAt}</h3>
      </div>
    </div>
    `;
}
export { buildTemplateCard };
