document.addEventListener("DOMContentLoaded", function () {
    // Tüm dropdown butonlarını ve dropdown menülerini seçelim
    const navBarItems = document.querySelectorAll(".nav-bar-a");
    const dropdowns = document.querySelectorAll(".nav-bar-dropdown");

    // Her bir nav-bar öğesi için tıklama olayını ekleyelim
    navBarItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetDropdownId = "nav-bar-dropdown-" + this.id;

            // Tıklanan butona ait dropdown'ı seçelim
            const targetDropdown = document.getElementById(targetDropdownId);

            // Diğer tüm dropdown'ları kapatalım
            dropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.style.display = "none";
                }
            });

            // Hedef dropdown'ı aç/kapat yapalım
            if (targetDropdown.style.display === "block") {
                targetDropdown.style.display = "none";
            } else {
                targetDropdown.style.display = "block";
            }
        });
    });

    // Ekranın herhangi bir yerine tıklandığında dropdown'ları kapatalım
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".nav-bar-a")) {
            dropdowns.forEach(dropdown => {
                dropdown.style.display = "none";
            });
        }
    });
});
