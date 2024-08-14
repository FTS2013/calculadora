
function somarInputs() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var resultado = input1 + input2;

    document.getElementById('resultado1').textContent = ' A sua soma é igual a: ' + resultado;
}


function subtrairInputs() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var resultado = input1 - input2;

    document.getElementById('resultado1').textContent = ' A sua subtração é igual a: ' + resultado;
}


function multiplicarInputs() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var resultado = input1 * input2;

    document.getElementById('resultado1').textContent = ' A sua multiplicação é igual a: ' + resultado;
}


function dividirInputs() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var resultado = input1 / input2;

    document.getElementById('resultado1').textContent = ' A sua divisão é igual a: ' + resultado;
}

function raizInput(){
    var input3 = parseFloat(document.getElementById('input3').value);
    var resultado = Math.sqrt(input3);
    document.getElementById('resultado1').textContent = ' a raiz quadrada do número digitado é: ' + resultado;
}
