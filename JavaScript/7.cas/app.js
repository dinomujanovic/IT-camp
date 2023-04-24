const br1 = +prompt ("unesite prvi broj")
const br2 = +prompt ("unesite drugi broj")

if (isNaN(br1) || isNaN(br2)) {
    console.log("morate uneti korektne brojeve")
} else if ( br1 < br2) {
for(br1; br1 < br2; br1++) {
    console.log(br1)
}
} else if (br2 < br1) {
    for(br2; br2 < br1; br2++) {
        console.log(br1)
    }
} else if (br1 === br2) {
    console.log("uneli ste iste brojeve")
}


console.log(new Date().getDay())

switch(new Date().getDay()) {
    case 0: 
    console.log("ugodno provedite vikend")
    break;
    case 1: 
    console.log("danas je radni dan")
    break;
    case 2: 
    console.log("danas je radni dan")
    break;
    case 3: 
    console.log("danas je radni dan")
    break;
    case 4: 
    console.log("danas je radni dan")
    break;
    case 5: 
    console.log("danas je radni dan")
    break;
    case 6: 
    console.log("ugodno provedite vikend")
    break;
}

// prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.
const n = +prompt ("unesite broj")

let suma = 0
let brojBrojeva = 0

for (let i = 1; i < n ; i++){
    if (i % 5 === 0 ) {
        suma += i 
        brojBrojeva += 1 
    }
}
console.log(suma);
console.log(brojBrojeva);

// 1. neka se izvrsi iteracija od 99 do -99
// 2. ispisati zbir broja deljivog sa 4 i broja 14

//ispisuje brojeve od 10 do 1
for (let i = 10; i >= 1; i--) {
console.log(i);
}

// 3. izracunati aritmeticku sredinu brojeva koji su deljivi sa 3
// iteracija se vrsi od 3 do 17
