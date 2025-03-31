let resultado = document.getElementById('resultado');
let operacao = '';
let valorAnterior = '';

function adicionar(numero) {
    resultado.value += numero;
}

function limpar() {
    resultado.value = '';
    operacao = '';
    valorAnterior = '';
}

function calcular() {
    let valorAtual = parseFloat(resultado.value);
    if (valorAnterior === '' || resultado.value === '') return;
    let total;
    let operador = operacao === 'x' ? '*' : operacao === 'รท' ? '/' : operacao;
    switch (operador) {
        case '+':
            total = parseFloat(valorAnterior) + valorAtual;
            break;
        case '-':
            total = parseFloat(valorAnterior) - valorAtual;
            break;
        case '*':
            total = parseFloat(valorAnterior) * valorAtual;
            break;
        case '/':
            if (valorAtual === 0) {
                resultado.value = 'Erro';
                return;
            }
            total = parseFloat(valorAnterior) / valorAtual;
            break;
        default:
            return;
    }
    resultado.value = total;
    operacao = '';
    valorAnterior = '';
}

function setOperacao(op) {
    if (resultado.value === '') return;
    if (valorAnterior !== '') {
        calcular();
    }
    operacao = op === '*' ? 'x' : op === '/' ? 'รท' : op;
    valorAnterior = resultado.value;
    resultado.value = '';
} // fwck