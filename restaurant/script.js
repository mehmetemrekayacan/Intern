document.addEventListener("DOMContentLoaded", function () {
    const navBarItems = document.querySelectorAll(".nav-bar-a");

    const dropdownData = {
        "protein": [
            { text: "Good", href: "/restaurant/foods-html/proteins.html#good" },
            { text: "Normal", href: "/restaurant/foods-html/proteins.html#normal" },
            { text: "Low", href: "/restaurant/foods-html/proteins.html#low" },
            { text: "Poor", href: "/restaurant/foods-html/proteins.html#poor" }
        ],
        "carb": [
            { text: "Normal", href: "/restaurant/foods-html/carbs.html#normal" },
            { text: "Low", href: "/restaurant/foods-html/carbs.html#low" },
            { text: "Poor", href: "/restaurant/foods-html/carbs.html#poor" }
        ],
        "fruit": [
            { text: "Normal", href: "/restaurant/foods-html/fruits.html#normal" },
            { text: "Vegetables Like Fruits", href: "/restaurant/foods-html/fruits.html#low" },
            { text: "???", href: "/restaurant/foods-html/fruits.html#poor" }
        ],
        "special": [
            { text: "Just Great", href: "/restaurant/foods-html/specials.html" }
        ]
    };

    navBarItems.forEach(item => {
        const dropdownId = "nav-bar-dropdown-" + item.id;
        const dropdownContent = dropdownData[item.id];

        if (dropdownContent) {
            const dropdownDiv = document.createElement("div");
            dropdownDiv.id = dropdownId;
            dropdownDiv.className = "nav-bar-dropdown";

            dropdownContent.forEach(link => {
                const linkDiv = document.createElement("div");
                const anchor = document.createElement("a");
                anchor.href = link.href;
                anchor.textContent = link.text;
                linkDiv.appendChild(anchor);
                dropdownDiv.appendChild(linkDiv);
            });

            item.insertAdjacentElement('afterend', dropdownDiv);
        }

        item.addEventListener("click", function () {
            const targetDropdown = document.getElementById(dropdownId);

            document.querySelectorAll(".nav-bar-dropdown").forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.style.display = "none";
                }
            });

            targetDropdown.style.display = targetDropdown.style.display === "block" ? "none" : "block";
            item.classList.toggle("open");
        });
    });

    // Ekranın herhangi bir yerine tıklandığında dropdown'ları kapatalım
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".nav-bar-a")) {
            document.querySelectorAll(".nav-bar-dropdown").forEach(dropdown => {
                dropdown.style.display = "none";
            });

            // Ok ikonunu eski haline getirmek için 'open' class'ını kaldır
            navBarItems.forEach(item => item.classList.remove("open"));
        }
    });
});

// Update date and time in footer
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric'};
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('footer-time').textContent = formattedDate;
}
updateDateTime();
setInterval(updateDateTime, 1000);
