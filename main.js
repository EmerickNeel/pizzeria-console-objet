const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let closeApplication = false;

function printMenu() {
    console.log('***** Pizzeria Administration *****')
    console.log('1. Lister les pizzas')
    console.log('2. Ajouter une nouvelle pizza ')
    console.log('3. Mettre à jour une pizza')
    console.log('4. Supprimer une pizza ')
    console.log('99. Sortir ')
}

const selectChoice = () => {
    return new Promise((resolve, reject) => {
        rl.question('Veuillez choisir votre option ', (val) => {
            resolve(val)
        })
    })
}

function pizzaList() {
    console.log('Liste des pizzas')
}

function pizzaAdd() {
    console.log('Ajout d’une nouvelle pizza')
}

function pizzaUpdate() {
    console.log('Mise à jour d’une pizza')
}

function pizzaDelete() {
    console.log("Suppression d’une pizza")
}

function closeApp() {
    closeApplication = true;
    console.log('Aurevoir ☹')
    process.exit()
}

const main = async () => {
    while (closeApplication == false) {
        printMenu()
        await selectChoice().then(res => {
            switch (res) {
                case "1":
                    pizzaList()
                    break;
                case "2":
                    pizzaAdd()
                    break;
                case "3":
                    pizzaUpdate()
                    break;
                case "4":
                    pizzaDelete()
                    break;
                case "99":
                    closeApp()
                    break;
                default:
                    console.log('Votre saisie est incorrecte')
                    break;
            }
        }, err => {
            console.log('Erreur lors de votre saisie, veuillez recommencer')
        })
    }
}

main()