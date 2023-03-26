// var
var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 25;
console.log(x);

// za sve promenljive definisane preko var keyword je moguce izvrsiti redeklaraciju (ponovo definisanje promenljive)
// i reinicijalizaciju (dodeljivanje nove vrednosti).

// let
let y = 30;
console.log(y);

y = 15;
console.log(y);

// let y;

// za sve promenljive definisane preko let keyword je moguce izvrsiti reinicijalizaciju (dodeljivanje nove vrednosti),
// ali kada govorimo o istom prostoru nece biti moguca redeklaracija (ponovno definisanje promenljive)

// let i const keyword nam obezbedjuju block scope (dodatni prostor za definisanje promenljivih)
// promenljive definisane preko let ili const keyword su block scope promenljive.

{
  let y = 50;
  console.log(y);
}
console.log(y);

//  u nekom block scope je moguce izvrsiti i redeklaraciju i reinicijalizaciju.

// const
// const w
// w - 18
// ne moze na ovaj nacin posebno

const w = 18;
console.log(w);

// const w = 90
// w = 90;
// console.log(w);

// za promenljive definisane preko const (u istom prostoru) nije moguce izvrsiti redeklaraciju i reinicijalizaciju

{
  const w = 90;
  console.log(w);
}
// sve karakteristike koje vaze za promenljivu definisanu preko let, vaze i za const kada govorimo za block scope

// postoje metode koje nam dozvoljavaju izmenu naseg niza bez obzira sto se radi o promenljivoj definisanoj preko const keyword
