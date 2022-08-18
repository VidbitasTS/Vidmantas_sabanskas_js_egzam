/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import compositionDefault from './modules/math/composition.js';
import { division as divisionNewName } from './modules/math/division.js';
import { substraction } from './modules/math/substraction.js';
import { multiplication } from './modules/math/multiplication.js';
import {
    one,
    two,
    three,
    fourNew,
    five as fiveNew,
} from './modules/numbers/numbers.js';

let a = compositionDefault(one, fourNew);
let b = divisionNewName(fourNew, two);
let c = substraction(three, two);
let d = multiplication(fiveNew, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);