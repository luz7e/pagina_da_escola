let display = document.getElementById('display');
let expression = "";

function adicionar(valor) {
    if (display.innerText === "Erro") {
        expression = "";
        display.innerText = "";
    }
    expression += valor;
    display.innerText = expression;
}

function limpar() {
    expression = "";
    display.innerText = "0";
}

function calcular() {
    try {
        if (expression === "") {
            display.innerText = "Erro";
        } else {
            display.innerText = eval(expression);
            expression = display.innerText;
        }
    } catch (e) {
        display.innerText = "Erro";
    }
}