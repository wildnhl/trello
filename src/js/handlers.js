import { dataTasks } from './app.js';
import { $, $$ } from './dom';
import * as bootstrap from 'bootstrap';
import { render } from './render.js';
import { getData, setData } from './localstorage.js';

const modalAdd = new bootstrap.Modal('#modal-add', {});
function handleSubmitFormAddElement(event) {
  {
    event.preventDefault();

    const login = {
      place: 'todo',
    };
    const formData = new FormData($('#form-modal-add'));
    formData.append('createAt', new Date());
    formData.append('id', Date.now());
    for (let [key, value] of formData.entries()) {
      login[key] = value;
    }
    dataTasks.push(login);
    modalAdd.hide();
    setData('trello-todos', dataTasks);
    render(dataTasks);
    $('#title-todo').value = '';
    $('#description').value = '';
  }
}

let id = '';
function handleClickEditCard(event) {
  if (event.target.dataset.id === 'btn-edit') {
    id = event.target.closest('.card').id;
    const element = dataTasks.find((item) => item.id === id);
    $('#title-todo-edit').value = element.title;
    $('#description-edit').value = element.description;
  }
}

function handleClickDeleteCard(event) {
  if (event.target.dataset.id === 'btn-delete') {
    id = event.target.closest('.card').id;
    const element = dataTasks.findIndex((item) => item.id === id);
    dataTasks.splice(element, 1);
    setData('trello-todos', dataTasks);
    render(dataTasks);
  }
}

const modalEdit = new bootstrap.Modal('#editModal', {});
function handleClickApplyEditCard() {
  const element = dataTasks.find((item) => item.id === id);
  element.title = $('#title-todo-edit').value;
  element.description = $('#description-edit').value;
  modalEdit.hide();
  setData('trello-todos', dataTasks);
  render(dataTasks);
}

function handleClickDeleteAllDoneCardBtn() {
  setData(
    'trello-todos',
    dataTasks.filter((item) => item.place !== 'done')
  );

  render(getData('trello-todos'));
}

function handleClickSelectElement() {
  if (event.target.dataset.id === 'select-place') {
    const idCard = event.target.closest('.card').id;
    const todo = dataTasks.find((item) => idCard === item.id);
    const inprogress = dataTasks.filter((item) => item.place === 'inprogress');
    if (inprogress.length === 6 && event.target.value === 'inprogress') {
      event.target.value = todo.place;
      alert('More than six in inrogress group');
    } else {
      todo.place = event.target.value;
      setData('trello-todos', dataTasks);
      render(dataTasks);
    }
  }
}

export {
  handleClickDeleteCard,
  handleClickEditCard,
  handleClickApplyEditCard,
  handleSubmitFormAddElement,
  handleClickDeleteAllDoneCardBtn,
  handleClickSelectElement,
};
