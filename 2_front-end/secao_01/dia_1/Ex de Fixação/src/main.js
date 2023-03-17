import nanoid from 'nanoid';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button')
const displayPasswordEl = document.querySelector('h2')

passwordBtnEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid()
});

displayPasswordEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});
