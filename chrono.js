// Appel des boutons de marche,arret et réinitialisation
let Start = document.getElementById('Start');
let Stop = document.getElementById('Stop');
let Reset = document.getElementById('Reset');

// Appel des sections heures,minutes et secondes 
let sec = document.getElementById('sec');
let min = document.getElementById('min');
let heure = document.getElementById('hrs');
// Conversion des heures,minutes et secondes en entier 
let parseSec =parseInt(sec.innerText);
let minParse = parseInt(min.innerText);
let hrsParse = parseInt(heure.innerText);

// Variable qui stock la fonction des interalles de temps 
// (toutes les 1000ms ou 1sec)
let demarrage;

let todayDate = document.querySelector(".date");
// Objet Date
let today = new Date();


todayDate.innerHTML = today.toLocaleDateString();
// Si clique sur le bouton "Start",le chronomètre démarre
Start.addEventListener("click",()=>{
    
    
    demarrage = setInterval(()=>{
       parseSec++;
       if(parseSec<10){
           sec.innerHTML = "0"+ parseSec;
       }else{
           sec.innerHTML= parseSec;
       }
       //Si les secondes sont égale à 60s <=> 1 minute
       if(parseSec===60){
           parseSec=0;
           minParse++;
           if(minParse<10){
               min.innerHTML = "0"+ minParse;

           }else{
               min.innerHTML = minParse;
           }
           //Si les minutes sont égale à 60min <=> 1 heure    
           if(minParse===60){
                minParse=0;
                hrsParse++;
                if(hrsParse<10){
                    heure.innerHTML = "0"+ hrsParse;
                }else{
                    heure.innerHTML = hrsParse;
                }
           }
       }
       
    },1000);   
})
// Si clique sur le bouton "Stop",le chronomètre s'arrete
Stop.addEventListener("click",()=>{
   
    clearInterval(demarrage);
       
})
// Si clique sur le bouton "Reset",le chronomètre est Réinitialiser
Reset.addEventListener("click",()=>{
    clearInterval(demarrage);
    hrsParse=0;
    heure.innerHTML ="0"+ hrsParse;
    minParse=0;
    min.innerHTML= "0"+ minParse;
    parseSec=0;
    sec.innerHTML = "0"+ parseSec;
})


