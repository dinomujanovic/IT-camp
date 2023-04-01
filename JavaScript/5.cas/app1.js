// javaScript Switch naredba

// Switch naredbu koristimo kada imamo slucajeve koji preciziraju vrednost nekog izraza:

// switch (izraz) {
//     case vrednost1:
//         // blok koda koji ce da se izvrsi u slucaju da je izraz === vrednosti1
//         break;
//     case vrednost2:
//         // blok koda koji ce da se izvrsi u slucaju da je izraz === vrednosti2
//         break;
//     default:
//         // blok koda za izvrsavanje u slucaju da izraz nije jednak prethodnim case-ovima
//         // break nije neophodno koristiti na poslednjem slucaju
// }

// break key daje naredbu prestanka switch naredbe
// break se ne sme izostaviti na kraju nekog slucaja osim zadnjeg
// ako izostavimo break u slucaju koji je zadovoljen, izvrsice se i sledeci slucaj koji nije zadovoljen

// korisnik unosi broj:
// ako je uneo broj izmedju 12 i 15 (ukljucuju se oba) neka se ispise: uneli ste vrednostBroja
// defaultno : niste uneli broj iz trazenog opsega

const broj = Number(prompt("unesite broj izmedju 12 i 15"))
switch (broj) {
    case 12:
        console.log("uneli ste broj 12")
        break;
    case 13:
        console.log("uneli ste broj 13")
        break;
     case 14:
        console.log("uneli ste broj 14")
        break;
     case 15:
        console.log("uneli ste broj 15")
         break;
default:
    console.log("niste uneli broj iz trazenog opsega");
}

