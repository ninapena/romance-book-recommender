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
    const bookData = localStorage.getItem('recommendedBook');

    if (noMatch) {
        // If no match was found, display this message
        container.innerHTML = `
            <p>Sorry, we couldn't find a book that matches your preferences. Try again with different answers!</p>
        `;
    } else if (bookData) {
        // If a match is found, parse and display the book details
        const book = JSON.parse(bookData);
        container.innerHTML = `
            <h2>Your Book Match: ${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <img src="${book.image}" alt="${book.title}" style="max-width: 200px;" />
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Trope(s):</strong> ${book.trope.join(', ')}</p>
            <p><strong>Spice Level:</strong> ${book["spice-level"]}</p>
            <p><strong>POV:</strong> ${book.POV}</p>
            <p><strong>Part of a Series?</strong> ${book.series ? "Yes" : "No"}</p>
        `;
    } /* else {
        // If something goes wrong and no data is available, show this fallback message
        container.innerHTML = `<p>Oops, something went wrong. Please try again.</p>`;
    } */

    // Optional: clear the stored data after showing the recommendation
    localStorage.removeItem("recommendedBook");
    localStorage.removeItem("noMatch");
});
