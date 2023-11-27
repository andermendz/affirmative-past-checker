
document.getElementById('add').addEventListener('click', function() {
    const sentences = document.getElementById('sentences');
    const sentenceDiv = document.createElement('div');
    sentenceDiv.className = 'sentence flex items-center ';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'remove text-xs px-1 py-0.5 bg-red-500 text-white rounded';
    removeButton.addEventListener('click', function() {
        sentences.removeChild(sentenceDiv);
    });
    sentenceDiv.appendChild(removeButton);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'mt-2 ml-2 flex-grow rounded-md border-gray-300 shadow-sm';
    sentenceDiv.appendChild(input);

    const result = document.createElement('p');
    result.className = 'result mt-2 ml-2 text-gray-500 text-sm';
    sentenceDiv.appendChild(result);

    sentences.appendChild(sentenceDiv);
});


document.getElementById('validateAll').addEventListener('click', function() {
    const sentences = document.querySelectorAll('.sentence');
    let score = 0;
    let validSentences = 0;

    const singularPattern = /^(i|he|she|it|this|that|the\s[a-z]+[^s])\swas/i;
    const pluralPattern = /^(you|we|they|these|those|the\s[a-z]+s)\swere/i;

    sentences.forEach(sentence => {
        const input = sentence.querySelector('input');
        const result = sentence.querySelector('.result');

        if (input.value.trim() !== '') {
            validSentences++;
            if (singularPattern.test(input.value) || pluralPattern.test(input.value)) {
                result.textContent = 'La frase es válida.';
                result.style.color = 'green';
                score++;
            } else {
                result.textContent = 'La frase no es válida.';
                result.style.color = 'red';
            }
        }
    });

    const scoreElement = document.getElementById('score');
    const scoreValue = ((score / validSentences) * 5).toFixed(1);
    scoreElement.textContent = 'Puntuación: ' + scoreValue;

    const motivationalMessageElement = document.getElementById('motivationalMessage');
    if (scoreValue >= 4) {
        motivationalMessageElement.textContent = '¡Excelente trabajo! Sigue así.';
    } else if (scoreValue >= 3) {
        motivationalMessageElement.textContent = 'Buen trabajo, pero puedes hacerlo mejor.';
    } else {
        motivationalMessageElement.textContent = 'No te desanimes, sigue intentándolo.';
    }
});




var openModal = document.querySelector('#openModal');
var closeModal = document.querySelector('.modal-close');
var modal = document.querySelector('.modal');

openModal.addEventListener('click', function() {
    modal.classList.remove('opacity-0');
    modal.classList.remove('pointer-events-none');
    document.body.classList.add('modal-active');
});

closeModal.addEventListener('click', function() {
    modal.classList.add('opacity-0');
    modal.classList.add('pointer-events-none');
    document.body.classList.remove('modal-active');
});
