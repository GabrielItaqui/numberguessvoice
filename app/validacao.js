function verificaValorValido(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }

    if (numeroMaiorOuMenorQueLimite(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="refresh" class="botao-refresh">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'refresh'){
        window.location.reload
    }
})