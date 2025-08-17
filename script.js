function play(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    let resultMessage = `
        <p><strong>You:</strong> ${userChoice}</p>
        <p><strong>Computer:</strong> ${computerChoice}</p>
    `;

    if (userChoice === computerChoice) {
        resultMessage += "<h2 style='color: gray;'>TIE</h2>";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage += "<h1 style='color: black;'>WINNER</h1>";
    } else {
        resultMessage += "<h1 style='color: red;'>LOSE</h1>";
    }

    document.getElementById("result").innerHTML = resultMessage;
}

