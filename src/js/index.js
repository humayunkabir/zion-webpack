import Axios from 'axios'

const padded = (value, count = 2, pad = '0') => {
  // return value.toString().padStart(count, pad);
  return value.toLocaleString(undefined, { minimumIntegerDigits: count })
}
const timer = value => {
  const hour = padded(Math.floor(value/3600));
  const minute = padded(Math.floor((value/60)%60));
  const second = padded(value%60);

  return { hour, minute, second };
}

const card = document.createElement('div')
card.setAttribute('class', 'p-5 my-5 rounded shadow bg-primary text-white')

const cardClick = function() {
  card.removeEventListener('click', cardClick);
  let play = true;
  let showJoke = false;
  let start = 0;
  let joke = 'Please wait...'

  setInterval(async () => {
    if(play && showJoke) {
      try {
        const response = await Axios.get('https://api.icndb.com/jokes/random');
        joke = response.data.value.joke;
      } catch (error) {
        console.log(error);
      }
    }
  }, 5000);

  setInterval(() => {
    if (play) {
      const { hour, minute, second } = timer(start);
      card.innerHTML = `
        <p class="mb-0">This app is running for <code>${hour}:${minute}:${second}</code></p>
        <p id="joke" class="mb-0 mt-3 ${!showJoke ? 'd-none' : ''}">${joke}</p>
      `;
      start += 1;
    }
  }, 1000);

  card.classList.toggle('bg-primary');
  card.classList.toggle('text-white');
  
  const playEl = document.createElement('button');
  playEl.setAttribute('class', 'btn btn-primary rounded-pill')
  playEl.innerHTML = play ? 'Pause' : 'Play';
  playEl.addEventListener('click', function() {
    play = !play
    this.innerHTML = play? 'Pause' : 'Play'
  })
  document.querySelector('main').appendChild(playEl);

  const showJokeEL = document.createElement('button');
  showJokeEL.setAttribute('class', 'btn btn-primary rounded-pill float-right')
  showJokeEL.innerHTML = showJoke ? 'Stop showing joke' : 'Show joke';
  showJokeEL.addEventListener('click', function() {
    showJoke = !showJoke
    this.innerHTML = showJoke ? 'Stop showing joke' : 'Show joke';
    document.getElementById('joke').classList.toggle('d-none');
  })
  document.querySelector('main').appendChild(showJokeEL);
}

card.innerHTML = 'Click here to initiate...'
card.addEventListener('click', cardClick);
// confirm('Want to start the timer?') && card.click();
// card.click()
document.querySelector('main').appendChild(card);