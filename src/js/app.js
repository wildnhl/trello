import * as bootstrap from 'bootstrap';
import { $, $$ } from './dom';
import { render } from './render';
import { getData, setData } from './localstorage';

let dataTasks;
if (getData('trello-todos') != null) {
  dataTasks = getData('trello-todos');
  render(dataTasks);
} else {
  dataTasks = [];
}

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
  render(dataTasks);
});

let id = '';
function handleClickEditCard(event) {
  if (event.target.dataset.id === 'btn-edit') {
    const parent = event.target.parentElement;
    id = parent.id;
    const element = dataTasks.find((item) => item.id === id);
    $('#title-todo-edit').value = element.title;
    $('#description-edit').value = element.description;
    $('#select-place').value = element.place;
  }
}

function handleClickDeleteCard(event) {
  if (event.target.dataset.id === 'btn-delete') {
    const parent = event.target.parentElement;
    id = parent.id;
    const element = dataTasks.findIndex((item) => item.id === id);
    dataTasks.splice(element, 1);
    render(dataTasks);
  }
}

const cardGroupElements = $$('.card-group');
for (const item of cardGroupElements) {
  item.addEventListener('click', handleClickEditCard);
  item.addEventListener('click', handleClickDeleteCard);
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

const deleteAllDoneBtnElement = $('#deleteAllDone');

function handleClickDeleteAllDoneCardBtn() {
  dataTasks = dataTasks.filter((item) => item.place !== 'done');
  render(dataTasks);
}

deleteAllDoneBtnElement.addEventListener(
  'click',
  handleClickDeleteAllDoneCardBtn
);

window.addEventListener('beforeunload', function () {
  setData('trello-todos', dataTasks);
});
export { dataTasks };
