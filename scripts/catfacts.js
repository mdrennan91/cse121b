// At least one array method of the type of filter, map, reduce, or at is used in the application.
// Does the forEach array method count?
// All string builds use template literals versus string concatenation.
// At least one module is used with supporting import and export functionality.

let catButton1 = null;
let catButton2 = null;
let catButton3 = null;
let catFactList = [];

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

const displayCatFacts = (catFacts) => {
  const displayFactsSection = document.createElement('div');
  displayFactsSection.classList.add('msg_2');
  
  const displayFactsDiv = document.getElementById("displayFacts");
  while (displayFactsDiv.firstChild) {
    displayFactsDiv.removeChild(displayFactsDiv.firstChild);
  }
  
  catFacts.data.forEach((catFact) => {
    const h4 = document.createElement('h4');
    h4.textContent = catFact;
    displayFactsSection.appendChild(h4);
    });
      
    document.getElementById('displayFacts').appendChild(displayFactsSection);
};

const getCatFacts = async (numCatFacts) => {
  console.log("getCatFactsCalled: ", numCatFacts);
  const response = await fetch(`https://meowfacts.herokuapp.com/?count=${numCatFacts}`);
  const catFactList = await response.json();
  displayCatFacts(catFactList);
};