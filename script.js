var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalcoJogo()

function teemoRandom(){

    if(document.getElementById('teemo')){
        document.getElementById('teemo').remove()
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

