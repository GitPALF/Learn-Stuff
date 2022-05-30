const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) // or use * 3
    //console.log(randomNumber)

    if (randomNumber === 0) {
      computerChoice = 'Rock'
    }
    if (randomNumber === 1) {
      computerChoice = 'Paper'
    }
    if (randomNumber === 2) {
      computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a DRAW!!!'
  }
  if (computerChoice === 'Rock' && userChoice === "Paper") {
    result = 'You WIN!'
  }
  if (computerChoice === 'Paper' && userChoice === "Scissors") {
    result = 'You WIN!'
  }
  if (computerChoice === 'Scissors' && userChoice === "Rock") {
    result = 'You WIN!'
  }
  if (computerChoice === 'Rock' && userChoice === "Scissors") {
    result = 'You LOSE!'
  }
  if (computerChoice === 'Paper' && userChoice === "Rock") {
    result = 'You LOSE!'
  }
  if (computerChoice === 'Scissors' && userChoice === "Paper") {
    result = 'You LOSE!'
  }
  resultDisplay.innerHTML = result
}
