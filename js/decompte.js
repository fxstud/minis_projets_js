let button = document.querySelector('button');
let seconde = 10;
let intervall;

button.addEventListener('click', start);

function start(){
    intervall = setInterval(decompte,1000);
}

function stop(){
    clearInterval(intervall);
    document.body.innerHTML+="Stop !"
}

function decompte(){

    seconde--;
    if(seconde != 0){
        document.body.innerHTML+=seconde+'<br>';
    }
    else{
        stop();
    }
}