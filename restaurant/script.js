document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-bar-a");
    const dropdowns = {
        protein: document.getElementById("nav-bar-dropdown-protein"),
        carb: document.getElementById("nav-bar-dropdown-carb"),
        fruit: document.getElementById("nav-bar-dropdown-fruit"),
        special: document.getElementById("nav-bar-dropdown-special"),
    };

    function hideAllDropdowns() {
        Object.values(dropdowns).forEach(dropdown => dropdown.style.display = "none");
    }

    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault();
            const id = this.id;
            const dropdown = dropdowns[id];
            const rect = this.getBoundingClientRect();

            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                hideAllDropdowns();
                dropdown.style.display = "block";
                dropdown.style.top = `${rect.bottom}px`; // Menü item'ının altından açılması için
                dropdown.style.left = `${rect.left}px`; // Menü item'ının solundan hizalanması için
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-bar")) {
            hideAllDropdowns();
        }
    });
});
