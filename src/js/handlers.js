import { dataTasks } from './app.js';
import { $, $$ } from './dom';
import Modal from 'bootstrap/js/dist/modal';
import { render } from './render.js';
import { getData, setData } from './localstorage.js';
import { Card } from './cardClass.js';

const modalAdd = new Modal($('#modal-add'));
function handleSumbitApplyAddElement(event) {
  event.preventDefault();

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
  modalAdd.hide();

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

let idCardEvent;
// click btn to open modal edit specific card
function handleClickEditCard(event) {
  if (event.target.dataset.id === 'btn-edit') {
    idCardEvent = event.target.closest('.card').id;
    const card = dataTasks.find((item) => item.id == idCardEvent);
    $('#title-todo-edit').value = card.title;
    $('#description-edit').value = card.description;
    $('.select-edit').value = card.performer;
  }
}

// accept edited card changes
const modalEdit = new Modal($('#editModal'));
function handleSubmitApplyEditCard(event) {
  event.preventDefault();
  const card = dataTasks.find((item) => item.id == idCardEvent);
  card.title = $('#title-todo-edit').value;
  card.description = $('#description-edit').value;
  card.performer = $('.select-edit').value;
  render(dataTasks);
  setData('trello-todos', dataTasks);
  modalEdit.hide();
}

// click btn to open modal accept delete specific card

function handleClickDeleteCard(event) {
  if (event.target.dataset.id === 'btn-delete') {
    idCardEvent = event.target.closest('.card').id;
  }
}

// accept delete specific card
function handleClickApplyDeleteCard() {
  const card = dataTasks.findIndex((item) => item.id == idCardEvent);
  dataTasks.splice(card, 1);
  render(dataTasks);
  setData('trello-todos', dataTasks);
}

// btn accept delete all card
function handleClickDeleteAllDoneCardBtn() {
  const noDoneArray = dataTasks.filter((item) => item.place !== 'done');
  dataTasks.length = 0;
  dataTasks.push(...noDoneArray);
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
  handleSubmitApplyEditCard,
  handleSumbitApplyAddElement,
  handleClickDeleteAllDoneCardBtn,
  handleClickSelectElement,
  handleClickApplyDeleteCard,
  handleClickCancelAddCard,
};
