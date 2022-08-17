/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formEl = document.forms[0];
const outEl = document.querySelector('#output');
const kgEl = document.querySelector('#search');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const lb = kgEl.value * 2.2046;
    const gr = kgEl.value / 0.001;
    const oz = kgEl.value * 35.274;

    console.log(lb, gr, oz);

    outEl.innerHTML = `<p><span>Svarai:</span> ${lb}</p><p><span>Gramai:</span> ${gr}</p><span>Uncijos:</span> ${oz}</p>`;
});