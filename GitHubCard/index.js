/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'
console.log(axios);
const request = axios.get('https://api.github.com/users/dujules23')
.then(data => {
  console.log('success')
  console.log(data)
})

.catch(err => {
  console.log('reject')
  console.log('ERROR:', err)
})

console.log('pending', request)
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitData (data){
    
    //Instansiate
    const card = document.createElement('div')
    const img = document.createElement('img')
    const cInfo = document.createElement('div')
    const h3 = document.createElement('h3')
    const pUser =  document.createElement('p')
    const pLoc = document.createElement('p')
    const pPro = document.createElement('p')
    const a = document.createElement ('a')
    const pFollowers = document.createElement('p')
    const pFollowing = document.createElement('p')
    const pBio = document.createElement('p')

    //creating markup
    card.appendChild(img)
    card.appendChild(cInfo)

    cInfo.appendChild(h3)
    cInfo.appendChild(pUser)
    cInfo.appendChild(pLoc)
    cInfo.appendChild(pPro)
    cInfo.appendChild(pFollowers)
    cInfo.appendChild(pFollowing)
    cInfo.appendChild(pBio)

    pPro.appendChild(a)

    console.log(card)


    //Adding classes
    card.classList.add('card')
    cInfo.classList.add('class-info')
    h3.classList.add('name')
    pUser.classList.add('username')

    //fix these
    a.href = "address to users github page"
    img.src = "image url of user"
    //Text Content





}

console.log(gitData())

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
