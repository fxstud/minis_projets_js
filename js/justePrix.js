
// Sélection des élements

let input = document.querySelector('#prix');

let error = document.querySelector('small');

let formulaire = document.querySelector('#formulaire');

// On cache le message d'erreur
error.style.display = "none";

// Génération d'un nombre aléatoire

function genererNombreEntier(max){
 return Math.floor(Math.random()*max);
}

let nombreAleatoire = genererNombreEntier(1001);

let coups = 0;
let nombreChoisi;

// fonction de verification du nombre saisi

function verifier(nombre){
  
  let instruction = document.createElement('div');
  
  if(nombre < nombreAleatoire){
    instruction.textContent = "#"+coups+" ("+nombre+") c'est plus !";
    instruction.className = "instruction plus";
    
  }
  else if(nombre > nombreAleatoire){
    instruction.textContent = "#"+coups+" ("+nombre+") c'est moins !";
    instruction.className = "instruction moins";
  }
  else{
    instruction.textContent = "#"+coups+" ("+nombre+") Félicitations vous avez trouvé le juste prix !";
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  
  // ajouter l'élément sur les indications du nombre
  
  document.querySelector("#instructions").prepend(instruction);
    
}


// On vérifie que l'utilisateur rentre bien un nombre

input.addEventListener('keyup', () => {
  if(isNaN(input.value)){
    error.style.display = "inline";
  }
  else{
    error.style.display = "none";   
  }
});

// Actions à faire une fois le formulaire envoyé

formulaire.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if(isNaN(input.value) || input.value == ''){
    input.style.borderColor = "red";
  }
  
  else{
    coups++;
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = '';
    verifier(nombreChoisi);
  } 
});