// At least one array method of the type of filter, map, reduce, or at is used in the application.
// Does the forEach array method count?
// All string builds use template literals versus string concatenation.
// At least one module is used with supporting import and export functionality.

let catButton1 = null;
let catButton2 = null;
let catButton3 = null;
let catFactList = [];
// counter so we can track how many api calls we make when retrying because we find words we don't like. 
let apiCallRetryCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  getElementsAfterDomLoads();
});

const getElementsAfterDomLoads = () => {
  catButton1 = document.getElementById("button1");
  catButton2 = document.getElementById('button2');
  catButton3 = document.getElementById('button3');
  console.log("catButton1: ", catButton1);
  console.log("catButton2: ", catButton2);
  console.log("catButton3: ", catButton3);
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

const displayCatFacts = () => {
  const displayFactsSection = document.createElement('div');
  displayFactsSection.classList.add('msg_2');
  
  const displayFactsDiv = document.getElementById("displayFacts");
  while (displayFactsDiv.firstChild) {
    displayFactsDiv.removeChild(displayFactsDiv.firstChild);
  }
  
  catFactList.forEach((catFact) => {
    const h4 = document.createElement('h4');
    h4.textContent = catFact;
    displayFactsSection.appendChild(h4);
    });
      
    document.getElementById('displayFacts').appendChild(displayFactsSection);
};

const getCatFacts = async (numCatFacts) => {
  console.log("getCatFactsCalled: ", numCatFacts);
  const response = await fetch(`https://meowfacts.herokuapp.com/?count=${numCatFacts}`);
  const responseData = await response.json();
  apiCallRetryCount += 1;
  catFactList = responseData.data;
  // we dont want the words feces or aids or youtube links so we try again if these are found. 
  let index = catFactList.findIndex((fact) => {
    if (fact.toLowerCase().includes("feces", "aids", "youtube")){
      return true;
    }
  });
  // if index is -1 we didn't find the words so we don't need to call it again. 
  if (index != -1 && apiCallRetryCount < 6){
    getCatFacts(numCatFacts);
  } 
  apiCallRetryCount = 0;
  displayCatFacts();
};