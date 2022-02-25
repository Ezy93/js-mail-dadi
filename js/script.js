let mailList = ["harder@gmail.com" , "better@outlook.it" , "faster@yahoo.it", "stronger@leonardo.it"];
let userSubmit = document.getElementById("submit");




userSubmit.addEventListener('click', function(){

    
    let userMail = document.getElementById("mail").value;

    console.log(typeof userMail)
    console.log(typeof mailList[1])

    
    

    for(let i = 0 ; i <= 3 ; i++ ){
        
        if( mailList[i] === userMail ){

            document.getElementById("output").innerHTML = "complimenti sei nella mailing list";
            
        } else {

            document.getElementById("output").innerHTML = "ci dispiace ma non risulti nella nostra mailing list";

        }
    
        /* console.log(typeof mailList[i]) */
        
    }


});

