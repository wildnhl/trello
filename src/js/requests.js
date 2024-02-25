import { $, $$ } from './dom';
async function requestUsersList(url) {
  const response = await fetch(url);
  const users = await response.json();
  let html = '';
  users.forEach(({ name }) => {
    html += `<option value="${name}">${name}</option>`;
  });
  const selectPerformerElements = $$('.select-performer');
  for (const iterator of selectPerformerElements) {
    iterator.insertAdjacentHTML('beforeend', html);
  }
}

export { requestUsersList };
