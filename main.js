function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador);
    

    const inAudio = `#sonido_${instrumento}`;
    console.log(inAudio);
    
    
    tecla.onclick = function (){
        playSonido(inAudio);
    };
    tecla.onkeydown = function (evento){
        console.log(evento.code === 'Space');
        

        if('espacio'){
            tecla.classList.add('activa');
        }
        
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('activa');
    }
    
}
