const sbmt = document.querySelector('#submit')
const userInput = document.querySelector('#guessNumber')
const previousGuess = document.querySelector('#guesses')
const remainingGuesses = document.querySelector('#r-guesses')
const lowOrHigh = document.querySelector('.hiorlow')
const startOver = document.querySelector('.resultParas')
let randomNumber = parseInt(Math.random()*100 +1) 

const p = document.createElement('p')

// let prevGuesses = []
let numGuess = 1
let playGame = true

if(playGame){
    sbmt.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
       validateGuess(guess)
    })
}

const validateGuess = (guess)=>{
    if(isNaN(guess)){
        alert('Please enter valid number')
    }else if(guess < 1){
        alert("Please enter number greater than or equal to 1")
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        // prevGuesses.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
const checkGuess = (guess) =>{
    userInput.value = ''
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOO low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOO high`)
    }
}
const displayMessage = (message) => {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
const displayGuess = (guess) =>{
    userInput.innerHTML = ''
    previousGuess.innerHTML += ` ${guess}`
    numGuess++
    remainingGuesses.innerHTML = `${11-numGuess}`
}
const endGame = () =>{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () =>{
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(){
    randomNumber = parseInt(Math.random()*100 +1) 
    numGuess = 1
    previousGuess.innerHTML = ''
    remainingGuesses.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame= true

})
}
