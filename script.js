document.getElementById("display").value = "0";


function appendCharacter(caracter) {
    let display = document.getElementById('display');
    if (display.value === "0") {
        display.value = caracter; 
    } else {
        display.value += caracter; 
    }
}


function clearDisplay() {
    document.getElementById('display').value = '0';
}


function deleteLast() {
    let display = document.getElementById('display').value;
    if (display.length > 1) {
        document.getElementById('display').value = display.substring(0, display.length - 1);
    } else {
        document.getElementById('display').value = '0';  
    }
}


function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        
        let result = eval(display.replace('x', '*')); 
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}