/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Mitchel Drennan';
let currentYear = '2023';
let profilePicture = 'images/selfie_mitch.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
// 1. Declare an array variable to hold your favorite foods.
const favoriteFoods = ["Pizza", "Sushi", "Mexican Food", "Chinese Food", "Cookie Dough Ice Cream"];
// 2. Modify the HTML element with the id of food to display your favorite foods array.
foodElement.innerHTML += `<br>${favoriteFoods}`;
// 3. Declare and instantiate a variable to hold another single favorite food item.
const newFavoriteFood = "Chicken";
// 4. Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(newFavoriteFood);
// 5. Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> to provide a line break
foodElement.innerHTML += `<br>${favoriteFoods}`;
// 6. Remove the first element in the favorite food array.
favoriteFoods.shift();
// 7. Again, append the array output showing the modified array, using a line break as shown in step 5.5.
foodElement.innerHTML += `<br>${favoriteFoods}`;
// 8. Remove the last element in the favorite food array.
favoriteFoods.pop();
// 9. Append the array output with this final modified favorite foods array.
foodElement.innerHTML += `<br>${favoriteFoods}`;
