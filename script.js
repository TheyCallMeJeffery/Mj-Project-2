const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Portuguese"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

function loadQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionIndex) => {
        const options = [];
        
        for (let i = 0; i < currentQuestion.options.length; i++) {
            options.push(
                `<li>
                    <label>
                        <input type="radio" name="question${questionIndex}" value="${currentQuestion.options[i]}">
                        ${currentQuestion.options[i]}
                    </label>
                </li>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <ul class="options">${options.join('')}</ul>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function submitQuiz() {
    let score = 0;

    quizData.forEach((currentQuestion, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        
        if (selectedOption && selectedOption.value === currentQuestion.answer) {
            score++;
        }
    });

    resultsContainer.innerHTML = `You got ${score} out of ${quizData.length} correct!`;
}

loadQuiz();
