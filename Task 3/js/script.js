/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

import initHeader from '../../modules/header.js';
import initFooter from '../../modules/footer.js';

const ENDPOINT = 'https://api.github.com/users';

// Taikomes

const btnEl = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

// addEvenListener

btnEl.addEventListener('click', async() => {
    document.querySelector('#message').style.display = 'none';
    const elArr = await getElementEndpoint(ENDPOINT);
    createHtml(elArr);
});

// Funkcijos

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
    arr.forEach((el, i) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'item card';
        itemEl.innerHTML += `<p>${
      i + 1
    }. <a href="#"><span><i class="fa fa-info-circle icon" aria-hidden="true" data-cardNumber=${
      i + 1
    }></i></span></a>
    </p><img id="icon-${i + 1}" class="img" src="${
      el.avatar_url
    }"></img><div class="hide info-text-${i + 1}"><p>Papildoma info ${
      el.login
    }</p></div><div id="login"><p>${el.login}</p></div>`;

        outputEl.append(itemEl);
    });

    const iconsEventArr = document.querySelectorAll('.icon');
    iconsEventArr.forEach((tag) => tag.addEventListener('click', clickIcon));
}

function clickIcon(e) {
    console.log(e);
    const iconEl = document.querySelector(`#icon-${e.target.dataset.cardnumber}`);
    const infoEl = document.querySelector(
        `.info-text-${e.target.dataset.cardnumber}`
    );

    const hidEl = document.querySelector(
        `.info-text-${e.target.dataset.cardnumber}`
    ).hidden;
    console.log(hidEl);

    const display = window.getComputedStyle(iconEl).display;
    iconEl.style.display = display === 'block' ? 'none' : 'block';
    infoEl.style.display = display === 'block' ? 'block' : 'none';
    return false;
}

function callYourFunction() {
    alert('kjk');
}