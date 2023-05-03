// prebrojati koliko ima znakova koji su cifre u unetom stringu

const recenica = prompt ("unesite neku recenicu:")
let brojac = 0
for (let i = 0; i < recenica.length; i++){
    if(recenica[i] === "0" || recenica[i] === 1){
        brojac++
    }
}

