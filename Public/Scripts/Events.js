document.addEventListener("DOMContentLoaded", function () {
    fetch("/Scripts/Events.json")
        .then(response => response.json())
        .then(data => AddEvent(data.Events))
       // .catch(error => console.error("Error loading JSON:", error));
});

function AddEvent(Events) {
    const EventForm = document.getElementById("EventSchedule");
    EventForm.innerHTML = "";
    Events.forEach(Event => {
    //Create a div for the event
        const EventDiv = document.createElement("div");
        EventDiv.className = "EventDiv";

    //Create the event type element
        const EventT = document.createElement("p");
        EventT.textContent = "Event Type: "+ Event.EventType;
        EventT.className = "EventType";
    
    //Create the event author element
        const EventAuthor = document.createElement("h3");
        EventAuthor.textContent = Event.Author;
        EventAuthor.className = "EventAuthor";
    
    //Create the event date element
        const EventDate = document.createElement("p");
        let EDate = new Date(Event.Date);
        EventDate.textContent = "Date: " + EDate.toDateString();
        EventDate.className = "EventDate";
    
    //Append elements to EventDiv
        EventDiv.appendChild(EventAuthor);
        EventDiv.appendChild(EventT);
        EventDiv.appendChild(EventDate);
    
    //Append EventDiv to EventSection
        EventForm.appendChild(EventDiv);
    });
}