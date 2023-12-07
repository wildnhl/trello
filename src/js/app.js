import { $, $$, showRealTime } from './dom';
import { render } from './render';
import { getData, setData } from './localstorage';
import {
  handleClickDeleteCard,
  handleClickEditCard,
  handleSubmitApplyEditCard,
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

showRealTime();
setInterval(showRealTime, 1000);

const formModalAdd = $('#formModalAdd');
formModalAdd.addEventListener('submit', handleSumbitApplyAddElement);

const formModalEdit = $('#formModalEdit');
formModalEdit.addEventListener('submit', handleSubmitApplyEditCard);

const btnsCancelAddElements = $$('.modal-add-close');
for (const item of btnsCancelAddElements) {
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

export { dataTasks };
