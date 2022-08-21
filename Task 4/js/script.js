/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

import initHeader from '../../modules/header.js';
import initFooter from '../../modules/footer.js';

const ENDPOINT = 'cars.json';

// Taikomes

const outputEl = document.querySelector('#output');

// Eiga

const rezArr = await getElementEndpoint(ENDPOINT);
createHtml(rezArr);

// addEventListener

//  Funkcijos

async function getElementEndpoint(url) {
    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error(
                `fetch fail klaidos: ${resp.status} ${resp.statusText} trying to fetch ${resp.url}`
            );
        }
        const dataBack = resp.json();
        return dataBack;
    } catch (error) {
        console.warn('klaida send comment ', error.message);
        console.warn('error.stack ', error.stack);
    }
}

function createHtml(arr) {
    arr.forEach((el) => {
        let modelsStr = '';
        el.models.forEach(
            (model, i) =>
            (modelsStr += `<p class="${
          i % 2 === 0 ? 'srollElcolor0' : 'srollElcolor2'
        }">${model}</p>`)
        );

        const itemEl = document.createElement('div');
        itemEl.className = 'item card';
        itemEl.innerHTML += `<p><span><i class="fa fa-car icon" aria-hidden="true"></i></span></p><p class="brand">${el.brand}</p><div class="border"></div><div class="scroll">${modelsStr}</div>`;
        outputEl.append(itemEl);
    });
}