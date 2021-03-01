/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// 1 Generare un numero random da 1  a 6 sia per il giocatore sia per il computer


var giocatore = prompt("Inserisci il tuo nome");
var giocatoreNum = Math.floor(Math.random() * 6) +1 ;
console.log(giocatore + " questo è il tuo numero " + giocatoreNum);

var computer = ("Computer ");
var computerNum = Math.floor(Math.random() * 6) +1 ;
console.log("Questo è il numero del " + computer + computerNum);

// 2 Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (giocatoreNum > computerNum) {
  alert( giocatore + " Hai vinto!")
} else if (computerNum > giocatoreNum) {
  alert( giocatore + " Hai perso!")
} else if (computerNum == giocatoreNum){
  alert("Parità!")
}
