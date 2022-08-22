/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */

import initHeader from '../../modules/header.js';
import initFooter from '../../modules/footer.js';

const audi = {
    make: 'audi',
    model: 'A6',
    year: 2005,
    color: 'white',
};

function key(obj) {
    let keyArr = [];
    for (const key in obj) {
        keyArr.push(key);
    }
    return keyArr;
}

const rezArr = key(audi);
console.log('su For in ', rezArr);

console.log('su Object.key', Object.keys(audi));