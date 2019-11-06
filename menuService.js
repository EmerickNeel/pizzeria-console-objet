const readline = require('readline');
const Pizza = require('./pizza');


 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 })



class MenuService {

    constructor() {
        this.pizzas = [];
    }

    executeUC() {
        this.pizzas = [
            new Pizza(0, "PEP", "Pépéroni", 12.50),
            new Pizza(1, "MAR", "Margharita", 14.00),
            new Pizza(2, "REIN", "La Reine", 11.50),
            new Pizza(3, "FRO", "La 4 Fromages", 12.00),
            new Pizza(4, "CAN", "La cannibale", 12.50),
            new Pizza(5, "SAV", "La savoyarde", 13.00),
            new Pizza(6, "ORI", "L'orientale", 13.50),
            new Pizza(7, "IND", "L'indienne", 14.00),
        ];
        return this.pizzas;
    }

    findPizza(pizzas, code) {
        let pizza = new Pizza();
        for (this.i = 0; this.i < pizzas.length; this.i++) {
            if (pizzas[this.i].code == code) {
                pizza = pizzas[this.i];
            }
        }
        return pizza;
    }

    printMenu() {
        console.log('***** Pizzeria Administration *****')
        console.log('1. Lister les pizzas')
        console.log('2. Ajouter une nouvelle pizza ')
        console.log('3. Mettre à jour une pizza')
        console.log('4. Supprimer une pizza ')
        console.log('99. Sortir ')
    }

}

class ListerPizzasService extends MenuService {

    constructor() {
        super();
    }

    executeUC(pizzas = []) {
        pizzas.forEach(pizza => {
            console.log(pizza.code + " -> " + pizza.libelle + " (" + pizza.prix + " €)");
        });
        super.printMenu()
    }
}

class AjouterPizzaService extends MenuService {

    constructor() {
        super();
    }

    executeUC(pizzas = []) {
        let pizza = new Pizza();
        pizzas.id = pizzas.length;
        rl.question('Veuillez choisir le code : ', (pizzaCode) => {
            pizza.code = pizzaCode;
            rl.question('Veuillez choisir le libelle : ', (pizzaLibelle) => {
                pizza.libelle = pizzaLibelle;
                rl.question('Veuillez choisir le prix : ', (pizzaPrix) => {
                    pizza.prix = Number(pizzaPrix);
                    pizzas.push(pizza);
                    super.printMenu();
                    return pizzas;
                });
            });
        });
    }
}

class ModifierPizzaService extends MenuService {

    constructor() {
        super();
    }

    executeUC(pizzas = [], pizzaCode) {
        let pizza = super.findPizza(pizzas,pizzaCode);
        rl.question('Veuillez choisir le nouveau code : ', (pizzaCode) => {
            pizza.code = pizzaCode;
            rl.question('Veuillez choisir le nouveau libelle : ', (pizzaLibelle) => {
                pizza.libelle = pizzaLibelle;
                rl.question('Veuillez choisir le nouveau prix : ', (pizzaPrix) => {
                    pizza.prix = Number(pizzaPrix);
                    pizzas[pizza.id] = pizza;
                    super.printMenu();
                    return pizzas;
                }); 
            });
        });
    }

}

class SupprimerPizzaService extends MenuService {

    constructor() {
        super();
    }

    executeUC(pizzas = [], pizzaCode) {
        let pizza = super.findPizza(pizzas,pizzaCode);
        pizzas.splice(pizza.id, 1);
        super.printMenu();
        return pizzas;
    }
}

module.exports.MenuService = MenuService;
module.exports.ListerPizzasService = ListerPizzasService;
module.exports.AjouterPizzaService = AjouterPizzaService;
module.exports.ModifierPizzaService = ModifierPizzaService;
module.exports.SupprimerPizzaService = SupprimerPizzaService;
module.exports.rl = rl;