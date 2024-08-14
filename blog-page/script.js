const hamburgerIcon = document.getElementById('hamburgerIcon');
const menu = document.getElementById('menu');
const blurBackground = document.getElementById('blur-background');
let isOpen = false;

hamburgerIcon.addEventListener('click', function () {
    const img = hamburgerIcon.querySelector('img');
    if (isOpen) {
        img.src = 'icons/hamburger-close.svg';  // Kapalı hali
        menu.style.display = 'none';  // Menü gizlenir
        blurBackground.style.display = 'none';  // Blur arka plan gizlenir
    } else {
        img.src = 'icons/hamburger-open.svg';  // Açık hali
        menu.style.display = 'block';  // Menü gösterilir
        blurBackground.style.display = 'block';  // Blur arka plan gösterilir
    }
    isOpen = !isOpen;
});

blurBackground.addEventListener('click', function () {
    img.src = 'icons/hamburger-close.svg';  // Kapalı hali
    menu.style.display = 'none';  // Menü gizlenir
    blurBackground.style.display = 'none';  // Blur arka plan gizlenir
    isOpen = false;
});