let ville = 'Paris';
recupererTemperature(ville);

function recupererTemperature(ville){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=44ad64c1a85e2631507931a6945276d9&units=metric';
    
    let requete = new XMLHttpRequest();
    
    requete.open('GET',url);
    
    requete.responseType = 'json';
    
    requete.send();
    
    requete.onload = function(){
      if(requete.readyState === requete.DONE){
        if(requete.status === 200){
          reponse = requete.response;
          
          let villeAChoisir = document.querySelector('#ville');
          
          villeAChoisir.textContent = ville;
          
          let temperature = document.querySelector('#temperature_label');
          
          temperature.textContent = reponse.main.temp;
        }
      }
    }
    
    console.log('ville et température actualisée');
  }
  
  setInterval(recupererTemperature,5000);
  
  let changer = document.querySelector('#changer');
  
  changer.addEventListener('click', ()=>{
    let villeChoisie = prompt('êtes vous sur de chosir cette ville ?');
     if(villeChoisie){
       recupererTemperature(villeChoisie);    
     } 
  });