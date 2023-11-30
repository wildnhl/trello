import * as bootstrap from 'bootstrap';
import { $, $$ } from './dom';
import { render } from './render';
import { getData, setData } from './localstorage';
import {
  handleClickDeleteCard,
  handleClickEditCard,
  handleClickApplyEditCard,
  handleSubmitFormAddElement,
  handleClickDeleteAllDoneCardBtn,
  handleClickSelectElement,
} from './handlers.js';
import { requestUsersList } from './requests.js';
requestUsersList('https://jsonplaceholder.typicode.com/users');

let dataTasks;
if (getData('trello-todos') != null) {
  dataTasks = getData('trello-todos');
  render(dataTasks);
} else {
  dataTasks = [];
}

const formModalAddElement = $('#form-modal-add');
formModalAddElement.addEventListener('submit', handleSubmitFormAddElement);

const cardGroupElements = $$('.card-group');
for (const item of cardGroupElements) {
  item.addEventListener('click', handleClickEditCard);
  item.addEventListener('click', handleClickDeleteCard);
  item.addEventListener('change', handleClickSelectElement);
}

const btnEditApplyElement = $('#apply-edit-btn');
btnEditApplyElement.addEventListener('click', handleClickApplyEditCard);

const deleteAllDoneBtnElement = $('#deleteAllDone');
deleteAllDoneBtnElement.addEventListener(
  'click',
  handleClickDeleteAllDoneCardBtn
);

export { dataTasks };
