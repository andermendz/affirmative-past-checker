document.getElementById('validateAll').addEventListener('click', function() {
    const sentences = document.querySelectorAll('.sentence');
    let score = 0;
    let validSentences = 0;

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

        if (input.value.trim() !== '') {
            validSentences++;
            if ((singularSubjects.includes(subject) && verb === singularVerb) || 
                (pluralSubjects.includes(subject) && verb === pluralVerb) ||
                (!singularSubjects.includes(subject) && !pluralSubjects.includes(subject) && subject[subject.length-1] !== 's' && verb === singularVerb) ||
                (!singularSubjects.includes(subject) && !pluralSubjects.includes(subject) && subject[subject.length-1] === 's' && verb === pluralVerb) ||
                (subject[0] === subject[0].toUpperCase() && verb === singularVerb)) {
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
