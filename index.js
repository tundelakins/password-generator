function randomPass(length){

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`!@#$%^&*()_?<>";

    let result = " ";
    for (i = 0; i < length; i++){

        result += characters.charAt(Math.floor(Math.random() * characters.length));

        
    }

    
    return result;
}


function renderPass() {
    
   let messageEl = document.getElementById("message-el");
     messageEl.textContent = randomPass(15);

    let messageEl2 = document.getElementById("message-el2");
     messageEl2.textContent = randomPass(15);

     
    

 }


// console.log(renderPass());