





let clickMeButton = document.querySelector(`.click-me`)
clickMeButton.addEventListener(`click`, async function(event){
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})

let addMovie = document.querySelector('.add-movie')

addMovie.addEventListener(`click`, async function(event) {
  // Prevent event default behavior
  event.preventDefault()
  
  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})

let zoomImage = document.querySelector(`.zoom-image`)
zoomImage.addEventListener(`click`, async function(event){

  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.toggle(`border-pink-500`)

  image.classList.toggle(`w-96`)
  image.classList.toggle(`w-full`)

})

let changeImage = document.querySelector('.change-image')
changeImage.addEventListener(`click`, async function(event){
  let image = document.querySelector(`img`)
  image.setAttribute(`src`, `../images/grogu2.jpg`)
})

let sayHi = document.querySelector(`.say-hi`)
sayHi.addEventListener(`click`, async function(event) {
  event.preventDefault()

  let firstNameInput = document.querySelector(`#first-name`)

  let firstName = firstNameInput.value
  //console.log(firstName)

  let greetElement = document.querySelector(`.greet`)




})