let btn = document.querySelector('button');
let div = document.querySelector('div');
let hidden = true;

// Cacher le message
div.style.display = "none";

// Détecter le clic
btn.addEventListener('click', () => {
  
  if(hidden) {
    btn.textContent = "Cacher";
    div.style.display = "block";
    hidden = false;
  }
  else {
    btn.textContent = "Afficher";
    div.style.display = "none";
    hidden = true;
  }
  
});