document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const navBarItems = document.querySelectorAll(".nav-bar-a");
    const dropdowns = document.querySelectorAll(".nav-bar-dropdown");
    navBarItems.forEach(item => {
        item.addEventListener("click", function () {
            const targetDropdownId = "nav-bar-dropdown-" + this.id;
            const targetDropdown = document.getElementById(targetDropdownId);

            dropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.style.display = "none";
                }
            });

            if (targetDropdown.style.display === "block") {
                targetDropdown.style.display = "none";
                this.classList.remove("open");
            } else {
                targetDropdown.style.display = "block";
                this.classList.add("open");
            }
        });
    });

    // Update date and time in footer
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        document.getElementById('footer-time').textContent = formattedDate;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".nav-bar-a")) {
            dropdowns.forEach(dropdown => {
                dropdown.style.display = "none";
            });
            navBarItems.forEach(item => {
                item.classList.remove("open");
            });
        }
    });
});
