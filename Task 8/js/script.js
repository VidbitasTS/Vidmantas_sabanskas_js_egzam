/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

import initHeader from '../../modules/header.js';
import initFooter from '../../modules/footer.js';

function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.sum = function() {
        return this.a + this.b;
    };
    this.sub = function() {
        return this.a - this.b;
    };
    this.multi = function() {
        return this.a * this.b;
    };
    this.div = function() {
        return this.a / this.b;
    };
}

const sum = new Calculator(5, 10);
const sub = new Calculator(5, 10);
const multi = new Calculator(5, 10);
const div = new Calculator(5, 10);

console.log('sum 5+10 === ', sum.sum());
console.log('sub 5-10 === ', sub.sub());
console.log('multi 5*10 === ', multi.multi());
console.log('div 5/10 === ', div.div());