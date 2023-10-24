// initialize variables for cat buttons and cat facts list
let catButton1 = null;
let catButton2 = null;
let catButton3 = null;
let catFactList = [];

// counter to track how many api calls we make when retrying because we find words we don't like. 
let apiCallRetryCount = 0;

// event listener to start when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  getElementsAfterDomLoads();
});

// function to retrieve elements after the DOM has loaded
const getElementsAfterDomLoads = () => {
  catButton1 = document.getElementById("button1");
  catButton2 = document.getElementById('button2');
  catButton3 = document.getElementById('button3');
  console.log("catButton1: ", catButton1);
  console.log("catButton2: ", catButton2);
  console.log("catButton3: ", catButton3);

  // add click event listeners to the cat buttons
  if (catButton1) {
    catButton1.addEventListener('click', () => { 
      getCatFacts("1");
    });
  }
  if (catButton2) {
    catButton2.addEventListener('click', () => { 
      getCatFacts("2"); 
    });
  }
  if (catButton3) {
    catButton3.addEventListener('click', () => { 
      getCatFacts("3"); 
    });
  }
};

// function to display cat facts on the webpage
const displayCatFacts = () => {
  const displayFactsSection = document.createElement('div');
  displayFactsSection.classList.add('msg_2');
  
  const displayFactsDiv = document.getElementById("displayFacts");

  // remove any existing content in the display area
  while (displayFactsDiv.firstChild) {
    displayFactsDiv.removeChild(displayFactsDiv.firstChild);
  }
  
  // create and append <h4> elements for each cat fact in the list
  catFactList.forEach((catFact) => {
    const h4 = document.createElement('h4');
    h4.textContent = catFact;
    displayFactsSection.appendChild(h4);
    });
    
    // append the display section to the displayFactsDiv
    document.getElementById('displayFacts').appendChild(displayFactsSection);
};

// fetch cat facts from an external API
const getCatFacts = async (numCatFacts) => {
  console.log("getCatFactsCalled: ", numCatFacts);
  const response = await fetch(`https://meowfacts.herokuapp.com/?count=${numCatFacts}`);
  const responseData = await response.json();
  apiCallRetryCount += 1;

  // store the retrieved cat facts in the catFactList array
  catFactList = responseData.data;

  // we dont want the words feces or aids or youtube links to appear so we try again if these are found. 
  let index = catFactList.findIndex((fact) => {
    if (fact.toLowerCase().includes("feces", "aids", "youtube")){
      return true;
    }
  });
  // if index is -1 we didn't find the words so we don't need to call it again. 
  if (index != -1 && apiCallRetryCount < 6){
    getCatFacts(numCatFacts);
  }
  
  //reset the retry count to zero
  apiCallRetryCount = 0;

  // display the cat facts on the webpage
  displayCatFacts();
};