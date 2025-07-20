function play(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    document.getElementById("result").textContent = "User choice: " + userChoice + " | Computer choice: " + computerChoice;

    if (userChoice === computerChoice) {
        document.getElementById("result").textContent += " -> It's a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            document.getElementById("result").textContent += " -> User wins!";
        } else {
            document.getElementById("result").textContent += " -> Computer wins!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            document.getElementById("result").textContent += "-> user wins!";
        } else {
            document.getElementById("result").textContent += " -> Computer wins!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            document.getElementById("result").textContent += " -> User wins!";
        } else {
            document.getElementById("result").textContent += " -> Computer wins!";
        }
    }
}
