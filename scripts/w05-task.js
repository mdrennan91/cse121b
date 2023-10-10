/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
    
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
    
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location; 
    
        article.appendChild(h3);
        article.appendChild(img);
    
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();

    displayTemples(templeList);

    // console.log(templeList);
};

/* reset Function */
const reset = () => {
    const articles = templesElement.querySelectorAll('article');

    articles.forEach((article) => {
        templesElement.removeChild(article);
    });
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();

    const filter = document.getElementById('sortBy').value;
    console.log(filter);
    switch (filter) {
        case 'utah':
            console.log("utah");
            const utahTemples = temples.filter((temple) =>
                temple.location.toLowerCase().includes('utah')
            );
            console.log(utahTemples);
            displayTemples(utahTemples);
            break;
        case 'notutah':
            console.log("notutah");
            const nonUtahTemples = temples.filter((temple) =>
                !temple.location.toLowerCase().includes('utah')
            );
            displayTemples(nonUtahTemples);
            break;
        case 'older':
            console.log(temples);
            const olderTemples = temples.filter((temple) =>
                new Date(temple.dedicated) < new Date(1950, 0, 1)
            );
            console.log("older", olderTemples);
            displayTemples(olderTemples);
            break;
        case 'all':
            displayTemples(temples);
            break;
        // default:
        //     console.log('Invalid filter value');
        //     break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();