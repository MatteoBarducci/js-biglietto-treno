//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// ACQUISIZIONE E PREPARAZIONE DEI DATI
// Kilometri da percorrere
const userKm = parseInt(prompt('Ciao dimmi i kilometri da percorrere'));
console.log (userKm);
// Età dell'utente
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log (userAge);
// Prezzo prima degli sconti
const totalPrice = userKm * 0.21;
console.log (totalPrice)
// Sconti
const discountUnderAge = (totalPrice * 0.2);
console.log (discountUnderAge);
const discountOver65 = (totalPrice * 0.4);
console.log (discountOver65);

// LOGICA DELL'APPLICAZIONE
if (userAge < 18) {
    let finalPrice = (totalPrice - discountUnderAge);
    console.log (finalPrice);
} else if (userAge > 65) {
    let finalPrice = (totalPrice - discountOver65);
    console.log (finalPrice);
} else {
    let finalPrice = totalPrice;
    console.log (finalPrice);
}
// OUTPUT ALL'UTENTE
alert (finalPrice)