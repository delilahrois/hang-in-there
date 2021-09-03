// query selector variables go here 👇

var showRandomPostersBtn = document.querySelector('.show-random');
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

var makePosterBtn = document.querySelector('.show-form');
var mainPoster = document.querySelector('.main-poster');
var posterForm = document.querySelector('.poster-form');

var showSavedBtn = document.querySelector('.show-saved');
var savedPostersPg = document.querySelector('.saved-posters');

var nevermindBtn = document.querySelector('.show-main');

makePosterBtn.addEventListener('click', makePosterForm);

showSavedBtn.addEventListener('click', showSavedPosters);



// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

//think we might eventually need this to invoke replacing html?
//var poster = {
//   title: title,
//   quote: quote,
//   img: img
// }

// event listeners go here 👇
//**testing with pseudocoding ideas
showRandomPostersBtn.addEventListener('click', createRandomPoster)
// below on window load event to show random poster for bullet 1 notes it0 testing
window.addEventListener('load', createRandomPoster)

// functions and event handlers (function to invoke eventListeners) go here 👇
// (we've provided one for you to get you started)!

// **testing for pseudocoding ideas bullet 1 it0 and also bullet2 random poster button
function createRandomPoster() {
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
  posterImg.src = images[getRandomIndex(images)];
}

function makePosterForm() {
  mainPoster.classList.add('hidden');
  posterForm.classList.remove('hidden');
}

function showSavedPosters() {
  mainPoster.classList.add('hidden');
  savedPostersPg.classList.remove('hidden');
}

// makePosterBtn.addEventListener('click', makePosterForm);
//
// savedPostersBtn.addEventListener('click', showSavedPosters);

// for bullet 2 of it0, psuedocoding testing
//function createPoster() {
//   currentPoster = new Poster(posterTitle.innerText, posterQuote.innerText, posterImg.src)
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//PSEUDOCODING NOTES FOR IT0: **note to self: REMEMBER NOT TO DO WORK ON MAIN, PUSH UP BRANCHES SO THERE AREN'T MERGE ERRORS (IF NEEDED WORK IN SEPARATE BRANCHES), GIT FETCH, MERGE AFTER AN ITERATION WITH A PULL REQUEST (CHECK THIS ON WORK FLOW)
// query selectors: for image, quote and title
// query selector for the generate random poster button
// addEventListeners for the page loading (window onload) and a separate one for the generate random poster button)
// create 2 separate events: an onpage window click event (window.onLoad)
// utilize get random index function to help us generate a new function to create a random new poster (we can use this function for the onload event & the button
// to break it down more (something I am still trying to get better at):
// need to have a function that will reassign the HTML element for each poster item (image, quote, title), uses the get random index arrays to search through so that we can then reassign: the innerText. src, for title/quote/img into the function (think we need an object for this) like var newPoster = {title: title, quote: quote, image: image}
