// 🤷‍♀️ 개선
// 이벤트리스너가 항목마다 있음 -> 이벤트 위임

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  console.log(text);

  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);

  items.appendChild(item);

  item.scrollIntoView({ block: 'center' });

  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;
  console.log(text);

  const deletBtn = document.createElement('button');
  deletBtn.setAttribute('class', 'item__delete');
  deletBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deletBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deletBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
