let numberToFind = 0;
let attempts = 0;

function refresh() {
    const inputElement = document.getElementById('bet');
    inputElement.value = '';

    numberToFind = Math.floor(Math.random() * 101); 
    attempts = 0;

    console.log('Número a ser encontrado: ' + numberToFind);
    updateAttempts();
    hideReward();
}

function updateAttempts() {
    document.getElementById('attempts').innerText = `Tentativas: ${attempts}`;
}

function displayMessage(message, isSuccess = false) {
    const messageElement = document.getElementById('message');
    messageElement.innerText = message;
    messageElement.style.color = isSuccess ? 'lightgreen' : 'yellow';
}

function displayReward() {
    const rewardImage = document.getElementById('reward');
    rewardImage.src = 'https://i.pinimg.com/736x/99/e1/0c/99e10ccf7cd448c7edc95337986f443c.jpg';
    
}

function hideReward() {
    const rewardImage = document.getElementById('reward');
    rewardImage.style.display = 'none';
}

function verifyNumber() {
    const inputElement = document.getElementById('bet');
    const bet = parseInt(inputElement.value);

    if (isNaN(bet) || bet < 0 || bet > 100) {
        displayMessage('Por favor, insira um número válido entre 0 e 100.');
        return;
    }

    attempts++;

    if (bet > numberToFind) {
        displayMessage('🚨 O número é MENOR. Tente novamente!');
    } else if (bet < numberToFind) {
        displayMessage('🚨 O número é MAIOR. Tente novamente!');
    } else {
        displayMessage(`✅ Parabéns! Você acertou em ${attempts} tentativas!`, true);
        displayReward(); 
        refresh();
        rewardImage.style.display = 'block';
    }

    updateAttempts();
}

document.getElementById('submit').addEventListener('click', verifyNumber);

refresh();
