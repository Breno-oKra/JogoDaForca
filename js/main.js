//-------- esconde as div iniciais----------------------------------
$("#Game").hide()
$("#camPoJogadorDigita").hide()
$("#Proximapartida").hide()
$("#myModal").hide()
//__________________________________________________________________


var controleLenghtPalavra = 0
//------------- valores -------------------------------------------
var jogador1 = document.getElementById("player1")
var jogador2 = document.getElementById("player2")
var inputPalavra = document.getElementById("inputPalavra")
var jogadorDigta = document.getElementById("jogadorDigta")

//----variaveis de controle de palavras-----------------------------------------------------------
var palavra = []
var letrasDigitadas = []
//________________________________________________________________________________________

//---------------------recupera os campos do placar de pontos--------------------------------------
var nameJogador1 = document.getElementById("nameJogador1")
var nameJogador2 = document.getElementById("nameJogador2")
var pontosJogador1 = document.getElementById("pontosJogador1")
var pontosJogador2 = document.getElementById("pontosJogador2")
//______________________________________________________________________________________________

//--------------------recupera os campos do placar de pontos da modal-------------------------------
var PontosPlay1Modal = document.getElementById("PontosPlay1-modal")
var PontosPlay2Modal = document.getElementById("PontosPlay2-modal")
var winPlay2 = document.getElementById("nameJogador2-modal")
var winPlay1 = document.getElementById("nameJogador1-modal")
//______________________________________________________________________________________________


//------ recupera os campos das letras,forca,tablePlavras--------------------------------------

//table palavras é o campo onde será inserido cada letra da plavra escolhida
var tablePalavras = document.getElementById("tablePalavras")
var Campoforca = document.getElementById("forca")
var letrasErradas = document.getElementById("letrasErradas")
//______________________________________________________________________________________________


//---------------- cria a  forca de inicio-----------------------------------------------------
var forca = document.createElement("img")
forca.setAttribute("src", "./imgs/forca1.png")
forca.setAttribute("class", "imgForca")
Campoforca.appendChild(forca)
//______________________________________________________________________________________________


//------------------------- varifica nomes dos jogadores-----------------------------

function verificaNomes(){
 
    if((jogador1.value !== undefined) && (jogador1.value !== "") && (jogador2.value !== undefined) && jogador2.value !== ""){
        $("#Modal_1-names").hide()
        $("#Game").slideDown(3000)
        document.getElementById("nameJogador2").innerText = jogador2.value
        document.getElementById("nameJogador1").innerText = jogador1.value
        if(controleDplayer == 0){
            vezPlayer1()
        }else{
            vezPlayer2()
        }
        
       
    }
}
//------------------------- recupera Palavra que o jogador digitou -----------------------------
function recuperaPalavra(){

    if((inputPalavra.value !== undefined) && (inputPalavra.value !== "")){
        
        if(controleDplayer == 0){
            var imgJogador2 = document.createElement("img")
            imgJogador2.setAttribute("src", "./imgs/img_jogador-2.png")
            imgJogador2.setAttribute("width", "100")
            imgRespondePlayer.appendChild(imgJogador2)
        }
        if(controleDplayer == 1){
            var imgJogador1 = document.createElement("img")
            imgJogador1.setAttribute("src", "./imgs/img_jogador-1.png")
            imgJogador1.setAttribute("width", "100")
            imgRespondePlayer.appendChild(imgJogador1)
        }
    
        var len = palavra.length
        palavra.splice(0,len)
        
        
        // ------------------------ retirando letras anteriores --------------------------------------

        // haschildNotes verifica se a childs(apendchild)
        while (tablePalavras.hasChildNodes()) {  
            //enquanto tive child removeremos o indice 1(firstChild ou [0]) até nao ficar mais nem um
            tablePalavras.removeChild(tablePalavras.firstChild);
        }

        // -----------------------------------------------------------------------------------------
    
        $('#inputPalavra').attr("disabled", true);
        $('#inputPalavra').css("background-color", "#aaa69d"); 
        dividePalavra(inputPalavra.value)
        palavra.forEach(esconderItem)
        $("#camPoJogadorDigita").slideDown()
        
        
    }  

}
//----------------------------------------------------------------------------------------

//------------------- recupera letra que o jogador digitou--------------------------------
function digitoJogador(){
    
    var armazanar = letrasDigitadas.find(item => item == jogadorDigta.value)
    if ((jogadorDigta.value !== " ") && (jogadorDigta.value !== "")) {

        if(armazanar == undefined){
            if(jogadorDigta.value == inputPalavra.value){
                palavra.forEach(item =>{
                    $(`.${item}`).show()
                    
                })
                contadorDpontos = palavra.length - controleLenghtPalavra
                mostrarVencedor()
            }else{
                palavra.forEach(mostrarLetra) 
                mostrarErro(jogadorDigta.value)
                letrasDigitadas.push(jogadorDigta.value)
                jogadorDigta.value = ""
            }

        }      

    }
   
        
}
//----------------------------------------------------------------------------------------

//----------------------Rezera Tudo para uma nova partida----------------------------------
function ProximaPartida(){
    rezetaInfos()
     $("#Modal_1-names").hide()
     $("#Game").show()
     if(controleDplayer == 0){
         vezPlayer1()
     }else{
         vezPlayer2()
     }
 
 }
 function rezetaInfos(){
 
     
     while ((imgPlay.hasChildNodes()) && (names.hasChildNodes())){  
         //enquanto tive child removeremos o indice 1(firstChild ou [0]) até nao ficar mais nem um
         imgPlay.removeChild(imgPlay.firstChild);
         names.removeChild(names.firstChild);
         
     }
     while (tablePalavras.hasChildNodes()) {  
         //enquanto tive child removeremos o indice 1(firstChild ou [0]) até nao ficar mais nem um
         tablePalavras.removeChild(tablePalavras.firstChild);
     }
     while (letrasErradas.hasChildNodes()) {  
         //enquanto tive child removeremos o indice 1(firstChild ou [0]) até nao ficar mais nem um
         letrasErradas.removeChild(letrasErradas.firstChild);
     }
     while ((imgRespondePlayer.hasChildNodes()) && (winPlay2.hasChildNodes()) && (winPlay1.hasChildNodes())) {  
         //enquanto tive child removeremos o indice 1(firstChild ou [0]) até nao ficar mais nem um
         imgRespondePlayer.removeChild(imgRespondePlayer.firstChild);
         winPlay1.removeChild(winPlay1.firstChild);
         winPlay2.removeChild(winPlay2.firstChild);
     }
     forca.setAttribute("src", "./imgs/forca1.png")
     forca.setAttribute("class", "imgForca")
     Campoforca.appendChild(forca)
     PontosPlay1Modal.setAttribute("class", "pontosJogador1-modal")
     PontosPlay2Modal.setAttribute("class", "pontosJogador2-modal")
     jogadorDigta.value = "" 
     inputPalavra.value = ""
     controleLenghtPalavra = 0
     contadorDpontos = 0
     contadorDeErros = 0
     letrasDigitadas = []
     $("#Game").hide()
     $("#Proximapartida").hide()
     $("#camPoJogadorDigita").hide()
     $('#inputPalavra').attr("disabled", false);
     $('#inputPalavra').css("background-color", "#ffffff"); 
     $("#myModal").hide()
     $(".interface").css("opacity",1)
 }
 //--------------------------------------------------------------------------------------------------
//-------- recupera Campos dos jogadores -- Jogador1 -----------------

var names = document.getElementById("name")
var imgPlay = document.getElementById("imgPlay")
var imgRespondePlayer = document.getElementById("imgRespondePlayer")

function vezPlayer1(){
    var img = document.createElement("img")
    var nami = document.createElement("p")
    img.setAttribute("src", "./imgs/img_jogador-1.png")
    img.setAttribute("width", "50%")
    console.log("breno")
    nami.innerHTML = `<h4> vez de ${jogador1.value}</h4>`

    imgPlay.appendChild(img)
    names.appendChild(nami)
    

    
}

//-------- recupera Campos dos jogadores -- Jogador2 -----------------
function vezPlayer2(){
    var img = document.createElement("img")
    var nami = document.createElement("p")
    img.setAttribute("src", "./imgs/img_jogador-2.png")
    img.setAttribute("width", "50%")
  
    nami.innerHTML = `<h4> vez de ${jogador2.value}</h4>`

    imgPlay.appendChild(img)
    names.appendChild(nami)
    

    
}
//--------------------------------------------------------------------












