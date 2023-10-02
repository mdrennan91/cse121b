/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
name: 'Mitchel Drennan',
photo: 'images/selfie_mitch.jpg',
favoriteFoods: [
    'Chicken',
    'Rice',
    'Vegetables',
    'Pizza',
    'Tacos',
],
hobbies: [
    'Gaming',
    'Working out',
    'Photography',
    'Hiking',
    'Petting cats',
],
placesLived: [],
};
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Sonora, CA', 
        length: '23 years',
    }
);

myProfile.placesLived.push(
    {
        place: 'Sacramento, CA', 
        length: '5 years',
    }
);

myProfile.placesLived.push(
    {
        place: 'Foxborough, MA', 
        length: '2 years',
    }
);

myProfile.placesLived.push(
    {
        place: 'Spokane, WA', 
        length: '1 year',
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLivedObj => {
    let dt = document.createElement('dt');
    dt.textContent = placesLivedObj.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = placesLivedObj.length;
    document.querySelector('#places-lived').appendChild(dd);
});
