/* crea un array con le varie mail presenti nella mailing list */
let mailList = ["harder@gmail.com" , "better@outlook.it" , "faster@yahoo.it", "stronger@leonardo.it"];

/* selziono l'elemento nel DOM tramite ID */
let userSubmit = document.getElementById("submit");



/* creo un event lister per click sul bottone */
userSubmit.addEventListener('click', function(){

    /* cambio il valore della variabile dall'elemento al suo value */
    let userMail = document.getElementById("mail").value;

    /* eseguo un ciclo prmettere all'operatore di confronto di passare tutti gli elementi dell'array  */
    for(let i = 0 ; i <= 3 ; i++ ){
        /* eseguo un operatore di confronto per confrontare se l'input dell'utente corrisponde ad uno degli elementioi dell'array */
        if( mailList[i] === userMail ){
            /* se l'input corrisponde verra scritto sullo schermo il seguente messaggio */
            document.getElementById("output").innerHTML = "complimenti sei nella mailing list";
            /* aggiungo la parola chiave break in quanto serve per uscire dal ciclo se viene trovata una corrispondenza tra l'input utente e un elemento dell'array,
            altrimenti l'operatore di confronto non funziona */
            break;

        } else {
            /* messaggio scritto sullo schermo nel caso in cui l'input utente noon corrisponda a nessuno degli elementi dell'array */
            document.getElementById("output").innerHTML = "ci dispiace ma non risulti nella nostra mailing list";

        }
    
        /* console.log(typeof mailList[i]) */
        
    }


});

