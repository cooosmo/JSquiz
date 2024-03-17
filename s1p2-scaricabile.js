/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* In JavaScript abbiamo i seguenti data type:
    - string: accettano caratteri alfanumerici e si distinguono perché racchiusi da apici (let stringa ='stringa1') o doppie apici (let stringa ="stringa2")
    - number: fanno riferimento eclusivamente a valori numerici, i quali, all'interno delle variabili non sono racchiusi da nessun carattere (let number = 10)
    - boolean: i booleani accettano solo dati che corrispondo a due valori (come nel codice binario) e sono contrassegnati dalle parole chiave "true" o "false" (let bool = false). Anche i booleani non sono racchiusi tra particolari caratteri.
    - null: questo tipo di dato vuol dire che la variabile di questo tipo non ha valori al suo interno, quindi rientra nella casistica di variabili solamente dichiarate (let test)
    - undefined: questo valore determina che la variabile non è stata definita nonostante appaia in una porzione di codice 
/*

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
    in JavaScript un oggetto è una collezione di dati con una correlazione di tipo chiave-valore al suo interno.
    ES.
    let alunno {
        nome: 'Cosimo',
        cognome: 'Maras',
        età: 33
    }

    come si evince dall'esempio, le coppie chiave valore sono racchiuse dalle parentesi graffe ed ogni coppia si separa dall'altra con una virgola. I valori possono essere di diverso tipo all'interno dello stesso oggetto
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
    let a = 12
    let b = 20
    const somma = a + b

     console.log('la somma è ' + somma)


*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* const name = 'Cosimo' */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
    let sottrazione = 4 - x

    console.log(sottrazione)

*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
    const name1 = "john"
    const name2 = "John"

    console.log(name1 === name2)

    name2.toLowerCase()
    console.log(name1 === name2)



*/
