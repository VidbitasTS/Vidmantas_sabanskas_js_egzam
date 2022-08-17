/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Taikomes
const formEl = document.forms[0];
const outEl = document.querySelector('#output');
const kgEl = document.querySelector('#search');
const alertEl = document.querySelector('#alert');

// addEventListner

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    outEl.style.display = 'none';
    if (!kgEl.value) {
        alertText(alertEl);
        return;
    }
    outEl.style.display = 'inline-block';

    const lb = kgEl.value * 2.2046;
    const gr = kgEl.value / 0.001;
    const oz = kgEl.value * 35.274;
    createOutputHtml(lb, gr, oz);
});

// Funkcijos

function createOutputHtml(lb, gr, oz) {
    outEl.innerHTML = `<p><span>Svarai:</span> ${lb}</p><p><span>Gramai:</span> ${gr}</p><p><span>Uncijos:</span> ${oz}</p>`;
}

function alertText(element) {
    element.textContent = 'Neivedėt duomenų !!!';
    setTimeout(() => {
        element.textContent = '';
    }, 2000);
}