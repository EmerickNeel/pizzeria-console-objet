const menuService = require('./menuService.js').MenuService;
const ListerPizzasService = require('./menuService.js').ListerPizzasService;
const AjouterPizzaService = require('./menuService.js').AjouterPizzaService;
const ModifierPizzaService = require('./menuService.js').ModifierPizzaService;
const SupprimerPizzaService = require('./menuService.js').SupprimerPizzaService;
const rl = require('./menuService').rl;
const Pizza = require('./pizza');

class MenuServiceFactory {

    constructor() {

        this.menuService = new menuService();
        this.listePizza = new ListerPizzasService();
        this.ajouterPizza = new AjouterPizzaService();
        this.modifierPizza = new ModifierPizzaService();
        this.supprimerPizza = new SupprimerPizzaService();


    }

    selectChoice(ind, pizzas = [], pizzaCode) {
        switch (ind) {
            case "1":
                this.listePizza.executeUC(pizzas);
                break;
            case "2":
                return this.ajouterPizza.executeUC(pizzas);
                break;
            case "3":
                rl.question('Veuillez choisir le code ', (pizzaCode) => {
                    return this.modifierPizza.executeUC(pizzas, pizzaCode);
                })
                break;
            case "4":
                rl.question('Veuillez choisir le code ', (pizzaCode) => {
                    return this.supprimerPi > zza.executeUC(pizzas, pizzaCode);
                })
                break;
            case "99":
                console.log("Fin de l'application");
                process.exit(0);
                break;
        }
    }

    generateMenu() {
        return this.menuService.executeUC();
    }

    printMenu() {
        this.menuService.printMenu();
    }

}

module.exports = MenuServiceFactory;