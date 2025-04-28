const restartBtn = document.getElementById("restart");
const doneBtn = document.getElementById("done");

restartBtn.addEventListener('click', () => {
    window.location.href = 'questions.html';
});
doneBtn.addEventListener('click', () => {
    window.location.href = 'done.html';
});

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('recommendationContainer');
    const noMatch = localStorage.getItem('noMatch') === "true";
    const booksData = localStorage.getItem('matchedBooks');

    if (noMatch) {
        const message = document.createElement("p");
        message.textContent = "Sorry, we couldn't find a book that matches your preferences. Try again with different answers!";
        container.appendChild(message);
    } else if (booksData) {
        const books = JSON.parse(booksData);
        
        books.forEach((book) => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book-match");
        
            const title = document.createElement("h2");
            title.textContent = book.title;
            bookDiv.appendChild(title);
        
            const author = document.createElement("p");
            const authorStrong = document.createElement("strong");
            authorStrong.textContent = "Author: ";
            author.appendChild(authorStrong);
            author.appendChild(document.createTextNode(book.author));
            bookDiv.appendChild(author);
        
            const image = document.createElement("img");
            image.src = book.image;
            image.alt = book.title;
            image.style.maxWidth = "200px";
        
            const description = document.createElement("p");
            description.innerHTML = `<strong>Description:</strong> ${book.description}`;
        
            const genre = document.createElement("p");
            genre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;
        
            const tropes = document.createElement("p");
            tropes.innerHTML = `<strong>Trope(s):</strong> ${book.trope.join(', ')}`;
        
            const spice = document.createElement("p");
            spice.innerHTML = `<strong>Spice Level:</strong> ${book["spice-level"]}`;
        
            const pov = document.createElement("p");
            pov.innerHTML = `<strong>POV:</strong> ${book.POV}`;
        
            const series = document.createElement("p");
            series.innerHTML = `<strong>Part of a Series?</strong> ${book.series ? "Yes" : "No"}`;
        
            const link = document.createElement("a");
            link.href = book.link;
            link.target = "_blank";
            link.textContent = "Buy on Amazon";
        
            // Append all elements to the bookDiv
            bookDiv.appendChild(title);
            bookDiv.appendChild(author);
            bookDiv.appendChild(image);
            bookDiv.appendChild(description);
            bookDiv.appendChild(genre);
            bookDiv.appendChild(tropes);
            bookDiv.appendChild(spice);
            bookDiv.appendChild(pov);
            bookDiv.appendChild(series);
            bookDiv.appendChild(link);
        
            // Append bookDiv to the container
            container.appendChild(bookDiv);
        });        

    }

    // Optional: clear the stored data after showing
    localStorage.removeItem("matchedBooks");
    localStorage.removeItem("noMatch");
});
