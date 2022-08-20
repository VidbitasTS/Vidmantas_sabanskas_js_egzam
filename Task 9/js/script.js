/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

import initHeader from '../../modules/header.js';
import initFooter from '../../modules/footer.js';

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
}

const rez = new Movie('pavadinimas', 'direktorius', 100000001);
console.log('budget 100000001 === (true) ', rez.wasExpensive());
const rez2 = new Movie('pavadinimas', 'direktorius', 1);
console.log('budget 1 === (false) ', rez2.wasExpensive());