import { dataTasks } from './app.js';
import { $, $$ } from './dom';
import Modal from 'bootstrap/js/dist/modal';
import { render } from './render.js';
import { getData, setData } from './localstorage.js';
import { Card } from './cardClass.js';

let idEvent;

function handleClickApplyAddElement() {
  const titleAddField = $('#title-todo');
  const descriptionAddField = $('#description');
  const performerAddField = $('.select-performer');

  const card = new Card(
    titleAddField.value,
    descriptionAddField.value,
    performerAddField.value
  );

  dataTasks.push(card);
  render(dataTasks);
  setData('trello-todos', dataTasks);

  titleAddField.value = '';
  descriptionAddField.value = '';
  performerAddField.value = '';
}

// clear fileds when modal add card was cancel
function handleClickCancelAddCard() {
  $('#title-todo').value = '';
  $('#description').value = '';
  $('.select-performer').value = '';
}

// click btn to open modal edit specific card
function handleClickEditCard(event) {
  if (event.target.dataset.id === 'btn-edit') {
    idEvent = event.target.closest('.card').id;
    const element = dataTasks.find((item) => item.id == idEvent);
    $('#title-todo-edit').value = element.title;
    $('#description-edit').value = element.description;
    $('.select-edit').value = element.performer;
  }
}

// accept edited card changes
function handleClickApplyEditCard() {
  const element = dataTasks.find((item) => item.id == idEvent);
  element.title = $('#title-todo-edit').value;
  element.description = $('#description-edit').value;
  element.performer = $('.select-edit').value;
  render(dataTasks);
  setData('trello-todos', dataTasks);
}

// click btn to open modal accept delete specific card

function handleClickDeleteCard(event) {
  if (event.target.dataset.id === 'btn-delete') {
    idEvent = event.target.closest('.card').id;
  }
}

// accept delete specific card
function handleClickApplyDeleteCard() {
  const element = dataTasks.findIndex((item) => item.id == idEvent);
  dataTasks.splice(element, 1);
  render(dataTasks);
  setData('trello-todos', dataTasks);
}

// btn accept delete all card
function handleClickDeleteAllDoneCardBtn() {
  const filterData = dataTasks.filter((item) => item.place !== 'done');
  dataTasks.splice(0, dataTasks.length);
  dataTasks.push(...filterData);
  render(dataTasks);
  setData('trello-todos', dataTasks);
}

// toggle card group
function handleClickSelectElement(event) {
  if (event.target.dataset.id === 'select-place') {
    const idCard = event.target.closest('.card').id;
    const todo = dataTasks.find((item) => idCard == item.id);
    const inprogress = dataTasks.filter((item) => item.place === 'inprogress');

    if (event.target.value === 'inprogress' && inprogress.length === 6) {
      event.target.value = todo.place;
      new Modal($('#tooMuchProgressModal')).show();
    } else {
      todo.place = event.target.value;
      render(dataTasks);
      setData('trello-todos', dataTasks);
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
  handleClickCancelAddCard,
};
