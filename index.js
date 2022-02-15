let cat = document.querySelector('.cat');
let catInBed = document.querySelector('.catInBed');

function goToObject() {
    cat.classList.add('catInBed');
    cat.classList.remove('cat');
}

let bed = document.querySelector('.bed');
bed.addEventListener('click', goToObject);