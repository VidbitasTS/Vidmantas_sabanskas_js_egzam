/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */
import initHeader from './modules/header.js';
import initFooter from './modules/footer.js';

const users = [
    { id: '1', name: 'John Smith', age: 20, hasDog: true },
    { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
    { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
    { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
    { id: '5', name: 'Alex John', age: 25, hasDog: true },
    { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
    { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
    { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
    { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

function filterDogOwers(arr) {
    return arr.filter((el) => el.hasDog === true);
}
const rez1 = filterDogOwers(users);
console.log('Turi suni === ', rez1);

function filterDogOwers1(arr) {
    let newArr = [];
    arr.forEach((el) => {
        if (el.hasDog === true) newArr.push(el);
        //       if (el.hasDog === true) newArr.push({ name: el.name, hasDog: el.hasDog });
    });
    return newArr;
}
const rez11 = filterDogOwers1(users);
console.log('Turi suni 2 === ', rez11);

// ======================

function filterAdults(arr) {
    return arr.filter((el) => el.age >= 18);
    //return users.filter((el) => el.age >= 18).map((obj) => obj.name);
}
const rez2 = filterAdults(users);
console.log('Pilnametis === ', rez2);

function filterAdults1(arr) {
    let newArr = [];
    arr.forEach((el) => {
        if (el.age >= 18) newArr.push(el);
        //        if (el.age >= 18) newArr.push({ users: el.name });
    });
    return newArr;
}
const rez22 = filterAdults1(users);
console.log('Pilnametis 2 === ', rez22);