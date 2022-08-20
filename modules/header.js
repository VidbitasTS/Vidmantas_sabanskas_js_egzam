export default async function initHeader() {
    // ideti i body pradzia
    const resp = await fetch('../layout/header.html');
    const htmlHeader = await resp.text();
    // ideti i body pabaiga
    document.querySelector('header').insertAdjacentHTML('afterbegin', htmlHeader);

    const str = window.location.toString();
    document.querySelector('#script').addEventListener('click', () => {
        const path = str.slice(0, str.indexOf('Index')) + 'js/script.js';
        openTextFile(path);
    });
    document.querySelector('#style').addEventListener('click', () => {
        const path = str.slice(0, str.indexOf('Index')) + 'css/style.css';
        openTextFile(path);
    });
}
await initHeader();

function openTextFile(url) {
    const resp = fetch(url)
        .then((response) => response.text())
        .then((text) => {
            console.log(text);
        });
}