let index = 0;
const images = document.querySelectorAll('.slideshow-container img');
const navbar = document.getElementById('navbar');
const colors = ['green', 'blue'];

function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
    navbar.style.backgroundColor = colors[index];
}

setInterval(changeImage, 10000);

function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');

    console.log('Dropdown-Toggle wurde aufgerufen'); // Testausgabe

    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

var defaultImage = '/images/2.png';
var defaultImage2 = '/images/karte/schwartz.png';
function wechselBild(neuesBild1, neuesBild2) {

    document.getElementById("anzeigeBild").src = neuesBild1;
    
    document.getElementById("anzeigeBild2").src = neuesBild2;
}

function resetImage() {
    document.getElementById('anzeigeBild').src = defaultImage;

    document.getElementById('anzeigeBild2').src = defaultImage2;
}


    