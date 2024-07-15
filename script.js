var altura = 0
var largura = 0
var saude = 3
var tempo = 5

var cronometro = setInterval(function(){
    if (tempo == 0){
        window.location.href='game_over.html'
        localStorage.setItem('resultado', 'victory');
    }else{
        tempo--
        document.getElementById('temporizador').innerHTML = tempo
    }
    
    
}, 1000)

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo()

function teemoRandom(){
    

    if(document.getElementById('teemo')){
        document.getElementById('teemo').remove()
    
        vida(saude)
    }

    var posicaoX = (Math.floor(Math.random() * largura) - 90)
    var posicaoY = (Math.floor(Math.random() * altura) - 90)
    var teemo = document.createElement('img')

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    teemo.src = 'imagens/teemo.png'
    teemo.className = teemoTamanho() + ' ' + teemoLado()
    teemo.style.left = posicaoX+'px'
    teemo.style.top = posicaoY+'px'
    teemo.style.position = 'absolute'
    teemo.id = 'teemo'
    teemo.onclick = function(){
        this.remove()
    }

    document.body.appendChild(teemo)
}

function teemoTamanho(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'teemo1'

        case 1:
            return 'teemo2'

        case 2:
            return 'teemo3'

    }
}

function teemoLado(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}

function vida(){
    switch(saude){
        case 3:
            document.getElementById('painel_img').src="imagens/vida-2-3.png"
            saude--
            return
        
        case 2:
            document.getElementById('painel_img').src="imagens/vida-1-3.png"
            saude--
            return

        case 1:
            document.getElementById('painel_img').src="imagens/vida-0-3.png"
            teemo = document.getElementById('script')
            teemo.remove()
            setTimeout(function(){
                window.location.href='game_over.html'
            }, 1000)
            
    }
}
