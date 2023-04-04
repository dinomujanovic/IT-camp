console.log("Prvi cas javascripta");
console.log("nova poruka");

tekst = document.getElementById("paragraf");
console.log(tekst);

tekst.innerHTML = " <em>da li se vidi paragraf<em>";

// Tipovi Podataka //

// Postoje:
// 1. primitivni (vrednosni) tipovi podataka
// 2. neprimitivni (referentni) tipovi podataka.

// Za proveru tipa odredjene promenljive (varijable) se koristi typeof operator.

// Primitivni tipovi podataka:

// 1. string - promenljiva koja je zapisana unutar navodnika (obicnih ili duplih)
console.log("neki string");
console.log(typeof "neki string");

// 2. number - brojevi mogu biti zapisani sa ili bez decimalnog zareza (.)
console.log(56);
console.log(typeof 56);

// 3. BigInt - brojevi koji u iznad ogranicenja za number tip podatka

console.log(BigInt(142421122234));
console.log(typeof BigInt(142421122234));

// 4. boolean - logicki entitet koji ima dve vrednosti: true i false

console.log(true);
console.log(typeof true);

// 5. undefined - promenljiva koja je definisana u memoriji ali joj nije dodeljena vrednost ima:
// tip: undefined
// vrednost: undefined.

var a;

console.log(a);
console.log(typeof a);

// 6. null - nepostojeca ili nekorektna promenljiva ima vrednost null.
// tip promenljive cija je vrednost null u javascriptu je object.

b = null;

console.log(b);
console.log(typeof b);

// 7. symbol - koristi se za promenljive koje su anonimne ili jedinstvene.

c = Symbol("it camp");

console.log(c);
console.log(typeof c);

//  svi tipovi podataka koji nisu primitivni su tipa object
// promenljive koje mogu sadrzati vise vrednosti su referentnog tipa (neprimitivnog)

// 1. Array (niz) - struktura podataka za skladistenje vise vrednosti
// (te vrednosti mogu biti razlicitog tipa)

niz = ["emir", 21, true];

console.log(niz);
console.log(typeof niz);

// 2. object - struktura podataka za skladistenje vise vrednosti
// (te vrednosti mogu biti razlicitog tipa)
// te vrednosti su prikazane u key:value (name:value) paru

obj = {
  ime: "emir",
  prezime: "marukic",
  punoletan: true,
};

console.log(obj);
console.log(typeof obj);

// 3. set - struktura podataka za skladistenje vise vrednosti koja ne dozvoljava duplikate.
// Slicna je nizu, a sintaksa za pravljenje seta je:

set = new Set(["Asija", "Melida", "Dino", 19, 31, 25, "Dino"]);
// svako novo pojavljivanje elemenata u setu se nece primeniti.
console.log(set);

// 4. Map - struktura podataka za skladistenje vise vrednosti i slicna je objektu. Sintaksa za pravljenje mape je:

map = new Map([
  ["banane", "160"][("jagode", "260")][("kruske", "360")][("ananas", "460")],
]);
console.log(map);
