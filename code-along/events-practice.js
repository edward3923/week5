// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory
let rollButton = document.querySelector(`#roll-button`)

// Listen for the clicking of the roll button, when clicked:
rollButton.addEventListener(`click`, async function(event) {
  // - Ignore the roll button's default behavior
  event.preventDefault()

  // - Store a random integer in memory, representing the roll of the first die
  let firstDie = getRandomInt(6)

  // - Store a random integer in memory, representing the roll of the second die
  let secondDie = getRandomInt(6)

  // - Store the total of the two random numbers, representing the total roll
  let totalDie = firstDie + secondDie

  // - Replace the first die image using the first random value (hint: setAttribute)
  let image1 = document.querySelector(`.die1`)
  image1.setAttribute(`src`, `../images/dice/${firstDie}.png`)

  // - Replace the second die image using the second random value (hint: setAttribute)
  let image2 = document.querySelector(`.die2`)
  image2.setAttribute(`src`, `../images/dice/${secondDie}.png`)

  // - Store a reference to the player name input element
  let playerName = document.querySelector(`#player`)

  // - Grab the value of the player name element and store the player's name in memory
  let player = playerName.value
  //console.log(firstName)

  let greetElement = document.querySelector(`.result`)

    // - Make sure the player's name is filled out; if it is:
    if (player.length > 0) {
      let sentence = `Hi, ${player}. Your total was ${totalDie}.`
      greetElement.insertAdjacentHTML(`beforeend`, `
      <li>${sentence}</li>
    `)
    }
    else {
      greetElement.insertAdjacentHTML(`beforeend`, ``)
    }
  



    // - Form a sentence in memory, containing the player's name and the total that was rolled

    // - Store a reference to the "result" un-ordered list element

    // - Insert the sentence to the "result" un-ordered list as a list item (li)

  })