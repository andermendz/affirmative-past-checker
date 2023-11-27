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
        } else {
            result.textContent = ''; // Borra el mensaje anterior si la cadena está vacía
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


// Cuando se abre el modal
document.getElementById("openModal").addEventListener("click", function () {
    var names = ["Anderson Mendoza", "Daniel Ortiz", "Luis Cantillo", "Carlos Barrera", "Juan Ojeda"];
    var namesList = document.getElementById("names");
    namesList.innerHTML = "";
    names.forEach(function (name) {
        var li = document.createElement("li");
        li.textContent = name;
        namesList.appendChild(li);
    });
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.style.zIndex = "1000"; // Asegúrate de que el modal esté por encima del subcontenedor
    setTimeout(function () {
        modal.classList.add("show");
    }, 20);
  
    // Asegúrate de que el subcontenedor esté debajo del modal
    var subContainer = document.querySelector(".sub-container");
    subContainer.style.zIndex = "500";
});
  
// Cuando se cierra el modal
document.getElementById("closeModal").addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(function () {
        modal.style.display = "none";
    }, 0);
});
