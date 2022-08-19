/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

import initHeader from './modules/header.js';
import initFooter from './modules/footer.js';

// Taikomes
const formEl = document.forms[0];
const outEl = document.querySelector('#output');
const kgEl = document.querySelector('#search');
const alertEl = document.querySelector('#alert');
const styleEl = document.querySelector('#style');
console.log(styleEl);
// addEventListner

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    outEl.style.display = 'none';
    const val = kgEl.value;
    if (isNaN(parseFloat(val)) || parseFloat(val) <= 0) {
        alertText(alertEl);
        return;
    }
    outEl.style.display = 'inline-block';
    const lb = val * 2.2046;
    const gr = val / 0.001;
    const oz = val * 35.274;
    createOutputHtml(lb, gr, oz);
});

styleEl.addEventListener('click', () => {
    alert('ok');
});

// Funkcijos

function createOutputHtml(lb, gr, oz) {
    outEl.innerHTML = `<p><span>Svarai:</span> ${lb}</p><p><span>Gramai:</span> ${gr}</p><p><span>Uncijos:</span> ${oz}</p>`;
}

function alertText(element) {
    element.textContent =
        'Neivedėt duomenų arba neteisingo formato, arba ne skačius, arba <= 0 !!!';
    setTimeout(() => {
        element.textContent = '';
    }, 3000);
}