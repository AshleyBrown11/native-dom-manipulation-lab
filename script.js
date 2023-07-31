let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  
const mainTitleElement = document.getElementById('main-titleID');
mainTitleElement.textContent = 'DOM Toretto';


  // Part 2
  
const bodyElement = document.body;
bodyElement.style.backgroundColor = #ffcc00;


  // Part 3

const favoriteThings = document.getElementById('favorite-things');
if (favoriteThings && favoriteThings.children.length > 0) {
  favoriteThings.removeChild(favoriteThings.lastElementChild);
}


  // Part 4
const specialTitleElements = document.querySelectorAll('.special-titleclass');
specialTitleElements.forEach(element => {
  element.style.fontSize = '2rem';
});


  // Part 5

const pastRaces = document.getElementById('past-races');

function removeRaceByLocation(Chicago) {
  const listItems = pastRaces.querySelectorAll('li');
  listItems.forEach(item => {
    if (item.textContent.includes(Chicago)) {
      item.remove();
    }
  });
}

removeRaceByLocation('Chicago');


  // Part 6

const pastRacesList = document.getElementById('past-races-list');
const newCityListItem = document.createElement('li');

newCityListItem.textContent = 'Washington'; 
pastRacesList.appendChild(newCityListItem);


  // Part 7
const blogClass = document.getElementById('blog-class');

const newBlogPost = document.createElement('div');
newBlogPost.classList.add('blog-post');

const cityHeading = document.createElement('h2');
cityHeading.textContent = 'Washington';

const blogContent = document.createElement('p');
blogContent.textContent = 'MY CAR CAUGHT FIRE AFTER HITTING A BRICK WALL IN THE RACE!';

newBlogPost.appendChild(cityHeading);
newBlogPost.appendChild(blogContent);

blogClass.appendChild(newBlogPost);


  // Part 8

const quotes = [
  "Quote 1",
  "Quote 2",
  "Quote 3",
  "Quote 4",
  "Quote 5",
  "Quote 6",
];


const quoteTitleElement = document.querySelector('#quote-titleID');

quoteTitleElement.addEventListener('click', randomQuote);



  // Part 9
const blogPostElements = document.querySelectorAll('.blog-post');
const handleMouseOut = function() {
  this.classList.toggle('purple');
};

const handleMouseEnter = function() {
  this.classList.toggle('red');
};

blogPostElements.forEach(element => {
  element.addEventListener('mouseout', handleMouseOut);
  element.addEventListener('mouseenter', handleMouseEnter);
});





