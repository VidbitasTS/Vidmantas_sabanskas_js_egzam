/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

import initHeader from './modules/header.js';
import initFooter from './modules/footer.js';

const users = [
    { id: '1', name: 'John Smith', age: 20 },
    { id: '2', name: 'Ann Smith', age: 24 },
    { id: '3', name: 'Tom Jones', age: 31 },
    { id: '4', name: 'Rose Peterson', age: 17 },
    { id: '5', name: 'Alex John', age: 25 },
    { id: '6', name: 'Ronald Jones', age: 63 },
    { id: '7', name: 'Elton Smith', age: 16 },
    { id: '8', name: 'Simon Peterson', age: 30 },
    { id: '9', name: 'Daniel Cane', age: 51 },
];

//users.reduce();

let avrAge = users.reduce(function(acc, curVal) {
    return acc + curVal.age / users.length;
}, 0);
console.log('avrAge ===', avrAge.toFixed(2));

function getUserAverageAge(arr) {
    let avr = 0;
    for (const key in arr) {
        avr += arr[key].age / arr.length;
    }
    return avr.toFixed(2);
}
const average = getUserAverageAge(users);
console.log('average age === ', average);

// ====================

const arrNames = users.map((obj) => obj.name);
console.log('arrNames === ', arrNames);

function getUsersNames(arr) {
    let newArr = [];
    for (const key in arr) {
        newArr.push(arr[key].name);
    }
    return newArr;
}

const newArrNames = getUsersNames(users);
console.log('newArrNames === ', newArrNames);