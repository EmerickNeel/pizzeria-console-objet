const readline = require('readline')
const Pizza = require('./pizza');
const menuServiceFactory = require('./menuServiceFactory');
const rl = require('./menuService').rl;

//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//})

let pizzas = [];

service = new menuServiceFactory();
pizzas = service.generateMenu();
service.printMenu();

rl.on('line', (line) => {

    service.selectChoice(line,pizzas);

});