var contadorDpontos = 0
var controleDplayer = 0
var contadorDeErros = 0

var pontosPlay1 = 0
var pontosPlay2 = 0

//---------------------verifica se a letra digitada contem na variavel palavra---------------------
function mostrarErro(jogadorDigta){
    var achar = palavra.find(item => item == jogadorDigta)
    //se não ouver a letra chamamos erros para atualizar a forca
    if(achar == undefined){
        
        erros(jogadorDigta)
    }
}

//________________________________________________________________________________________________________

//-- recebe o digit que é a letra que o jogador digitiou, amarzena no jogadorDigita------------------
function erros(digit){
    if(contadorDeErros == 0){
        contadorDeErros = 1
        forca.setAttribute("src", "./imgs/forca2.png")
        
        marcarLetraErrada(digit)
        Campoforca.appendChild(forca)
    }
    else if(contadorDeErros == 1){
        contadorDeErros = 2
        forca.setAttribute("src", "./imgs/forca3.png")
        marcarLetraErrada(digit)
        Campoforca.appendChild(forca)
    }
    else if(contadorDeErros == 2){
        contadorDeErros = 3
        forca.setAttribute("src", "./imgs/forca4.png")
        marcarLetraErrada(digit)
        Campoforca.appendChild(forca)
    }
    else if(contadorDeErros == 3){
        contadorDeErros = 4
        forca.setAttribute("src", "./imgs/forca5.png")
        marcarLetraErrada(digit)
        Campoforca.appendChild(forca)
    }
    else if(contadorDeErros == 4){
        contadorDeErros = 5
        forca.setAttribute("src", "./imgs/forca6.png")
        marcarLetraErrada(digit)
        Campoforca.appendChild(forca)
    }
    else if(contadorDeErros == 5){
        contadorDeErros = 6
        forca.setAttribute("src", "./imgs/forca7.png")
        marcarLetraErrada(digit)
        Campoforca.appendChild(forca)
      
        mostrarVencedor()
    }
}
//______________________________________________________________________________________________________


function modal(play){
    TabelaJogadores(play)
    $(".interface").css("opacity", 0.1)
    $("#myModal").show()
    $("#Proximapartida").show()
}
function TabelaJogadores(play){

    var vencedor = document.createElement("p")
    vencedor.innerText = "Ganhou"
    vencedor.setAttribute("class", "vencedor")

    winPlay2.innerText = jogador2.value
    winPlay1.innerText = jogador1.value
   
    PontosPlay1Modal.innerText = pontosPlay1
    PontosPlay2Modal.innerText = pontosPlay2
    if(play == 'play2'){
        PontosPlay2Modal.setAttribute("class", "boxJogadorVnecedor2")
        winPlay2.setAttribute("class","nameVencedor")
        winPlay2.appendChild(vencedor)
    }else{
        PontosPlay1Modal.setAttribute("class", "boxJogadorVnecedor1")
        winPlay1.setAttribute("class","nameVencedor")
        winPlay1.appendChild(vencedor)
    }
    
}

