// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

getRequest().then(console.warn).catch(console.error);

const jokeOnDom = () => {
  document.querySelector('#app').innerHTML = `
  <div id="main-container">
    <h1 class="card-title">BIG BAD PUN MACHINE</h1>
    <div class="card">
      <div class="card-body">
        <div id="joke-box">
          <div id="joke-setup"></div>
          <div id="joke-delivery"></div>
        </div>
      </div>
      <button id="jokeBtn" class="btn btn-primary">GET A JOKE</button>
    </div>
</div>`;
};

const startApp = () => {
  jokeOnDom();
};

startApp();

const getAJoke = document.querySelector('#jokeBtn');
const jokeSetup = document.querySelector('#joke-setup');
const jokeDelivery = document.querySelector('#joke-delivery');
// const jokeBox = document.querySelector('#joke-box');

let data = '';
getAJoke.addEventListener('click', () => {
  console.warn((getAJoke).innerText);

  if (getAJoke.innerText === 'GET A JOKE') {
    getRequest().then((joke) => {
      console.warn(joke.setup);
      jokeSetup.innerHTML = joke.setup;
      data = joke;
      getAJoke.innerText = 'GET PUNCHLINE';
    });
  } else if (getAJoke.innerText === 'GET PUNCHLINE') {
    console.warn(data.delivery);
    jokeDelivery.innerHTML = data.delivery;
    getAJoke.innerText = 'GET A NEW JOKE';
  } else {
    window.location.reload();
  }
});
