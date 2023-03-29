//  OPERATORI U JS

// postoji 6 vrsta operatora u JS

// 1. aritmeticki operatori
// 2. operatori dodele vrednosti
// 3. string operatori
// 4. operatori poredjenja
// 5. logicki operatori
// 6. tipovni operatori

// 1. aritmeticki operatori:

// + sabiranje
console.log(10 + 15);

// - oduzimanje
console.log(10 - 15);

// * mnozenje
console.log(10 * 15);

// ** stepenovanje
console.log(2 ** 3);

// / deljenje
console.log(8 / 2);

// % procenat
console.log(12 % 5);

// parni brojevi

// neparni brojevi

// ++ increment(povecanje vrednosti za 1)

// -- decrement(smanjenje vrednosti za 1)

// 2. operatori dodele vrednosti:

// = dodeljivanje vrednosti nekoj promenljivoj
a = 5;

// += povecanje vrednosti postojece promenljive
a += 5;
console.log(a);

// -= smanjenje vrednosti postojece promenljive
a -= 7;
console.log(a);

// *= mnozenje vrednosti sa odredjenim brojem

// /=  deljenje postojece vrednosti sa nekim brojem

// %= pri deljenju trenutne vrednosti sa nekim brojem

// **= stepenovanje postojece vrednosti nekim brojem

// 3. string operatori:

// pored osnovne namene za sabiranje brojeva + operator sluzi za spajanje stringova:

// sabiranje broja i stringa nam daje string


// 4. operatori poredjenja:

// == proverava da li su jednake vrednosti dve strane 

console.log(5 == 5);
console.log(5 == "5"); // imaju istu vrednost ali im je razlicit tip
console.log("leva" == "desna");

// === proverava da li su jednaki i tip i vrednost

console.log(5 === "5");
console.log(10 === 10);

// != proverava razlicitost leve i desne strane

console.log(5 != "5");
console.log(5 != 4);

// !== proverava razlicitost tipa ili vrednosti leve i desne strane

console.log(5 !== "5");
console.log("sreda" !== "Sreda");

// > vece

// < manje

// >= vece ili jednako

// <= manje ili jednako 

// ?  ternary operator

const isSunny = false;

const doINeedSunglasses = isSunny ? "da" : "ne";
console.log(doINeedSunglasses);

// 5. logicki operatori:

// && logicko i - kada moraju biti zadovoljeni svi poduslovi 

console.log(5 === "5" && 4 <= 6); // false 
console.log(5 == "5" && 4 <= 6); // true

// || logicko ili - kada je dovoljno da bar jedan uslov bude zadovoljen

console.log(5 === "5" || "sreda" === "Sreda"); // false
console.log(5 == "5" || "sreda" === "Sreda"); // true

// ! logicko not - Vraca boolean, koji ce da bude suprotne vrednosti od promenljive 

console.log(!isSunny); //bice true, jer nam je prethodna vrednost bila false

// 6. tipovni operatori:

// typeof - operator za ispitivanje tipa promenljive 
console.log(typeof 123);

// instanceof - operator za ispitivanje da li neka promenljiva pripada odredjenom tipu 

console.log(123 instanceof Object);
console.log(typeof [1,2,3] ) // vraca object
console.log([1,2,3] instanceof Array);





