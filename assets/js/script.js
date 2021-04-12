
//inseriscilo in un array con altri cognomi (esempio ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’)
var cognomi = [
  "Bianchi",
  "Rossi",
  "Verdi",
  "Gialli",
  "Neri"
];

var request = cognomi.push(prompt("Inserisci il tuo Cognome"));



for (var i=0; i < cognomi.length; i++){
  var cognome_lista = cognomi[i];
  var elemento_precedente = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML = elemento_precedente + "<li>" + cognome_lista + "</li>";
}




//stampa la lista ordinata alfabeticamente

//scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova

