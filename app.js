'use strict'

const recognition = new webkitSpeechRecognition()
recognition.continuous = true
recognition.interimResults = true

recognition.onstart = function() {
    console.log('O reconhecimento de voz começou!');
}

recognition.onresult = function(event) {
    // Obtém o resultado do reconhecimento de voz
    const result = event.results[event.resultIndex];
    // Obtém a transcrição da fala
    const transcript = result[0].transcript;
    // Exibe a transcrição da fala no console
    console.log(`Você disse: ${transcript}`);
}

const btnComecar = document.getElementById('comecar')
btnComecar.addEventListener('click', recognition.start())