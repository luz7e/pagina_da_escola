let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("screen").value = currentInput;
}

function appendOperator(operator) {
    currentInput += " " + operator + " ";
    document.getElementById("screen").value = currentInput;
}

function clearScreen() {
    currentInput = "";
    document.getElementById("screen").value = currentInput;
}

function calculateResult() {
    try {
        // Substituindo x e / por * e / para avaliação correta
        currentInput = currentInput.replace(/x/g, "*");
        currentInput = currentInput.replace(/÷/g, "/");
        
        let result = eval(currentInput);
        document.getElementById("screen").value = result;
        currentInput = result.toString();
    } catch (e) {
        document.getElementById("screen").value = "Erro";
        currentInput = "";
    }
}
