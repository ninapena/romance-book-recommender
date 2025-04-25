const restartBtn = document.getElementById("restart");
const doneBtn = document.getElementById("done");

restartBtn.addEventListener('click', () => {
    window.location.href = 'questions.html';
});
doneBtn.addEventListener('click', () => {
    window.location.href = 'done.html';
});

fetch('booklist.json')
.then(response => response.json ())
.then (data => 
    data.forEach(
        book => { 
        }
    )
)
