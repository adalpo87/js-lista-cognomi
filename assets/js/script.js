
//inseriscilo in un array con altri cognomi (esempio ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’)
var cognomi = [
  "Bianchi",
  "Rossi",
  "Verdi",
  "Gialli",
  "Neri"
];

var request = prompt("Inserisci il tuo cognome");


var flag = false;
var p = 0;

if (request !== ''){
  cognomi.push(request);
   while (flag === false){

     if (cognomi[p] == request){
       flag =true;
     }
     p++;
   }
}else{
  alert('Devi inserire il Cognome')
}

cognomi.sort();

var i=0;

while(i < cognomi.length){
  var lista_cognomi=document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML= lista_cognomi + '<li>' + cognomi[i] + '</li>';
  i++;
}

if(flag===true){

  document.getElementById('posizione').innerHTML='Il tuo cognome è il numero '+ p;
}




//stampa la lista ordinata alfabeticamente

//scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova



/* ------------------------------------------------------------------------------------------------------- */

/* var request = cognomi.push(prompt("Inserisci il tuo Cognome"));
var cognomi= cognomi.sort();
var posizione_cognome = cognomi.indexOf(request);


for (var i=0; i < cognomi.length; i++){
  var cognome_lista = cognomi[i];
  var elemento_precedente = document.getElementById('lista').innerHTML;
  document.getElementById('lista').innerHTML = elemento_precedente + "<li>" + cognome_lista + "</li>";
  document.getElementById('posizione').innerHTML = posizione_cognome;
}

var j = 0;
while(i < cognomi.length){

  var
} */

/* ------------------------------------------------------------------------------------------------------- */