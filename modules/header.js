export default async function initHeader() {
    // paimti header.html
    const resp = await fetch('../layout/header.html');
    const htmlHeader = await resp.text();
    // ideti i body pradzia
    document.querySelector('header').insertAdjacentHTML('afterbegin', htmlHeader);
}
await initHeader();