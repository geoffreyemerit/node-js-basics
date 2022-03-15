const typeChaine = "je m'appelle geoffrey";
const age = 28;
const array = ['Escalade', 'Echecs', 'Football', 'Bieres'];

console.log(typeChaine, age, array);

const geo = require("./information.js");
console.log(geo.name);


const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `hello I'm ${geo.name} from ${geo.campus} campus`,
    e : "oO",
    T : "U "
}));


// or cowsay.think()