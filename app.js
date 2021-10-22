
// OBJECT
//l'ultima virgola si può omettere, le altre sono obbligatorie
let schedaProdotto = {
    nome: 'Maglia',
    peso: 20,
    prezzo: 30.00,
    descrizione: 'Questa è la descrizione della maglia',
    codice: '12fjgje',
    disponibile: false,
    colore: ['Giallo','verde','rosso'],
    promozione: {
        dataInizio: '16/12/2018',
        dataFine: '18/12/2018'
    }, //la virgona è obbligatoria se vogliamo scrivere altre proprietà
    getColore: function(qualeColore) {
        //return schedaProdotto.colore[qualeColore];
        return this.colore[qualeColore]; // this è una reference di scheda prodotto per accorciare il percorso
    },
    getSconto: function(){
        return this.prezzo - this.sconto; // sottrae i due prezzi per darmi lo sconto effettivo = 15
    }
}   

/** 
console.log(schedaProdotto['nome']);
console.log(schedaProdotto['prezzo']);
// inserisco tra parentesi la proprietà che voglio stampare.
// posso stampare anche in un altro modo:
console.log(schedaProdotto.disponibile);
// al posto di utilizzare le parentesi quadre inserisco .oggetto da insierire
// se una delle proprietà avesse un nome tipo promozione-giornaliera per poterla scrivere 
//dovrei farlo tra '', a quel punto non posso esprimerla nel console.log con il punto ma solo 
//tra parentesi quadre altrimenti vedrà il segno - come una sottrazione.
console.log(schedaProdotto.colore[1]);
//stampo il colore verde

// colore: ['Giallo','verde', {'rosso1': 'rosso', rosso2: 'altro rosso'}],
// per stampare il colore rosso2 dovrò scrivere:
// console.log(schedaProdotto.colore[1].rosso2);

console.log(schedaProdotto.getColore(0)); // mi stamperà colore giallo

*/

schedaProdotto['stampa'] = ['Gatto', 'Cane', 'Coniglio','Cuore'];
// schedaProdotto.stampa = ['Gatto', 'Cane', 'Coniglio','Cuore']; oppure
// schedaProdotto['sta-----pa'] = ['Gatto', 'Cane', 'Coniglio','Cuore']; con le parentesi posso avere caratteri speciali
console.log(schedaProdotto);


/** ciclo for 
for (let proprieta in schedaProdotto) {
    console.log(proprieta); // ogni volta che entra nel ciclo deve prendere la proprietà. quando non trova più nulla esce e java prendere il codice che trova sottostante
}
console.log("test");

for (let proprieta in schedaProdotto) {
     console.log(schedaProdotto['nome']); // ogni volta che entra nel ciclo deve prendere la proprietà. quando non trova più nulla esce e java prendere il codice che trova sottostante
 }
console.log("test");  

for (let proprieta in schedaProdotto) {
     if ( typeof schedaProdotto [proprieta] === 'number')
     {
        console.log(schedaProdotto [proprieta]); 
     }
 }
   */

