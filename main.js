let num1, num2, operator, correctAnswer;
let score=0;

const operators = ["+", "-", "*"];

function checkAnswer() {
    answer = document.getElementById("answer").value
    if (answer == correctAnswer) {
        score++;
        document.getElementById("score").innerHTML = score;
        if (score == 5) {
            document.getElementById("div-questions").style.display = "none";
            document.getElementById("div-success").style.display = "block";
        } else {
            document.getElementById("message").innerHTML = "Correct!";
            document.getElementById("message").style.color = "green";
            document.getElementById("question").innerHTML = generateQuestion();
        }
    } else {
        document.getElementById("message").innerHTML = `Wrong! Correct answer is ${correctAnswer}`;
        document.getElementById("message").style.color = "red";
        document.getElementById("question").innerHTML = generateQuestion();
    }
    document.getElementById("answer").value = "";
}

function playAgain() {
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    document.getElementById("message").innerHTML = "";
    document.getElementById("question").innerHTML = generateQuestion();
}

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    numOperator = Math.floor(Math.random() * 3);
    operator = operators[numOperator];
    correctAnswer = eval(`${num1} ${operator} ${num2}`);
    return `${num1} ${operator} ${num2}`;
}