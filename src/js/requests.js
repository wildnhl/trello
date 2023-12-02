import { $, $$ } from './dom';
async function requestUsersList(url) {
  let response = await fetch(url);
  let users = await response.json();
  let html = '';
  users.forEach(({ name }) => {
    html += `<option value="${name}">${name}</option>`;
  });
  const selectPerformerElements = $$('#select-performer');
  for (const iterator of selectPerformerElements) {
    iterator.insertAdjacentHTML('beforeend', html);
  }
}

export { requestUsersList };
