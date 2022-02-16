let cat = document.querySelector('.cat');
let catInBed = document.querySelector('.catInBed');
let bed = document.querySelector('.bed');
let catSleeps = document.querySelector('.catSleeps');
let toy = document.querySelector('.toy');
let catOnToy = document.querySelector('.catOnToy');
let toyCaught = document.querySelector('.toyCaught');

function goToBed() {
    cat.classList.toggle('catInBed');      
    cat.classList.toggle('catSleeps');
}

bed.addEventListener('click', goToBed);

function goToToy() {
    cat.classList.toggle('catOnToy');      
    cat.classList.toggle('toyCaught');
}

toy.addEventListener('click', goToToy);