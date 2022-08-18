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
        const dataBack = await resp.json();
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
        itemEl.innerHTML += `<p> ${i + 1}. <span>User:</span> ${
      el.login
    }</p><img class="img" src="${el.avatar_url}"></img>`;
        console.log(itemEl);
        outputEl.append(itemEl);
    });
}