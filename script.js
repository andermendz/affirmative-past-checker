document.getElementById('add').addEventListener('click', function() {
    const sentences = document.getElementById('sentences');
    const sentenceDiv = document.createElement('div');
    sentenceDiv.className = 'sentence';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'mt-2 block w-full rounded-md border-gray-300 shadow-sm';
    sentenceDiv.appendChild(input);

    const result = document.createElement('p');
    result.className = 'result mt-2 text-gray-500 text-sm';
    sentenceDiv.appendChild(result);

    sentences.appendChild(sentenceDiv);
});

document.getElementById('validateAll').addEventListener('click', function() {
    const sentences = document.getElementsByClassName('sentence');

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
        }
    }
});
