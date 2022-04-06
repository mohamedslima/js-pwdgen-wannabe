// DATI DA PRELEVARE DA UTENTE
const userName = prompt('inserisci il tuo nome');
const userLastName = prompt('inserisci il tuo cognome');
const userFavoriteColor = prompt('dimmi il tuo colore preferito')

// ELABORAZIONE DATI
const message = `${userName}${userLastName}${userFavoriteColor}21`;
console.log(message);

// OUTPUT
document.getElementById('password').innerHTML = message;