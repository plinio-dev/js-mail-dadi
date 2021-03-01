/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


//1. chiedi all'utente la sua email

//creo un array di email
var listaEmail = [ "mario@gmail.com", "pippo@gmail.com", "chiara@hotmail.com", "ciro@gmail.com"];

var emailUtente = prompt( "Inserisci la tua email" );

//2 controlla nella lista chi può accedere
var emailValida;
for (var j = 0; j < listaEmail.lenght; j++ ) {
}


//3 stampa un messaggio appropriato sull’esito del controllo
if ( emailUtente == listaEmail[j] ) {
  alert("sei valido");
  emailValida = emailUtente;
} else {
  alert("non sei valido");
}
