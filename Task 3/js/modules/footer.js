export default async function initFooter() {
    // paimti footer.html
    const resp = await fetch('./layout/footer.html');
    const htmlFooter = await resp.text();
    // ideti i body pabaiga
    document.querySelector('footer').insertAdjacentHTML('afterbegin', htmlFooter);
}

initFooter();