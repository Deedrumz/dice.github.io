// document.body.style.backgroundColor = 'yellow'


//FUNCTION TO ROLL A DICE
// player 1
let randomNumber = Math.ceil(Math.random() * 6)

// console.log(randomNumber);

let randomDiceImage = 'Dice' + randomNumber + '.png'

let randomImageSource = 'img/' + randomDiceImage

let images = document.querySelectorAll('img')[0]

images.setAttribute('src', randomImageSource)

// player 2

let randomNumber2 = Math.ceil(Math.random() * 6)

// console.log(randomNumber2);
let randomDiceImage2 = 'Dice' + randomNumber2 + '.png'

let randomImageSource2 = 'img/' + randomDiceImage2

let images2 = document.querySelectorAll('img')[1]

images2.setAttribute('src', randomImageSource2)


//FUNCTION TO ROLL A DICE BY REFRESHING PAGE
const refreshButton = document.querySelector('.roll')

// const refreshPage = () => {
//     location.reload();
//   }
  
// refreshButton.addEventListener('click', refreshPage)                            //Arrow function

function refreshPage() {
    location.reload()
}

refreshButton.addEventListener('click', refreshPage)

//FUNCTION TO DISPLAY WINNER OR DRAW

let player1 = "Player 1";
let player2 = "Player 2";

if (randomNumber === randomNumber2) {
    document.querySelector('h1').textContent = 'Draw!'
} else if (randomNumber > randomNumber2) {
    document.querySelector('h1').textContent = (player1 + ' WINS!')
} else {
    document.querySelector('h1').textContent = (player2  + " WINS!")
}