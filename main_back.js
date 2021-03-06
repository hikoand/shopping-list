// ๐คทโโ๏ธ ๊ฐ์ 
// ์ด๋ฒคํธ๋ฆฌ์ค๋๊ฐ ํญ๋ชฉ๋ง๋ค ์์ -> ์ด๋ฒคํธ ์์
// ํด๋ฆญ์ด๋ฒคํธ๋ฅผ ๋ถ๋ชจ์์์ธ items์๋ง ๋ฑ๋กํ ๋ค,
// ์ฐ๋ ๊ธฐํต ์์ด์ฝ์ด ํด๋ฆญ๋์์ ๋ ํด๋น Item์ ์ฐพ์ ์ญ์ ํ๋ค.

// item ๋ง๋ค ๊ณ ์ ํ id๋ฅผ ์ง์ ํ์ฌ ํ ๋น
// ( ๊ธ๋ก๋ฒ integer์ ์ด์ฉํด id ์์ฑ )
// ์ฐ๋ ๊ธฐํต ์์ด์ฝ์  id๋ฅผ ๊ธฐ์ตํ๊ฒ ํ๋ค.
// ์์ด์ฝ์ด ํด๋ฆญ๋๋ฉด ํ ๋น๋์ด์ง Id์ ์ด์ฉํ์ฌ ํด๋น item์ ์ฐพ์์ ์ญ์ ํ๋ค.

const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

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
  let id = 0; //์ค๋ฌด์์  UUID ํน์ ํด์ฌ์ฝ๋๋ฅผ ์ฌ์ฉํ๋ ๊ฒ์ ์ถ์ฒ
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

// formํ๊ทธ ์ถ๊ฐ
// addBtn.addEventListener('click', () => {
//   onAdd();
// });

// // kepress๋ Deprecated ์์ 
// // keydown(ํค๋ณด๋๋ฅผ ๋๋ฅธ ์๊ฐ ์ด๋ฒคํธ ๋ฐ์),
// // keyup ์ผ๋ก ๋์ฒด (ํค๋ณด๋๋ฅผ ๋๋ฅด๋ค๊ฐ ๋ ์๊ฐ ์ด๋ฒคํธ ๋ฐ์)

// // input.addEventListener('keypress', (event) => {
// //   if (event.key === 'Enter') {
// //     onAdd();
// //   }
// // });

// input.addEventListener('keydown', (event) => {
//   // keyup์ด ๋๊ธฐ ์ ์ ์ด๋ฒคํธ ๋ฐ์ -> ์ทจ์ X
//   // if (event.key === 'a') {
//   //   event.preventDefault();
//   // }

//   // ๊ธ์๊ฐ ๋ง๋ค์ด์ง๋ ๋์ค ์ด๋ฒคํธ๋ฅผ ๋ฌด์ (ํ๊ธ ๋ฑ)
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// });

// ์ด๋ฒคํธ ์์
items.addEventListener('click', (event) => {
  // nodeName์ ๊ฒฝ์ฐ ๋ค๋ฅธ icon์ด ์์ ์ ์์
  // if (event.target.nodeName === 'I') {
  //   console.log('he');
  // }

  //dataset์ ์ด์ฉ
  const id = event.target.dataset.id;
  if (id) {
    // id ๋ก ์ํ๋ ์์๋ฅผ ์ฐพ๋๋ค.
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    // ์ญ์ ํ๋ค
    toBeDeleted.remove();
  }
});
