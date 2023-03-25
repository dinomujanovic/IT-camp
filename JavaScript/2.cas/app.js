// Neku poruku u JavaScriptu mozemo prikazati na vise nacina:

// 1. innerHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "prvi nacin ispisa";

// 2. document.write - obicno se koristi za testiranje koda.

// 3. alert - upozorenje korisniku:

// alert("jos jedan nacin prikazivanja poruke");

// 4. console.log - prikazivanje nekih informacija u konzoli, najcesce koriscen metod.

console.log("poruka u konzoli.");

// javascript nazivi promenljivih

// ime promenljive u javascriptu mora poceti:
// 1. Velikim ili malim slovom(A-Z ili a-z)
// 2. $ (dollar)
// 3. _ (donja crta)

// broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

// javascript je case sensitive (razlikuje velika i mala slova)!!!

a = 10;
// console.log(A) error
console.log(a);

// zapisivanje promenljivih sastavljenih od vise reci

// vecernji termin  nije ispravno da pravimo razmak izmedju reci
vecernji_termin - 19.3; // ispravan nacin zapisivanja promenljive
vecernjiTermin - 19.3; // ispravan nacin zapisivanja promenljive, najcesce koriscen nacin zapisivanja u javascriptu

// deklaracija i inicijalizacija
// postoje 4 nacina za deklarisanje promenljive u javascriptu

// 1. koriscenjem var rezervisane reci. Vise je ranije bila koriscena
var a = 10;

// 2. koriscenjem let rezervisane reci
let b = 14;

// 3. const
const c = 20;

// koriscenjem nicega
d = 5;
