// Funkcijos

export default async function initHeader() {
    // ideti i body pradzia
    const resp = await fetch('../layout/header.html');
    const htmlHeader = await resp.text();
    // ideti i body pabaiga
    document.querySelector('header').insertAdjacentHTML('afterbegin', htmlHeader);

    const str = window.location.toString();
    const path = str.slice(0, str.indexOf('Index'));
    createH1(path, str);

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
    const resp = fetch(url)
        .then((response) => response.text())
        .then((text) => {
            console.log(text);
            openModal(text);
        });
}

function createH1(path, str) {
    if (path.slice(str.indexOf('%20') + 3, -1) < 5) return;
    createModalWindow();
    const taskNumber = path.slice(str.indexOf('%20') + 3, -1);
    const wrapEl = document.querySelector('.wrapper');
    const divh1El = document.createElement('div');
    divh1El.className = 'divh1';
    divh1El.innerHTML = `<h1>TASK ${taskNumber}</h1>`;
    wrapEl.appendChild(divh1El);
}

function createModalWindow() {
    // Modal window
    const destEl = document.querySelector('body');
    const createModalEl = document.createElement('div');
    createModalEl.className = 'modal';
    createModalEl.id = 'myModal';
    createModalEl.innerHTML = `<span class="close">&times;</span><div class="modal-content"></div>`;
    destEl.appendChild(createModalEl);
}

function openModal(content) {
    //alert(content);
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const closeSpan = document.getElementsByClassName('close')[0];
    closeSpan.addEventListener('click', () => (modal.style.display = 'none'));
    modal.style.display = 'block';
    modalContent.textContent = content;
}