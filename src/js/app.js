import * as bootstrap from 'bootstrap';
import { $, $$ } from './dom';
import { render } from './render';

const dataTasks = [];

const formModalAddElement = $('#form-modal-add');
const myModal = new bootstrap.Modal('#staticBackdrop', {});
formModalAddElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const login = {};
  const formData = new FormData(formModalAddElement);
  formData.append('createAt', new Date());
  formData.append('id', Date.now());

  for (let [key, value] of formData.entries()) {
    login[key] = value;
  }
  dataTasks.push(login);
  myModal.hide();
  console.log(login);
  console.log(dataTasks);
  render(dataTasks);
});

export { dataTasks };
