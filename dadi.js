// assegno ad un'unica variabile un numero random da 1 a 6
var randomUserNumber = Math.floor((Math.random() * 6) + 1);
var randomPcNumber = Math.floor((Math.random() * 6) + 1);

// chiedo al visitatore di lanciare il dado premendo un pulsante
var btnTira = document.getElementById('tira');

btnTira.addEventListener('click', function() {
  document.getElementById('numero_utente').innerHTML = "Il tuo risultato è " + randomUserNumber;
  document.getElementById('turno_pc').style.display = "block"; 
})

// costruisco il turno del pc chiedendo al visitatore di premere un altro pulsante
var btnPcTurn = document.getElementById('vedi');

btnPcTurn.addEventListener('click', function() {
  document.getElementById('numero_pc').innerHTML = "Il risultato del computer è " + randomPcNumber;
  document.getElementById('risultato').style.display = "block"; 
})

if (randomUserNumber > randomPcNumber) {
  document.getElementById('risultato').innerHTML = "Hai vinto :)";
  document.getElementById('risultato').style.color = "green";
} else if (randomUserNumber < randomPcNumber) {
  document.getElementById('risultato').innerHTML = "Vince il Pc :(";
  document.getElementById('risultato').style.color = "red";
} else if (randomUserNumber === randomPcNumber) {
  document.getElementById('risultato').innerHTML = "Pareggio :|";
  document.getElementById('risultato').style.color = "grey";
}