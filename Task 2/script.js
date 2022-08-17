/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// Nusitaikom

const stateEl = document.querySelector('#btn__state');
const btnEl = document.querySelector('#btn__element');

let state = 1;

btnEl.addEventListener('click', () => {
    stateEl.textContent = state++;
});

//  Kitas variantas veikiantis

// document
//     .querySelector('#btn__element')
//     .addEventListener(
//         'click',
//         () => (document.querySelector('#btn__state').textContent = state++)
//     );