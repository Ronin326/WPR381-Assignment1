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
        let existingData = JSON.parse(localStorage.getItem("Messages")) || [];

        // Add new contact data
        existingData.push(formData);

        // Save updated data to localStorage
        localStorage.setItem("Messages", JSON.stringify(existingData));

        console.log("Message saved locally!");

        // Create a Blob and trigger download
        let blob = new Blob([JSON.stringify(existingData, null, 2)], { type: "application/json" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Messages.json";
        a.click();
    });
});
// Saves the event to a JSON file
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("EventForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = {
            EventType: document.getElementById("EventType").value,
            HostEmail: document.getElementById("HostEmail").value,
            Details: document.getElementById("Details").value
        };

        // Retrieve existing data from localStorage
        let existingData = JSON.parse(localStorage.getItem("Events")) || [];

        // Add new contact data
        existingData.push(formData);

        // Save updated data to localStorage
        localStorage.setItem("Events", JSON.stringify(existingData));

        console.log("Events saved locally!");

        // Create a Blob and trigger download
        let blob = new Blob([JSON.stringify(existingData, null, 2)], { type: "application/json" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Events.json";
        a.click();
    });
});