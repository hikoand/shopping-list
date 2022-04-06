// 1. input 텍스트 타이핑 기능
// 2. 아이템추가 : + 버튼 / enter키
// 3. 추가된 아이템은 쓰레기통 버튼으로 삭제기능

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// 이벤트를 처리하는 함수는 on 을 붙인다.
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  console.log(text);

  // 텍스트가 비었다면 아무것도 추가하지 말고 나가버린다.
  if (text === '') {
    // 다시 인풋에 포커스에 주지 않으면 포커스는 버튼으로 이동함
    input.focus();
    return;
  }

  // 2. 새로운 아이템을 만든다. (받아온 텍스트 + 삭제 버튼)
  const item = createItem(text);

  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);

  // 4. 새로 추가된 아이템으로 스크롤링한다.
  item.scrollIntoView({ block: 'center' });

  // 5. 인풋을 초기화 한다.
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
  deletBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; //<i> 는 변경되지 않아서 수동으로 넣어줌
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

// 버튼을 누르면 클릭이벤트가 일어나서, onAdd()함수가 호출된다.
addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
