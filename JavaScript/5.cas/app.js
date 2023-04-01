//  za kominukaciju sa korisnikom koristimo prompt metodu:

const ime = prompt("unesite vase ime: ");

console.log(ime);

const brojGodina = prompt("unesite broj godina")

console.log(brojGodina);

// posto je vrednost dobijena preko prompt metode uvek string, odatle potreba da pretvorimo taj string u number

// dva najcesce koriscena nacina za prevodjenje stringa u broj:

// 1. Number(string)
const brojGodina2 = Number(brojGodina)
console.log(brojGodina2)

// 2. +string - number
const brojGodina3 = +brojGodina
console.log(brojGodina3)

// unesite vasu visinu:

const visina = +prompt("unesite vasu visinu:")
console.log(visina)

// isNaN ispituje da li je vrednost nekog broja NaN

console.log(isNaN("56"))
console.log(isNaN("5fsfsdf6"))

