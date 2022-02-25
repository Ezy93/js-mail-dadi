
let userSubmit = document.getElementById("submit");

let mailList = ["harder@gmail.com" , "better@outlook.it" , "faster@yahoo.it", "stronger@leonardo.it"];
console.log(mailList)

userSubmit.addEventListener('click', function(){

    let userMail = document.getElementById("mail").value;

    for(let i = 0 ; i < 4 ; i++ ){
        
        if ( mailList[i] == userMail.value ){

            document.getElementById("output").innerHTML = "complimenti sei nella mailing list";
            
        } else {

            document.getElementById("output").innerHTML = "ci dispiace ma non risulti nella nostra mailing list";

        }
    
        console.log(mailList[i])
    }


});

