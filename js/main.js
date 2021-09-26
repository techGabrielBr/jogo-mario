const areaJogo = document.querySelector('.areaJogo');
const personagem = document.querySelector('.personagem');
const bloco = document.querySelector('.bloco');
const blocoInimigo = document.querySelector('.bloco__inimigo');
const iniciar = document.querySelector('.iniciar')

let textoControle = document.querySelector('.textoControle');
let bntJogo = document.querySelector('.bntJogo');

let placarAtual = document.querySelector('.placar__atual');
let placarMaior = document.querySelector('.placar__maior');

let contadorMaior = 0;
let contadorPlacar = 0;
let pararPlacar = true;

function pular(){
    if(personagem.classList != 'pular'){
        personagem.classList.add('pular');
        personagem.style.backgroundImage = 'url(./images/marioJump.png)';
    }

    setTimeout(function(){
        personagem.classList.remove('pular');
        personagem.style.backgroundImage = 'url(./gifs/MarioRunGif.gif)';
    }, 500);

}

areaJogo.addEventListener('click', pular);

let fimDeJogo =  setInterval( function(){
    let posicaoPersonagem = parseInt(window.getComputedStyle(personagem).getPropertyValue('bottom'));
    let posicaoBloco = parseInt(window.getComputedStyle(bloco).getPropertyValue('left'));
    let posicaoBlocoInimigo = parseInt(window.getComputedStyle(blocoInimigo).getPropertyValue('left'));

    if(((posicaoBloco > 0 && posicaoBloco < 50) || (posicaoBlocoInimigo > 0 && posicaoBlocoInimigo < 50)) 
        && (posicaoPersonagem < 70)){
        
        bloco.classList.remove('movimentarBloco');
        blocoInimigo.classList.remove('movimentarBlocoInimigo');

        textoControle.innerHTML = 'Você Perdeu, Tente Novamente !';
        
        iniciar.style.visibility = 'visible';
        
        bntJogo.innerHTML = 'Reiniciar Jogo';
        
        alert("Seu personagem bateu no bloco !");
        
        pararPlacar = true;

        if(contadorPlacar > contadorMaior){
            contadorMaior = contadorPlacar
            placarMaior.innerHTML = contadorMaior;
        }
        
        contadorPlacar = 0;

        personagem.style.backgroundImage = 'url(./gifs/MarioLose.gif)';
    } 

}, 10);

let placar = setInterval(function(){
        if(pararPlacar == false){
            contadorPlacar++;
            placarAtual.innerHTML = contadorPlacar;
        } else{
            placarAtual.innerHTML = '0';
        }
}, 120);

function comecarJogo(){
    pararPlacar = false;

    contadorPlacar = 0;

    iniciar.style.visibility = 'hidden';
    
    bloco.classList.add('movimentarBloco');
    blocoInimigo.classList.add('movimentarBlocoInimigo');
}

bntJogo.addEventListener('click', comecarJogo);


