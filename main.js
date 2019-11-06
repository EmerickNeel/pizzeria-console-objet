const readline = require('readline')
const Pizza = require('./pizza');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function generateMenu() {
    pizzas = [
        new Pizza(0, "PEP", "Pépéroni", 12.50),
        new Pizza(1, "MAR", "Margharita", 14.00),
        new Pizza(2, "REIN", "La Reine", 11.50),
        new Pizza(3, "FRO", "La 4 Fromages", 12.00),
        new Pizza(4, "CAN", "La cannibale", 12.50),
        new Pizza(5, "SAV", "La savoyarde", 13.00),
        new Pizza(6, "ORI", "L'orientale", 13.50),
        new Pizza(7, "IND", "L'indienne", 14.00),
    ];
}

function findPizza(code) {
    let pizza = new Pizza();
    for (this.i = 0; this.i < this.pizzas.length; this.i++) {
        if (this.pizzas[this.i].code == code) {
            pizza = this.pizzas[this.i];
        }
    }
    return pizza;
}


function printMenu() {
    console.log('***** Pizzeria Administration *****')
    console.log('1. Lister les pizzas')
    console.log('2. Ajouter une nouvelle pizza ')
    console.log('3. Mettre à jour une pizza')
    console.log('4. Supprimer une pizza ')
    console.log('99. Sortir ')
}

function pizzaList(bMenu = false) {
    pizzas.forEach(pizza => {
        console.log(pizza.code + " -> " + pizza.libelle + " (" + pizza.prix + " €)");
    });
    if(bMenu == true){
        printMenu();
    }    
}

function pizzaAdd(bMenu = false) {

    let pizza = new Pizza();

    //Récupère l'ID de la pizza
    pizzas.id = pizzas.length;
    rl.question('Veuillez choisir le code : ', (pizzaCode) => {
        pizza.code = pizzaCode;
        rl.question('Veuillez choisir le libelle : ', (pizzaLibelle) => {
            pizza.libelle = pizzaLibelle;
            rl.question('Veuillez choisir le prix : ', (pizzaPrix) => {
                pizza.prix = Number(pizzaPrix);
                pizzas.push(pizza);
                if(bMenu == true){
                    printMenu();
                } 
            });
        });
    });    
}

function pizzaUpdate(bMenu = false, pizzaCode) {
    let pizza = findPizza(pizzaCode);
    rl.question('Veuillez choisir le nouveau code : ', (pizzaCode) => {
        pizza.code = pizzaCode;
        rl.question('Veuillez choisir le nouveau libelle : ', (pizzaLibelle) => {
            pizza.libelle = pizzaLibelle;
            rl.question('Veuillez choisir le nouveau prix : ', (pizzaPrix) => {
                pizza.prix = Number(pizzaPrix);
                pizzas[pizza.id] = pizza;
                if(bMenu == true){
                    printMenu();
                }
            });
        });
    });
}

function pizzaDelete(bMenu = false, pizzaCode) {
    let pizza = findPizza(pizzaCode);
    pizzas.splice(pizza.id,1);
    if(bMenu == true){
        printMenu();
    }
}

generateMenu()
printMenu()
rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            console.log('Liste des pizzas');
            pizzaList(true);
            break;
        case '2':
            console.log("Ajout d'une pizza");
            pizzaAdd(true);
            break;
        case '3':
            console.log("Mise à jour d'une pizza");
            pizzaList(false);
            rl.question('Veuillez choisir le code ', (pizzaCode) => {
                pizzaUpdate(true,pizzaCode);
            })
            break;
        case '4':
            console.log("Suppression d'une pizza");
            pizzaList(false);
            rl.question('Veuillez choisir le code ', (pizzaCode) => {
                pizzaDelete(true,pizzaCode);
            })
            break;
        case '99':
            console.log("Fin de l'application");
            process.exit(0);
            break;
        default:
            pizzaList();
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log("Fin de l'application");
    process.exit(0);
});