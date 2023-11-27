function buildTemplateCard({ id, title, description, createdAt }) {
  // let isChecked = '';
  // let background = '';
  // let throughLine = '';

  // if (checked) {
  //   isChecked = 'checked';
  //   background = 'bg-copmlete';
  //   throughLine = 'task-done';
  // }
  let none = '';
  if (description.trim() === '') {
    none = `style = 'display: none'`;
  }

  return `
    <div class='card bg-success' id=${id}>
      <h3 class='card__title'>${title}</h3>
      <p class='card__description' ${none} >${description}</p>
      <button class='btn btn-primary' data-id='btn-edit'
      data-bs-toggle="modal" data-bs-target="#editModal">
        Edit
      </button>
      <button class='btn btn-danger' data-id='btn-delete'>
        Delete
      </button>
    </div>
    `;
}

export { buildTemplateCard };
