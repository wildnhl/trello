import { $, $$, showClock } from './dom';
import { render } from './render';
import { getData, setData } from './localstorage';
import {
  handleClickDeleteCard,
  handleClickEditCard,
  handleClickApplyEditCard,
  handleSumbitApplyAddElement,
  handleClickDeleteAllDoneCardBtn,
  handleClickSelectElement,
  handleClickApplyDeleteCard,
  handleClickCancelAddCard,
} from './handlers.js';
import { requestUsersList } from './requests.js';

let dataTasks;
if (getData('trello-todos') != null) {
  dataTasks = getData('trello-todos');
  render(dataTasks);
} else {
  dataTasks = [];
}

requestUsersList('https://jsonplaceholder.typicode.com/users');

const formModalAdd = $('#form-modal-add');
formModalAdd.addEventListener('submit', handleSumbitApplyAddElement);

const formModalEdit = $('#formModalEdit');
formModalEdit.addEventListener('submit', handleClickApplyEditCard);

const btnsCancelAddElemens = $$('.modal-add-close');
for (const item of btnsCancelAddElemens) {
  item.addEventListener('click', handleClickCancelAddCard);
}

const cardGroupElements = $$('.card-group');
for (const item of cardGroupElements) {
  item.addEventListener('click', handleClickEditCard);
  item.addEventListener('click', handleClickDeleteCard);
  item.addEventListener('change', handleClickSelectElement);
}

const btnDeleteCardApplyElement = $('#deleteSpecifCard');
btnDeleteCardApplyElement.addEventListener('click', handleClickApplyDeleteCard);

const deleteAllDoneBtnElement = $('#deleteAllDoneCards');
deleteAllDoneBtnElement.addEventListener(
  'click',
  handleClickDeleteAllDoneCardBtn
);

showClock();
setInterval(showClock, 1000);

export { dataTasks };
