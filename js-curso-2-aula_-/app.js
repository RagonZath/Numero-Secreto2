let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1 ;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'escreva um número entre 1 a 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!') ;
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
        }
        else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }
};
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;
    if (quantidadeElementosLista == 10) {
        listaNumerosSorteados =[];
    };

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
};
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};
function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};