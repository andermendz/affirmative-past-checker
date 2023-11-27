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

    const singularSubjects = ["i", "he", "she", "it", "this", "that"];
    const pluralSubjects = ["you", "we", "they", "these", "those"];
    const singularVerb = "was";
    const pluralVerb = "were";

    sentences.forEach(sentence => {
        const input = sentence.querySelector('input');
        const result = sentence.querySelector('.result');

        const words = input.value.toLowerCase().split(' ');
        let subject = words[0];
        let verb = words[1];

        if (subject === 'the') {
            subject = words[1];
            verb = words[2];
        }

        const singularSubjectRegex = new RegExp(`^(${singularSubjects.join('|')})$`);
        const pluralSubjectRegex = new RegExp(`^(${pluralSubjects.join('|')})$`);

        if ((singularSubjectRegex.test(subject) && verb === singularVerb) || 
            (pluralSubjectRegex.test(subject) && verb === pluralVerb) ||
            (subject[subject.length - 1] !== 's' && verb === singularVerb) ||
            (subject[subject.length - 1] === 's' && verb === pluralVerb)) {
            result.textContent = 'La frase es válida.';
            result.style.color = 'green';
            score++;
        } else {
            result.textContent = 'La frase no es válida.';
            result.style.color = 'red';
        }
    });

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
