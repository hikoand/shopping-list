// 🤷‍♀️ 개선
// 이벤트리스너가 항목마다 있음 -> 이벤트 위임
// 클릭이벤트를 부모요소인 items에만 등록한 뒤,
// 쓰레기통 아이콘이 클릭되었을 때 해당 Item을 찾아 삭제한다.

// item 마다 고유한 id를 지정하여 할당
// ( 글로벌 integer을 이용해 id 생성 )
// 쓰레기통 아이콘애 id를 기억하게 한다.
// 아이콘이 클릭되면 할당되어진 Id을 이용하여 해당 item을 찾아서 삭제한다.

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
  let id = 0; //실무에선 UUID 혹은 해쉬코드를 사용하는 것을 추천
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
          <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
              <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
          </div>
          <div class="item__divider"></div>
  `;
  id++;
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

// 이벤트 위임
items.addEventListener('click', (event) => {
  // nodeName의 경우 다른 icon이 있을 수 있음
  // if (event.target.nodeName === 'I') {
  //   console.log('he');
  // }

  //dataset을 이용
  const id = event.target.dataset.id;
  if (id) {
    // id 로 원하는 요소를 찾는다.
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    // 삭제한다
    toBeDeleted.remove();
  }
});
