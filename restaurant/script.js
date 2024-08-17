document.addEventListener("DOMContentLoaded", function () {
    // Menu items
    const menuItems = document.querySelectorAll(".nav-bar-a");
    
    // Dropdowns
    const dropdowns = {
        protein: document.getElementById("nav-bar-dropdown-protein"),
        carb: document.getElementById("nav-bar-dropdown-carb"),
        fruit: document.getElementById("nav-bar-dropdown-fruit"),
        special: document.getElementById("nav-bar-dropdown-special"),
    };

    // Function to hide all dropdowns
    function hideAllDropdowns() {
        Object.values(dropdowns).forEach(dropdown => dropdown.style.display = "none");
    }

    // Add click event listener to each menu item
    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default link behavior
            
            // Get the id of the clicked menu item
            const id = this.id;
            
            // Toggle the corresponding dropdown visibility
            if (dropdowns[id].style.display === "block") {
                dropdowns[id].style.display = "none";
            } else {
                hideAllDropdowns(); // Hide all dropdowns first
                dropdowns[id].style.display = "block"; // Show the clicked dropdown
            }
        });
    });

    // Hide dropdowns when clicking outside the menu
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-bar")) {
            hideAllDropdowns();
        }
    });
});
