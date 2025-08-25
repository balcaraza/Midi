function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



let contador=0;

for (let contador = 0; contador < 9; contador++) {
     const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    

    const inAudio = `#sonido_${instrumento}`;
    console.log(inAudio);
    
    
    tecla.onclick = function (){
        playSonido(inAudio);
    };
    
}
