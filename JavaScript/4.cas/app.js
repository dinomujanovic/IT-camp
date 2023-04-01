// kondicionali:

if ("prvi uslov") {
    // blok koda koji ce da se izvrsava u slucaju da je zadovoljen prvi uslov
} else if ("drugi uslov") {
 // blok koda koji ce da se izvrsava u slucaju da je zadovoljen drugi uslov
} else {
// blok koda koji ce se izvrsiti u slucaju da sve predhodno nije zadovoljeno
}

// ako je broj godina >= 18 
// neka se ispise poruka "punoletni ste"

// const brojGodina = 25 

// if (brojGodina >= 18) {
//    console.log("punoletni ste")
// } else {
//     console.log("maloletni ste")
// }

// 2. zadatak:
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa kolicnik x/y
// ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.

let x = 16 
let y = 0

if (y === 0) {
console.log("deljenje je nemoguce")
} else {
    console.log(x / y);
}


// na osnovu promenljive brojGodina ispisati u kozoli sledece:
// ako je broj godina manji od 12: "vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): vi ste punoletni
//  ako je broj godina veci ili jednak 40: vi ste zrela osoba

const brojGodina = 25;

if (brojGodina < 12) {
    console.log("vi ste decijeg doba");
} else if (brojGodina >= 12 && brojGodina < 18) {
    console.log("vi ste maloletni");
} 
 else if (brojGodina >= 18 && brojGodina < 40) {
    console.log("vi ste punoletni");
} else {
    console.log("vi ste zrela osoba");
}