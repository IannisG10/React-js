// Appel du cadran d'affichage de la calculatrice
let output = document.getElementById("output");

// Selection de tous les éléments de la calculatrice

let boutton = document.querySelectorAll(".calculator-touch");
let buttonOperator = document.querySelectorAll(".calculator-operator");
let buttonEqual = document.getElementById("calculator-enter")
for (let i= 0; i < boutton.length; i++) {
      boutton[i].addEventListener("click",()=>{
          output.innerHTML += boutton[i].innerText;
          
      })
    
}

