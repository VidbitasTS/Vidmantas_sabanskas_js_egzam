// Funkcijos

export default async function initHeader() {
    // ideti i body pradzia
    const resp = await fetch('../layout/header.html');
    const htmlHeader = await resp.text();
    // ideti i body pabaiga
    document.querySelector('header').insertAdjacentHTML('afterbegin', htmlHeader);

    // const str = document.location.toString();
    // const path = str.slice(0, str.indexOf('index'));
    // alert(path);
    // createH1(path, str);
    createH1(window.location.toString().toUpperCase());

    // document.querySelector('#script').addEventListener('click', () => {
    //     openTextFile(path + 'js/script.js');
    // });
    // document.querySelector('#style').addEventListener('click', () => {
    //     openTextFile(path + 'css/style.css');
    // });

    // const clickScriptEl = document.querySelectorAll('#nav-script');
    // console.log(clickScriptEl[0].children[0].dataset.filename);
    // clickScriptEl.addEventListener('click', (e) => {
    //     alert(e.target);
    // });

    document.querySelector('#nav-script').addEventListener('click', (e) => {
        openTextFile(path + e.target.dataset.filename);
    });
}

// Eiga
await initHeader();

function openTextFile(url) {
    fetch(url)
        .then((resp) => resp.text())
        .then((text) => {
            console.log(text);
            openModal(text);
        });
}

// function createH1(path, str) {
function createH1(path) {
    createModalWindow();

    const nrStart = path.indexOf('%20');
    const nrEnd = path.indexOf('INDEX');

    const rez = +path.substring(nrStart + 3, nrEnd - 1);
    if (rez < 5) return;
    const wrapEl = document.querySelector('.wrapper');
    const divh1El = document.createElement('div');
    divh1El.className = 'divh1';
    divh1El.innerHTML = `<h1>TASK ${rez}</h1>`;
    wrapEl.appendChild(divh1El);

    // console.log(nrStart, nrEnd, rez);

    // return;
    // if (path.slice(str.indexOf('%20') + 3, -1).length > 1) alert('daugiau');
    // alert(path.slice(str.indexOf('%20') + 3, -1));
    // if (path.slice(str.indexOf('%20') + 3, -1) < 5) return;
    // const taskNumber = path.slice(str.indexOf('%20') + 3, -1);
    // const wrapEl = document.querySelector('.wrapper');
    // const divh1El = document.createElement('div');
    // divh1El.className = 'divh1';
    // divh1El.innerHTML = `<h1>TASK ${taskNumber}</h1>`;
    // wrapEl.appendChild(divh1El);
}

function createModalWindow() {
    // Modal window
    const destEl = document.querySelector('body');
    const createModalEl = document.createElement('div');
    createModalEl.className = 'modal';
    createModalEl.id = 'myModal';
    createModalEl.innerHTML = `<span class="close">&times;</span><div class="modal-content"><textarea rows=20></textarea></div>`;
    document
        .querySelector('footer')
        .insertAdjacentElement('afterend', createModalEl);
}

function openModal(content) {
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content textarea');
    const closeSpan = document.getElementsByClassName('close')[0];
    closeSpan.addEventListener('click', () => (modal.style.display = 'none'));
    modal.style.display = 'block';
    modalContent.textContent = content;
}