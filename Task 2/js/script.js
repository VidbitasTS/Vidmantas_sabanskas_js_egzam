/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

import initHeader from './modules/header.js';
import initFooter from './modules/footer.js';

// Nusitaikom

const stateEl = document.querySelector('#btn__state');
const btnEl = document.querySelector('#btn__element');

let state = 1;

btnEl.addEventListener('click', () => {
    stateEl.textContent = state++;
});

//  Kitas variantas viena eilute

// document
//     .querySelector('#btn__element')
//     .addEventListener(
//         'click',
//         () => (document.querySelector('#btn__state').textContent = state++)
//     );