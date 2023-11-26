function buildTemplateCard({ id, text, description, createdAt }) {
  // let isChecked = '';
  // let background = '';
  // let throughLine = '';

  // if (checked) {
  //   isChecked = 'checked';
  //   background = 'bg-copmlete';
  //   throughLine = 'task-done';
  // }

  return `
    <div class='card bg-success'>
      <h3 class='card__title'>${text}</h3>
      <p class='card__description'>${description}</p>
      <select class='form-select' name='fromto' id='fromto'></select>
      <button id='btn-edit' class='btn btn-primary'>
        Edit
      </button>
      <button id='btn-delete' class='btn btn-danger'>
        Delete
      </button>
    </div>;
    `;
}

export { buildTemplateCard };
