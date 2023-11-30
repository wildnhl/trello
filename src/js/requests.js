import { $ } from './dom';
async function requestUsersList(url) {
  let response = await fetch(url);
  let users = await response.json();
  let html = '';
  users.forEach(({ name }) => {
    html += `<option value="${name}">${name}</option>`;
  });
  $('#select-performer').insertAdjacentHTML('beforeend', html);
}

export { requestUsersList };
