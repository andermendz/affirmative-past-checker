document.getElementById('validate').addEventListener('click', function() {
    const sentence = document.getElementById('sentence').value;
    const result = document.getElementById('result');

    const subjectRegex = /^(The\s[a-z]+|[A-Z][a-z]*|I|You|He|She|It|We|(This|That|These|Those)\s[a-z]+)\s/i;
    const predicateRegex = /(was|were)\s[a-z\s]*$/i;
    

    if (subjectRegex.test(sentence) && predicateRegex.test(sentence)) {
        result.textContent = 'The sentence is valid.';
        result.style.color = 'green';
    } else {
        result.textContent = 'The sentence is not valid.';
        result.style.color = 'red';
    }
});
