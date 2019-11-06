const Pizza = require('./pizza.js')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tabPizza = [];
let inputType = "Menu";

function printMenu() {
    console.log('***** Pizzeria Administration *****')
    console.log('1. Lister les pizzas')
    console.log('2. Ajouter une nouvelle pizza ')
    console.log('3. Mettre à jour une pizza')
    console.log('4. Supprimer une pizza ')
    console.log('99. Sortir ')
}

function pizzaList(){
    tabPizza.forEach(unePizza => {
        console.log(unePizza.id + ' ' + unePizza.libelle + ' : ' + unePizza.prix +  ' €');
    });
    printMenu()
}

function input_user(inputVal){
    if(inputType === "Menu"){
        switch(inputVal){
            case "1" :
                pizzaList()
                break;
        }
    }
}

function createPizza(){
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

    tabPizza = pizzas;
}

//Génération de la liste des pizzas
createPizza();

printMenu()
rl.on('line', input_user)