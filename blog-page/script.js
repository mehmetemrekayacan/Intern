const hamburgerIcon = document.getElementById('hamburgerIcon');
const menu = document.getElementById('hambuger-menu');
const blurBackground = document.getElementById('blur-background');
const img = hamburgerIcon.querySelector('img');
let isOpen = false;

hamburgerIcon.addEventListener('click', function () {
    if (isOpen) {
        img.src = 'icons/hamburger-close.svg';  // Kapalı hali
        menu.style.display = 'none';  // Menü gizlenir

        // Blur arka planı animasyonla gizle
        blurBackground.classList.remove('show');
        blurBackground.classList.add('hide');
        
        // Kapanma animasyonu tamamlandıktan sonra display'i none yap
        blurBackground.addEventListener('animationend', function() {
            if (blurBackground.classList.contains('hide')) {
                blurBackground.style.display = 'none';
            }
        }, { once: true });
    } else {
        img.src = 'icons/hamburger-open.svg';  // Açık hali
        menu.style.display = 'block';  // Menü gösterilir
        
        // Blur arka planı animasyonla göster
        blurBackground.style.display = 'block';
        blurBackground.classList.remove('hide');
        blurBackground.classList.add('show');
    }
    isOpen = !isOpen;
});

blurBackground.addEventListener('click', function () {
    img.src = 'icons/hamburger-close.svg';  // Kapalı hali
    menu.style.display = 'none';  // Menü gizlenir
    
    // Blur arka planı animasyonla gizle
    blurBackground.classList.remove('show');
    blurBackground.classList.add('hide');
    
    // Kapanma animasyonu tamamlandıktan sonra display'i none yap
    blurBackground.addEventListener('animationend', function() {
        if (blurBackground.classList.contains('hide')) {
            blurBackground.style.display = 'none';
        }
    }, { once: true });
    
    isOpen = false;
});
