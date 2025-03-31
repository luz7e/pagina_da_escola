// Seleciona o campo de display
let display = document.getElementById('display');

// Função para limpar o display
function clearDisplay() {
    display.value = '';
}

// Função para adicionar números ao display
function appendNumber(number) {
    display.value += number;
}

// Função para adicionar operadores ao display
function appendOperator(operator) {
    display.value += operator;
}

// Função para calcular o valor no display
function calculate() {
    try {
        display.value = eval(display.value); // Calcula a expressão
    } catch (e) {
        display.value = 'Erro'; // Exibe "Erro" em caso de erro na expressão
    }
}
