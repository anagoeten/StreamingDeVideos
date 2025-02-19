function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');   
    }
}

function searchShow() {
    let searchMobile = document.querySelector('.search-mobile');
    if (searchMobile.classList.contains('open-search')) {
        searchMobile.classList.remove('open-search');
    } else {
        searchMobile.classList.add('open-search');
    }
}