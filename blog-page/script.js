const hamburgerIcon = document.getElementById('hamburgerIcon');
let isOpen = false;

hamburgerIcon.addEventListener('click', function () {
    const img = hamburgerIcon.querySelector('img');
    if (isOpen) {
        img.src = 'icons/hamburger-close.svg';  // Kapalı hali
    } else {
        img.src = 'icons/hamburger-open.svg';  // Açık hali
    }
    isOpen = !isOpen;
});
