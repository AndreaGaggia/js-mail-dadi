// chiedo all'utente la sua mail
var userMail = prompt("Scrivi qui il tuo indirizzo email");

// ora voglio controllare se l'indirizzo è presente all'interno di una lista di indirizzi
// per prima cosa quindi creo un array con una serie di indirizzi mail
var mailList = ["pippo@disney.com", "pluto@disney.com", "paperino@disney.com", "topolino@disney.com", "qui@disney.com"];

// secondo, verifico con un for loop la presenza della mail all'interno dell'array e stampo un messaggio in alert
for (var i = 0; i < mailList.length; i++) {
  if (userMail == mailList[i]) {
    alert("La tua mail risulta registrata!");
  }
}

