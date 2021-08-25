//Solicitando nomes dos times 
const nomeTimeA = prompt('Digite o nome do time A');
const nomeTimeB = prompt('Digite o nome do time B');

//Atribuição nas variáveis 
const nomeA_HTML = document.getElementById('nomeTimeA');
const nomeB_HTML = document.getElementById('nomeTimeB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const adcA = document.getElementById('adicionarA');
const subA = document.getElementById('subtrairA');
const adcB = document.getElementById('adicionarB');
const subB = document.getElementById('subtrairB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

//Inserindo o nome dos time A e B no HTML
nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

//Variáveis e arrays 
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
let arrayDePontosA = [];
let arrayDePontosB = [];
let totalDePontosA = 0;
let totalDePontosB = 0;

//Inserindo pontuação da variável no HTML
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

//Evento de click no botão Time A
adcA.addEventListener('click', function () {
    //o que estiver aqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
});

subA.addEventListener('click', function () {
    //o que estiver aqui dentro será executado
    //quando o pontoA_HTML for clicado
    verificarPlacar();
    pontoA = pontoA - 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
});

//Evento de click do botão do time B 

adcB.addEventListener('click', function () {
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
});

subB.addEventListener('click', function () {
    verificarPlacar();
    pontoB = pontoB - 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
});

//Função para verificar o fim do Set 
function verificarFimDoSet() {
    if (pontoA >= 21 && pontoA - pontoB >= 2) {
        alert(`Time ${nomeTimeA} venceu o set`);
        setA = setA + 1; //soma um ao valor anterior do set
        setA_HTML.innerText = setA; //exibe na tela
        salvarPlacarDoSetAnterior();
        ZerarPontuacao();
        verificarFimDoJogo();
    }

    if (pontoB >= 21 && pontoB - pontoA >= 2) {
        alert(`Time ${nomeTimeB} venceu o set`);
        setB = setB + 1;
        setB_HTML.innerText = setB;
        salvarPlacarDoSetAnterior();
        ZerarPontuacao();
        verificarFimDoJogo();
    }
}

//Função para verificar o fim do Jogo
function verificarFimDoJogo() {
    if (setA == 2) {
        //timeA ganhou o jogo
        for (let item of arrayDePontosA) {
            totalDePontosA = 21;
            totalDePontosA = totalDePontosA + item;
        }
        alert(`Parabéns!!! ${nomeTimeA} venceu o jogo fazendo ${totalDePontosA} pontos!`);
        ZerarSet();       
    }

    if (setB == 2) {
        //timeB ganhou o jogo
        alert(`${nomeTimeB} venceu o jogo!`);
        for (let item of arrayDePontosB) {
            totalDePontosB = 21;
            totalDePontosB = totalDePontosB + item;
        }
        alert(`Parabéns!!! ${nomeTimeB} venceu o jogo fazendo ${totalDePontosB} pontos!`);
        ZerarSet();
    }
}


//Função para salvar
function salvarPlacarDoSetAnterior() {
    //salvar a pontuacao do set nos arrays
    //console.log(pontoA);
    arrayDePontosA.push(pontoA);
    //console.log(pontoB);
    arrayDePontosB.push(pontoB);
}

function ZerarPontuacao() {
    //zerar a pontuacao de cada set
    pontoA = 0;
    pontoB = 0

    //atualizar na tela
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;

}

function ZerarSet() {
    if (setA == 2) {
        setA = 0;
        setA_HTML.innerText = setA;
        setB = 0;
        setB_HTML.innerText = setB;
    } else if(setB == 2) {
        setB = 0;
        setB_HTML.innerText=setB;
        setA = 0;
        setA_HTML.innerText = setA;
    }
}

function verificarPlacar() {
    //Somente verifica se os pontos for igual a zero, depois adiciona dentro do evento de click
    let i = 0;
    if (i == pontoA) {
        pontoA++;
    }

    if (i == pontoB) {
        pontoB++;
    }


    //let i = 0;
    //while(i == pontoA){
    // adcA++;
    // }

}















//_-----------

// function darOiParaAlguem(nome) {
//     alert(`Oi, ${nome}`);
//     console.log('Mensagem no console');
// }

// darOiParaAlguem('Iago');
// darOiParaAlguem('Andrey');
// darOiParaAlguem('Juliete');





