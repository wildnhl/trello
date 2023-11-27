import * as bootstrap from 'bootstrap';
import { $, $$ } from './dom';
import { render } from './render';

const dataTasks = [];

const formModalAddElement = $('#form-modal-add');
const modalAdd = new bootstrap.Modal('#modal-add', {});

formModalAddElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const login = {
    place: 'todo',
  };
  const formData = new FormData(formModalAddElement);
  formData.append('createAt', new Date());
  formData.append('id', Date.now());

  for (let [key, value] of formData.entries()) {
    login[key] = value;
  }
  dataTasks.push(login);
  modalAdd.hide();
  console.log(login);
  console.log(dataTasks);
  render(dataTasks);
});

let id = '';
function handleClickEditCard(event) {
  if (event.target.dataset.id === 'btn-edit') {
    const parent = event.target.parentElement;
    id = parent.id;
    console.log(id);
    const element = dataTasks.find((item) => item.id === id);
    $('#title-todo-edit').value = element.title;
    $('#description-edit').value = element.description;
    $('#select-place').value = element.place;
  }
}

const cardGroupElements = $$('.card-group');
for (const item of cardGroupElements) {
  item.addEventListener('click', handleClickEditCard);
}

const modalEdit = new bootstrap.Modal('#editModal', {});
const btnEditApplyElement = $('#apply-edit-btn');
function handleClickApplyEditCard() {
  const element = dataTasks.find((item) => item.id === id);
  element.title = $('#title-todo-edit').value;
  element.description = $('#description-edit').value;
  element.place = $('#select-place').value;
  modalEdit.hide();
  render(dataTasks);
}

btnEditApplyElement.addEventListener('click', handleClickApplyEditCard);

export { dataTasks };
