import { dataTasks } from './app.js';
import { $, $$ } from './dom';
import * as bootstrap from 'bootstrap';
import { render } from './render.js';
import { getData, setData } from './localstorage.js';
import { Card } from './cardClass.js';

const modalAdd = new bootstrap.Modal('#modal-add', {});
function handleClickApplyAddElement() {
  const titleAddField = $('#title-todo');
  const descriptionAddField = $('#description');
  const performerAddField = $('.select-performer');

  const card = new Card(
    titleAddField.value,
    descriptionAddField.value,
    performerAddField.value
  );

  if (card.performer === '' || card.title.trim() === '') {
    alert('Need to choose title and performer');
  } else {
    modalAdd.hide();
    dataTasks.push(card);
    setData('trello-todos', dataTasks);
    render(dataTasks);

    titleAddField.value = '';
    descriptionAddField.value = '';
    performerAddField.value = '';
  }
}

let id = '';
function handleClickEditCard(event) {
  if (event.target.dataset.id === 'btn-edit') {
    id = event.target.closest('.card').id;
    const element = dataTasks.find((item) => item.id == id);
    $('#title-todo-edit').value = element.title;
    $('#description-edit').value = element.description;
    $('.select-edit').value = element.performer;
  }
}

const editModal = new bootstrap.Modal('#editModal', {});
function handleClickApplyEditCard() {
  const element = dataTasks.find((item) => item.id == id);
  const titleEdit = $('#title-todo-edit');
  const selectEdit = $('.select-edit');
  const descriptionEdit = $('#description-edit');

  if (titleEdit.value.trim() === '' || selectEdit.value === '') {
    alert('Need to choose title and performer');
  } else {
    editModal.hide();
    element.title = titleEdit.value;
    element.description = descriptionEdit.value;
    element.performer = selectEdit.value;
    setData('trello-todos', dataTasks);
    render(dataTasks);
  }
}

function handleClickDeleteCard(event) {
  if (event.target.dataset.id === 'btn-delete') {
    id = event.target.closest('.card').id;
  }
}

function handleClickApplyDeleteCard() {
  const element = dataTasks.findIndex((item) => item.id == id);
  dataTasks.splice(element, 1);
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

function handleClickSelectElement(event) {
  if (event.target.dataset.id === 'select-place') {
    const idCard = event.target.closest('.card').id;
    const todo = dataTasks.find((item) => idCard == item.id);
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
  handleClickApplyAddElement,
  handleClickDeleteAllDoneCardBtn,
  handleClickSelectElement,
  handleClickApplyDeleteCard,
};
