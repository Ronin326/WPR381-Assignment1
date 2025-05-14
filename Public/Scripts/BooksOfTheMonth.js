const Sci_fi_Books = [
    {title: "The Bones Beneath My Skin", author: "TJ Klune", imageSource: "/Images/BooksOfTheMonth/Sci-Fi/TheBonesBeneathMySkin.png"},
    {title: "Upgrade", author: "Blake Crouch", imageSource: "/Images/BooksOfTheMonth/Sci-Fi/Upgrade.png"},
    {title: "Hum", author: "Helen Phillips", imageSource: "/Images/BooksOfTheMonth/Sci-Fi/HUM.png"},
    {title: "The Ministry of Time", author: "Kaliane Bradley", imageSource: "/Images/BooksOfTheMonth/Sci-Fi/TheMinistryOfTime.png"},
    {title: "Severance", author: "Ling Ma", imageSource: "/Images/BooksOfTheMonth/Sci-Fi/Severance.png"}
]
const Romance_Books = [
    {title: "Great Big Beautiful Life: Reese's Book Club", author: "Emily Henry", imageSource: "/Images/BooksOfTheMonth/Romance/Romance1.png"},
    {title: "Broken Country (Reese's Book Club)", author: "Clare Leslie Hall", imageSource: "/Images/BooksOfTheMonth/Romance/Romance2.png"},
    {title: "Onyx Storm (Deluxe Limited Edition)", author: "Rebecca Yarros", imageSource: "/Images/BooksOfTheMonth/Romance/Romance3.png"},
    {title: "A Court of Thorns and Roses", author: "Sarah J Maas", imageSource: "/Images/BooksOfTheMonth/Romance/Romance4.png"},
    {title: "Iron Flame", author: "Rebecca Yarros", imageSource: "/Images/BooksOfTheMonth/Romance/Romance5.png"}
]
const Action_Books = [
    {title: "Red Rising", author: "Pierce Brown", imageSource: "/Images/BooksOfTheMonth/Action/Action1.png"},
    {title: "A Court of Mist and Fury", author: "Sarah J Maas", imageSource: "/Images/BooksOfTheMonth/Action/Action2.png"},
    {title: "Crown of Midnight", author: "Sarah J Maas", imageSource: "/Images/BooksOfTheMonth/Action/Action3.png"},
    {title: "Dungeon Crawler Carl", author: "Matt Dinniman", imageSource: "/Images/BooksOfTheMonth/Action/Action4.png"},
    {title: "The Ballad of Songbirds and Snakes (A Hunger Games Novel)", author: "Suzanne Collins", imageSource: "/Images/BooksOfTheMonth/Action/Action5.png"}
]
const Fiction_Books = [
    {title: "The Sweetness of Water", author: "Nathan Harris", imageSource: "/Images/BooksOfTheMonth/Fiction/Fiction1.png"},
    {title: "Great Big Beautiful Life: Reese's Book Club", author: "Emily Henry", imageSource: "/Images/BooksOfTheMonth/Fiction/Fiction2.png"},
    {title: "The Housemaid", author: "Freida McFadden", imageSource: "/Images/BooksOfTheMonth/Fiction/Fiction3.png"},
    {title: "The Nightingale", author: "Kristin Hannah", imageSource: "/Images/BooksOfTheMonth/Fiction/Fiction4.png"},
    {title: "Broken Country (Reese's Book Club)", author: "Clare Leslie Hall", imageSource: "/Images/BooksOfTheMonth/Fiction/Fiction5.png"}
]

function LoadBooks(Arr){
    const OutputSection = document.getElementsByClassName("BooksDisplay")[0];
    OutputSection.innerHTML = "";

    Arr.forEach(book => {
        // Create the div for the book
        const BookDiv = document.createElement("div");
        BookDiv.className = "BookDiv";

        // Create the image element
        const BookImage = document.createElement("img");
        BookImage.src = book.imageSource;
        BookImage.alt = book.title;
        BookImage.className = "BookImage";

        // Create the title element
        const BookTitle = document.createElement("h2");
        BookTitle.textContent = book.title;
        BookTitle.className = "BookTitle"; 

        // Create the author element
        const BookAuthor = document.createElement("p");
        BookAuthor.textContent = `by ${book.author}`;
        BookAuthor.className = "BookAuthor"; 

        // Append elements to BookDiv
        BookDiv.appendChild(BookImage);
        BookDiv.appendChild(BookTitle);
        BookDiv.appendChild(BookAuthor);

        // Append BookDiv to OutputSection
        OutputSection.appendChild(BookDiv);
    });
}

window.onload = function LoadBooksSciFiBooks() {
    LoadBooks(Sci_fi_Books)
}

const bookCategories = {
    "Sci-Fi": Sci_fi_Books,
    "Romance": Romance_Books,
    "Action": Action_Books,
    "Fiction": Fiction_Books
};

document.addEventListener("DOMContentLoaded", function () {
    const bookSelector = document.querySelector(".books-of-the-month select");
    
    bookSelector.addEventListener("change", function () {
        const selectedValue = bookSelector.value;
        if (bookCategories[selectedValue]) {
            LoadBooks(bookCategories[selectedValue]); // Fetch books based on selection
        } else {
            console.warn("No books found for selected category:", selectedValue);
        }
    });
});
