
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data on local Storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}
export function renderListWithTemplate(
  template,
  parentElement,
  list,
  callback,
  callbackTwo
) {
  let filterArray = [''];
  list.forEach((element) => {
    let exists = false;
    filterArray.forEach((i) => {
      exists = callbackTwo(i, element, exists, filterArray);
    });
    if (exists) {
      exists = false;
    } else {
      const clone = template.content.cloneNode(true);
      const preparedClone = callback(clone, element);
      parentElement.appendChild(preparedClone);
    }
  });
}

export async function renderWithTemplate(
  template,
  parentElement,
  data,
  callback
) {
  await template;
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parentElement.appendChild(clone);
}

export async function loadTemplate(path) {
  const templateData = await fetch(path).then((response) => response.text());
  let newTemplate = document.createElement('template');
  newTemplate.innerHTML = templateData;
  return newTemplate;
}
export async function loadHeaderFooter(header, footer) {
  let headerTemplate = await loadTemplate('../partials/header.html');
  let footerTemplate = await loadTemplate('../partials/footer.html');
  let headerElement = document.querySelector(header);
  let footerElement = document.querySelector(footer);
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

export function alertMessage(message, scroll = true) {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.innerHTML = `<p>${message} <span>X</span></p>`;

  alert.addEventListener('click', function (e) {
    if (e.target.tagName == 'SPAN') {
      main.removeChild(this);
    }
  });
  const main = document.querySelector('main');
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}

export function removeAlerts() {
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach((alert) => document.querySelector('main').removeChild(alert));
}
