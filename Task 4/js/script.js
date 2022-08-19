/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
import initHeader from './modules/header.js';
import initFooter from './modules/footer.js';

// Taikomes

const outputEl = document.querySelector('#output');

// Eiga

const rezArr = await getElementEndpoint(ENDPOINT);
createHtml(rezArr);
console.log(rezArr);

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
        el.models.forEach((model) => (modelsStr += `<p>${model}</p>`));

        const itemEl = document.createElement('div');
        itemEl.className = 'item card';
        itemEl.innerHTML += `<p><span>Brand:</span> ${el.brand}</p><div>${modelsStr}</div>`;
        console.log(itemEl);
        outputEl.append(itemEl);
    });
}