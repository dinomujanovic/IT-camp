const broj = +prompt("unesite neki broj:")

if(isNaN(broj)){
    console.log("niste uneli korektan broj")
}
console.log(broj ** 2)


for(let i = 1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIZZ BUZZ")
    }
    else if( i % 5 === 0){
        console.log("BUZZ")
    }
    else if (i % 3 === 0){
        console.log("FIZZ")
    }
    else {
        console.log(i)
    }
}

let brojac = 1
for (let i = 1; brojac < 4; i++){
    if(i % 4 === 0 && i % 6 === 0) {
        console.log(i)
        brojac++;
    }
}