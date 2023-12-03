import { $, $$ } from './dom';
import { render } from './render';
import { getData, setData } from './localstorage';
import {
  handleClickDeleteCard,
  handleClickEditCard,
  handleClickApplyEditCard,
  handleClickApplyAddElement,
  handleClickDeleteAllDoneCardBtn,
  handleClickSelectElement,
  handleClickApplyDeleteCard,
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

const btnAddApplyElement = $('#btn-add-apply');
btnAddApplyElement.addEventListener('click', handleClickApplyAddElement);

const cardGroupElements = $$('.card-group');
for (const item of cardGroupElements) {
  item.addEventListener('click', handleClickEditCard);
  item.addEventListener('click', handleClickDeleteCard);
  item.addEventListener('change', handleClickSelectElement);
}

const btnEditApplyElement = $('#apply-edit-btn');
btnEditApplyElement.addEventListener('click', handleClickApplyEditCard);

const btnDeleteCardApplyElement = $('#deleteSpecifCard');
btnDeleteCardApplyElement.addEventListener('click', handleClickApplyDeleteCard);

const deleteAllDoneBtnElement = $('#deleteAllDoneCards');
deleteAllDoneBtnElement.addEventListener(
  'click',
  handleClickDeleteAllDoneCardBtn
);
export { dataTasks };
