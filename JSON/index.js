const scrollBtn = document.getElementById("scroll-btn");

scrollBtn.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the default jump-to-behavior of the link
  const section = document.getElementById("my-work");
  section.scrollIntoView({ behavior: "smooth" }); // use the smooth scroll effect
});



// Get the paragraph element and the word span element
const aboutText = document.querySelector(".about-quote p");
const word = document.querySelector(".about-quote p .word");

// Define the words to cycle through
const words = ["research", "support", "creation"];

// Define a counter variable to keep track of the current word index
let counter = 0;

// Define a function to update the text with the next word and animate the word
function updateText() {
  // Set the text content of the word span element to the current word
  word.textContent = words[counter];
  
  // Add the class name of the current word to the word span element
  word.className = `word ${words[counter]}`;
  
  // Animate the word by setting its bottom position and opacity
  word.style.bottom = "0px";
  word.style.opacity = "0";
  setTimeout(() => {
    word.style.opacity = "1";
  }, 100);
  
  // Increment the counter and reset it to 0 if it goes beyond the length of the array
  counter++;
  if (counter === words.length) {
    counter = 0;
  }
  
  // Wait for 2 seconds and then reset the word position and opacity
  setTimeout(() => {
    word.style.bottom = "-30px";
    word.style.opacity = "0";
  }, 2000);
}

// Call the updateText function every 2 seconds to cycle through the words
setInterval(updateText, 2500);







/********************************************************
CAROUSEL
 **************************************************/


/********************************************************
CAROUSEL END 
 **************************************************/
