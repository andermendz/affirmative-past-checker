document.getElementById('add').addEventListener('click', function() {
    const sentences = document.getElementById('sentences');
    const sentenceDiv = document.createElement('div');
    sentenceDiv.className = 'sentence flex items-center';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'remove px-1 py-0.5 bg-red-500 text-white rounded';
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
    const sentences = document.getElementsByClassName('sentence');
    let score = 0;

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].getElementsByTagName('input')[0].value;
        const result = sentences[i].getElementsByClassName('result')[0];

        const subjectRegex = /^(The\s[a-z]+|[A-Z][a-z]*|I|You|He|She|It|We|(This|That|These|Those)\s[a-z]+)\s/i;
        const verbRegex = /\s(am|are|is|was|were)\s/i;
        const complementRegex = /\s(am|are|is|was|were)\s[a-z\s]*$/i;

        if (!subjectRegex.test(sentence)) {
            result.textContent = 'Falta el sujeto en la frase.';
            result.style.color = 'red';
        } else if (!verbRegex.test(sentence)) {
            result.textContent = 'Falta el verbo en la frase.';
            result.style.color = 'red';
        } else if (!complementRegex.test(sentence)) {
            result.textContent = 'Falta el complemento en la frase.';
            result.style.color = 'red';
        } else {
            result.textContent = 'La frase es válida.';
            result.style.color = 'green';
            score++;
        }
    }

    const scoreElement = document.getElementById('score');
    const scoreValue = ((score / sentences.length) * 5).toFixed(1);
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
