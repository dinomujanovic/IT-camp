// ispisati brojeve od 1 do 10 u konzoli:

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// za ispis vise brojeva je mnogo jednostavnije da koristimo neku petlju.

// for petlja:

// for(statement1; statement2; statement3) {
//     //blok koda za izvrsavanje u svakoj iteraciji
// }

//statement1 je deo koda koji se izvrsava samo na pocetku petlje i on predstavlja definisanje iteratora
// statement2 predstavlja uslov za izvrsavanje petlje
//statement3 predstavlja promenu vrednosti iteratora.


// i++ === i = i + 1
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// ispisati brojeve od 1 do 10 izuzev brojeva 2 i 5

// 1. nacin
for (let i = 1; i < 11; i++) {
    if (i !== 2 && i !== 5 ) {
        console.log(i)
    }
}

// continue keyword koristimo kada zelimo da izbegnemo neki slucaj i da se osvrnemo na narednu iteraciju

//2. nacin

for( let i = 1; i < 11; i++) {
    if(i === 2 || i === 5) {
        continue;
    }    else {
            console.log(i)
        }
    }


// break koristimo kada zelimo da prekinemo petlju

// ispisati brojeve od 1 do 10, ako je neki broj deljiv sa 7 neka se prekine petlja

for ( let i = 1; i < 11; i++) {
    if (i % 7 === 0) {
        break;
    } else { 
        console.log(i)
    }
}


//  ispisati parne brojeve od 1 do 20 na dva nacina:

//1. nacin 
for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//2. nacin 
// i += 2 = i + 2
for (let i = 2; i < 21; i += 2) {
    console.log(i);
}

//ispisati dvostruku vrednost pridornih brojeva od 6 do 14

for (let i = 6; i < 15; i++) {
    console.log(2 * i);
}

//  domaci: 
// 1. ispisati neparne brojeve od 1 do 20 na dva nacina
// 2. ispisati sve brojeve od 50 do 100 deljivih sa 5
// 3. suma neparnih brojeva od 10 do 20 

//1. zadatak
for (let i = 1; i < 21; i += 2) {
    console.log(i)
}

for (let i = 1; i <=20; i += 1) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i)
    }
}

// 2. zadatak

for (let i = 50; i <= 100; i += 1) {
    if (i % 5 === 0) {
        console.log(i)
    }
}

// 3. zadatak

for (let i = 11; i <= 19; i += 2) {
    console.log(i)
}
