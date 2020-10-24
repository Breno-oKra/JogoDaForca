//--------- criar um campo para cada letra da palavra que o jogaodr digitou--------------------------------
function dividePalavra(input){
    
    for (let i = 0; i < input.length; i++) {
        if((input[i] !== " ") && (input[i] !== "-") && (input[i] !== "_") && (input[i] !== ".")){
            palavra.push(input[i])
            var encapuslar = document.createElement("div")
            encapuslar.setAttribute("class","linhasBottom")
            var td = document.createElement("div")
            td.setAttribute("class", `${input[i]}`)
            td.innerText = `${input[i]}`
            encapuslar.appendChild(td)
            tablePalavras.appendChild(encapuslar)
        }else{
            palavra.push("-")
            controleLenghtPalavra = controleLenghtPalavra + 1
            var encapuslar = document.createElement("div")
            encapuslar.setAttribute("class","linhasBottomSpace")
            var td = document.createElement("div")
            td.setAttribute("class", `espace`)
            td.innerText = "-"
            encapuslar.appendChild(td)
            tablePalavras.appendChild(encapuslar)
        }
       
        
        
   }
}

//________________________________________________________________________________________________________________________



//--------------- Mostrar as letras erradas-------------------------------
//---------recebe da function errosa letra digitada errada
function marcarLetraErrada(letra){
    var campoLetrasErradas = document.createElement("div")
    campoLetrasErradas.setAttribute("class","boxLetrasErradas")

    var letras = document.createElement("p")
    letras.innerText = letra

    campoLetrasErradas.appendChild(letras)
    letrasErradas.appendChild(campoLetrasErradas)
}
//________________________________________________________________________________________________________________________

//--------------- mostrar Letra caso acerte---------------------------------
function mostrarLetra(item){
    
    if(item == jogadorDigta.value ){
        $(`.${item}`).show()

        contadorDpontos = contadorDpontos + 1
        mostrarVencedor()
        
    }
    
}    
//________________________________________________________________________________________________________________________ 
//-------------------------------esconde cada letra de variavel Palavra e mostra caso for espaço---------------------
function esconderItem(item){
    if(item !== " "){
        $(`.${item}`).hide()
    }else{
        $(`.${item}`).show()
    }
   
}
//________________________________________________________________________________________________________________________

//------------ mostra o player vencedor--------------------------------------------------------------------------
function mostrarVencedor(){
    
    if(contadorDpontos == palavra.length - controleLenghtPalavra){
        if(controleDplayer == 0){
            
            controleDplayer = 1
            
            pontosPlay2 = pontosPlay2 + 1
            pontosJogador2.innerText = pontosPlay2
            modal("play2")
        }
        else{
            controleDplayer = 0
            
            pontosPlay1 = pontosPlay1 + 1
            pontosJogador1.innerText = pontosPlay1
            modal("play1")
            
        }
    }
    if(contadorDeErros == 6){
        palavra.forEach(item =>{
            $(`.${item}`).show()
            
        })
        if(controleDplayer == 0){
            controleDplayer = 1
            
            pontosPlay1 = pontosPlay1 + 1
            pontosJogador1.innerText = pontosPlay1
            modal("play1")
        }
        else{
            controleDplayer = 0   
            pontosPlay2 = pontosPlay2 + 1
            pontosJogador2.innerText = pontosPlay2 
            modal("play2")
        }
        
    }
}
//___________________________________________________________________________________________