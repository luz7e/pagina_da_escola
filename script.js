let resultado = '';

function adicionarNumero(num) {
    resultado += num;
    document.getElementById('display').value = resultado;
}

function operar(operador) {
    resultado += ' ' + operador + ' ';
    document.getElementById('display').value = resultado;
}

function limpar() {
    resultado = '';
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        resultado = eval(resultado).toString();
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
        resultado = '';
    }
}