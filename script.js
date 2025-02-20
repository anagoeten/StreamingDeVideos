// Menu mobile
function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');   
    }
}


// Search
const searchInput = document.querySelector('.search');
const searchInputMobile = document.querySelector('.search-mobile');

const homeContainer = document.querySelector('.home-container');

const noResults = document.querySelector('.no-results');


searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.movie-card, .series-card');

    let hasResults = false;

    if (value != false) {
        homeContainer.style.display = 'none';
    } else {
        homeContainer.style.display = 'flex';
    }

    if (value != '') {
        items.forEach(item => {

            if(formatString(item.textContent).indexOf(value) !== -1) {
                item.style.display = 'flex';

                hasResults = true;
            } else {
                item.style.display = 'none';
            }
            
        })

        if(hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block'
        }
    }
});

function searchShow() {
    let searchMobile = document.querySelector('.search-mobile');
    if (searchMobile.classList.contains('open-search')) {
        searchMobile.classList.remove('open-search');
    } else {
        searchMobile.classList.add('open-search');
    }
}

searchInputMobile.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.movie-card, .series-card');

    let hasResults = false;

    if (value != false) {
        homeContainer.style.display = 'none';
    } else {
        homeContainer.style.display = 'flex';
    }

    if (value != '') {
        items.forEach(item => {

            if(formatString(item.textContent).indexOf(value) !== -1) {
                item.style.display = 'flex';

                hasResults = true;
            } else {
                item.style.display = 'none';
            }
            
        })

        if(hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block'
        }
    }
});

function formatString(values) {
    return values.toLowerCase().trim()
}

// Video pause
const video = document.querySelector('video')

function playPause(){
    if (video.paused){
      video.play();
    } else{
      video.pause();
    }
}

// Content
const moviesData = [
    {image: './assets/movies/coco.jpeg', nome: 'Coco'},
    {image: './assets/movies/coraline.jpg', nome:'Coraline'},
    {image: './assets/movies/frozen-ii.jpeg', nome: 'Frozen 2'},
    {image: './assets/movies/maze-runner.jpg', nome: 'Maze Runner'},
    {image: './assets/movies/moana.jpg', nome: 'Moana 2'},
    {image: './assets/movies/songbirds-and-snakes.jpg', nome: 'The Ballad of Songbirds and Snakes'},
    {image: './assets/movies/terrifier.webp', nome: 'Terrifier'},
    {image: './assets/movies/twilight.jpg', nome: 'Twilight'}
];

const seriesData = [
    {image: './assets/series/all-of-us-are-dead.jpg', nome: 'All of Us Are Dead'},
    {image: './assets/series/friends.jpg', nome: 'Friends'},
    {image: './assets/series/haunting-of-hill-house.jpg', nome: 'The Haunting of Hill House'},
    {image: './assets/series/la-casa-de-papel.webp', nome: 'La Casa de Papel'},
    {image: './assets/series/lucifer.jpg',nome: 'Lucifer'},
    {image: './assets/series/squid-game.webp', nome: 'Squid Game'},
    {image: './assets/series/stranger-things.jpg', nome: 'Stranger Things'},
    {image: './assets/series/the-vampire-diaries.webp', nome: 'The Vampire Diaries'}
];

const moviesContent = document.querySelector('.movies-content');
const seriesContent = document.querySelector('.series-content');

moviesData.forEach( movie => {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `
        <img src="${movie.image}">
        <a><i class="fa-solid fa-play"></i></a>
        <p class="name">${movie.nome}</p>
    `

    moviesContent.appendChild(movieCard)
});

seriesData.forEach( series => {
    const seriesCard = document.createElement('div')
    seriesCard.classList.add('series-card')

    seriesCard.innerHTML = `
        <img src="${series.image}">
        <a><i class="fa-solid fa-play"></i></a>
        <p class="name">${series.nome}</p>
    `

    seriesContent.appendChild(seriesCard)
});