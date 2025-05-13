//Makes the navbar sticky
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var header = document.querySelector(".header-body");
    var headerBottom = header.offsetTop + header.offsetHeight - navbar.offsetHeight*2;

    if (window.scrollY >= headerBottom) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Saves the message to a JSON file
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Retrieve existing data from localStorage
        let existingData = JSON.parse(localStorage.getItem("contacts")) || [];

        // Add new contact data
        existingData.push(formData);

        // Save updated data to localStorage
        localStorage.setItem("contacts", JSON.stringify(existingData));

        console.log("Message saved locally!");

        // Create a Blob and trigger download
        let blob = new Blob([JSON.stringify(existingData, null, 2)], { type: "application/json" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "contacts.json";
        a.click();
    });
});