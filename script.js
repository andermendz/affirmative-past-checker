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
    const sentences = document.getElementsByClassName('sentence');
    let score = 0;

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i].getElementsByTagName('input')[0].value;
        const result = sentences[i].getElementsByClassName('result')[0];

        const subjectRegex = /^(The\s[a-z]+|[A-Z][a-z]*|I|You|He|She|It|We|(This|That|These|Those)\s[a-z]+)\s/i;
        const verbRegexSingular = /\s(am|is|was)\s/i;
        const verbRegexPlural = /\s(are|were)\s/i;
        const complementRegex = /\s(am|are|is|was|were)\s[a-z\s]*$/i;

        if (!subjectRegex.test(sentence)) {
            result.textContent = 'Falta el sujeto en la frase.';
            result.style.color = 'red';
        } else if (subjectRegex.test(sentence) && !verbRegexSingular.test(sentence) && !verbRegexPlural.test(sentence)) {
            result.textContent = 'Falta el verbo en la frase.';
            result.style.color = 'red';
        } else if (subjectRegex.test(sentence) && verbRegexSingular.test(sentence) && sentence.match(subjectRegex)[0].endsWith('s ')) {
            result.textContent = 'El sujeto y el verbo no concuerdan. El sujeto es plural pero el verbo es singular.';
            result.style.color = 'red';
        } else if (subjectRegex.test(sentence) && verbRegexPlural.test(sentence) && !sentence.match(subjectRegex)[0].endsWith('s ')) {
            result.textContent = 'El sujeto y el verbo no concuerdan. El sujeto es singular pero el verbo es plural.';
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
