/* const nextBtn = document.getElementById("gonext");

nextBtn.addEventListener('click', () => {
    window.location.href = 'recommendation.html';
}); */

/*document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop the page from refreshing
  
      const answers = {
        questionOne: document.querySelector('input[name="questionOne"]:checked')?.value,
        questionTwo: document.querySelector('input[name="questionTwo"]:checked')?.value,
        questionThree: document.querySelector('input[name="questionThree"]:checked')?.value,
        questionFour: document.querySelector('input[name="questionFour"]:checked')?.value,
        questionFive: document.querySelector('input[name="questionFive"]:checked')?.value,
      };
  
      // Fetch books.json
      fetch('booklist.json')
        .then((res) => res.json())
        .then((books) => {
          const match = books.find((book) => {
            return (
              (answers.questionOne === book.POV || answers.questionOne === "Dual") &&
              book.trope.includes(answers.questionTwo) &&
              book.genre === answers.questionThree &&
              (answers.questionFour === "No preference" || answers.questionFour === book["spice-level"]) &&
              (answers.questionFive === "No preference" ||
                (answers.questionFive === "Yes" && book.series) ||
                (answers.questionFive === "No" && !book.series))
            );
          });
  
          if (match) {
            localStorage.setItem("recommendedBook", JSON.stringify(match));
            localStorage.setItem("noMatch", "false");
          } else {
            localStorage.setItem("noMatch", "true");
          }
  
          // Redirect after storing results
          window.location.href = "recommendation.html";
        })
        .catch((err) => {
          console.error("Error fetching books.json", err);
        });
    });
  }); */

  const books = [
    {
        "title": "Icebreaker",
        "author": "Hannah Grace",
        "image": "https://m.media-amazon.com/images/I/61LgNoStzqL.jpg",
        "description": "Anastasia, a figure skater, and Nate, an ice hockey player, are forced to share a rink due to a prank, resulting in a romance between them despite the competitive nature.",
        "genre": "Sports Romance",
        "trope": ["Forced proximity", "Enemies to Lovers", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "FMC"
    },
    {
        "title": "A Court of Thorns and Roses",
        "author": "Sarah J. Maas",
        "image": "https://m.media-amazon.com/images/I/81RrEEMiOCL.jpg",
        "description": "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution...",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Powerless",
        "author": "Lauren Roberts",
        "image": "https://m.media-amazon.com/images/I/91L7BkXI5oL.jpg",
        "description": "Those with magical powers, called Elites, are highly revered, while those without, called Ordinaries, are marginalized and hunted. The story centers on Paedyn Gray, an Ordinary disguised as an Elite, who must navigate a dangerous competition and a budding romance with Prince Kai, all while concealing her true identity.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers", "Love Triangle"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "Dual"
    },
    {
        "title": "Divine Rivals",
        "author": "Rebecca Ross",
        "image": "https://mpd-biblio-covers.imgix.net/9781250323798.jpg",
        "description": "The story follows two rival journalists, Iris Winnow and Roman Kitt, who find an unexpected connection when Iris's letters to her brother on the front lines mysteriously end up in Roman's hands. As they engage in a clandestine correspondence, their lives become entwined with the war between the gods, forcing them to confront their own destinies and the fate of their world.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to lovers", "Workplace", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "Dual"
    },
    {
        "title": "Things We Never Got Over",
        "author": "Lucy Score",
        "image": "https://m.media-amazon.com/images/I/71ODaT072wL._UF1000,1000_QL80_.jpg",
        "description": "Naomi seeks refuge in Knockemout, Virginia, after her sister, Tina, leaves her stranded with an unexpected niece and a stolen car. Knox, a local who prefers solitude, is reluctantly drawn into Naomi's chaotic life, leading to a series of humorous and heartwarming events.",
        "genre": "Small Town Romance",
        "trope": ["Grumpy/Sunshine", "Enemies to Lovers", "Slow Burn"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Part of Your World",
        "author": "Abby Jimenez",
        "image": "https://m.media-amazon.com/images/I/717DFs5x56L._AC_UF1000,1000_QL80_.jpg",
        "description": "After a wild bet, gourmet grilled-cheese sandwich, and cuddle with a baby goat, Alexis Montgomery has had her world turned upside down. The cause: Daniel Grant, a ridiculously hot carpenter who's ten years younger than her and as casual as they come—the complete opposite of sophisticated city-girl Alexis.",
        "genre": "Small Town Romance",
        "trope": ["Small Town", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Practice Makes Perfect",
        "author": "Sarah Adams",
        "image": "https://www.penguinrandomhouse.com/books/711999/practice-makes-perfect-by-sarah-adams/",
        "description": "Annie Walker, a small-town flower shop owner, seeks to find her perfect match. After overhearing a date call her 'unbelievably boring,' she enlists the help of Will Griffin, a stoic bodyguard, to teach her how to be more flirtatious. Amid 'practice dates' and 'educational' tutoring lessons, Annie discovers there are more layers to Will's usual stoic attitude, leading to unexpected romance.",
        "genre": "Small Town Romance",
        "trope": ["Fake Dating", "Grumpy/Sunshine", "Friends to Lovers"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "Dual"
    },
    {
        "title": "Archer’s Voice",
        "author": "Mia Sheridan",
        "image": "https://www.amazon.com/Archers-Voice-Mia-Sheridan/dp/1538727358",
        "description": "Bree Prescott arrives in the sleepy, lakeside town of Pelion, Maine, hoping to find peace. There, she meets Archer Hale, an isolated man who holds a secret agony of his own. As Bree and Archer's paths intertwine, they find solace and healing in each other's presence, leading to a transformative love story.",
        "genre": "Small Town Romance",
        "trope": ["Grumpy/Sunshine", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Throttled",
        "author": "Lauren Asher",
        "image": "https://laurenasher.com/throttled/",
        "description": "Maya Alatorre, an ambitious post-grad, finds herself entangled with Noah Slade, a Formula 1 legend and her brother's new teammate. Their relationship is a forbidden temptation, filled with passion and challenges, as they navigate their complex feelings amidst the high-speed world of racing.",
        "genre": "Sports Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Flawless",
        "author": "Elsie Silver",
        "image": "https://www.amazon.com/Flawless-Elsie-Silver/dp/B09KZ3D7G5",
        "description": "A small-town girl and a famous bull rider navigate their differences and the challenges of their careers, leading to unexpected romance. As they spend time together, they discover that love can flourish even in the most unlikely circumstances.",
        "genre": "Cowboy Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Done and Dusted",
        "author": "Lyla Sage",
        "image": "https://www.amazon.com/Done-Dusted-Lyla-Sage/dp/B08P2Y6J9V",
        "description": "A small-town girl and a famous bull rider navigate their differences and the challenges of their careers, leading to unexpected romance. As they spend time together, they discover that love can flourish even in the most unlikely circumstances.",
        "genre": "Cowboy Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Caught Up",
        "author": "Liz Tomforde",
        "image": "https://www.amazon.com/Caught-Windy-City-Liz-Tomforde/dp/B0CNLNVT4R",
        "description": "In this third installment of the Windy City series, 'Caught Up' follows the journey of two individuals navigating the complexities of their relationship amidst the backdrop of Chicago's vibrant setting.",
        "genre": "Sports Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Better Than the Movies",
        "author": "Lynn Painter",
        "image": "https://www.amazon.com/Better-Than-Movies-Lynn-Painter/dp/1534469026",
        "description": "This charming YA romance centers on a high school senior who teams up with her longtime crush's best friend to win his heart, leading to unexpected feelings and a deeper connection.",
        "genre": "Young Adult Romance",
        "trope": ["Fake Dating", "Friends to Lovers", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC"
    },
    {
        "title": "To All the Boys I've Loved Before",
        "author": "Jenny Han",
        "image": "https://www.amazon.com/All-Boys-Ive-Loved-Before/dp/144242670X",
        "description": "Lara Jean's secret love letters are exposed, leading to unexpected romantic entanglements and self-discovery in this beloved YA novel.",
        "genre": "Young Adult Romance",
        "trope": ["Fake Dating", "Enemies to Lovers", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC"
    },
    {
        "title": "Addicted to You",
        "author": "Krista & Becca Ritchie",
        "image": "https://www.amazon.com/Addicted-You-Krista-Becca-Ritchie/dp/0593549476",
        "description": "Lily and Lo, both battling personal demons, enter a fake relationship to hide their addictions, leading to a complex and passionate journey of self-discovery and love.",
        "genre": "Dark Romance",
        "trope": ["Fake Dating", "Slow Burn", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "The Summer I Turned Pretty",
        "author": "Jenny Han",
        "image": "https://www.amazon.com/Summer-Turned-Pretty-Jenny-Han/dp/1416968200",
        "description": "Belly Conklin navigates the complexities of love and family dynamics during her summers at Cousins Beach, leading to a poignant coming-of-age story.",
        "genre": "Young Adult Romance",
        "trope": ["Love Triangle", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC"
    },
    {
        "title": "The Fine Print",
        "author": "Lauren Asher",
        "image": "https://www.amazon.com/Fine-Print-Special-Lauren-Asher/dp/1737507714",
        "description": "Rowan Kane, heir to the Dreamland empire, hires Zahra to renovate the theme park. Their professional relationship turns personal, leading to a romance filled with secrets and power dynamics.",
        "genre": "Romantic Comedy",
        "trope": ["Grumpy/Sunshine", "Forced Proximity", "Fake Dating"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "By a Thread",
        "author": "Lucy Score",
        "image": "https://www.amazon.com/Thread-Grumpy-Boss-Romantic-Comedy-ebook/dp/B0874WYYRJ",
        "description": "A grumpy boss and his assistant navigate their complicated relationship, leading to unexpected romance and personal growth.",
        "genre": "Romantic Comedy",
        "trope": ["Grumpy/Sunshine", "Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "People We Meet on Vacation",
        "author": "Emily Henry",
        "image": "https://www.emilyhenrybooks.com/books/people-we-meet-on-vacation",
        "description": "Poppy and Alex have been best friends for years, taking annual vacations together. After a fallout, they reunite for one last trip to mend their relationship.",
        "genre": "Romantic Comedy",
        "trope": ["Friends to Lovers", "Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC"
    },
    {
        "title": "The Wall of Winnipeg and Me",
        "author": "Mariana Zapata",
        "image": "https://www.amazon.com/Wall-Winnipeg-Me-Mariana-Zapata/dp/0993965741",
        "description": "Vanessa Mazur, personal assistant to Aiden Graves, a professional football player, agrees to a marriage of convenience, leading to unexpected feelings and challenges.",
        "genre": "Sports Romance",
        "trope": ["Grumpy/Sunshine", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "The Cheat Sheet",
        "author": "Sarah Adams",
        "image": "https://www.goodreads.com/en/book/show/60105952",
        "description": "Bree Camden, in love with her best friend and star quarterback Nathan Donelson, finds herself in a fake dating scenario that blurs the lines of their friendship.",
        "genre": "Sports Romance",
        "trope": ["Friends to Lovers", "Fake Dating", "Slow Burn"],
        "series": false,
        "spice-level": "Closed Door",
        "POV": "Dual"
    },
    {
        "title": "The Summer of Broken Rules",
        "author": "K.L. Walther",
        "image": "https://www.amazon.com/Summer-Broken-Rules-K-Walther/dp/1728210291",
        "description": "Meredith Fox, grieving the loss of her sister Claire, joins her family's annual vacation to Martha's Vineyard. Amidst wedding festivities, she participates in a traditional game of assassin and forms an unexpected connection with a groomsman, leading to a summer romance filled with healing and new beginnings.",
        "genre": "Young Adult Romance",
        "trope": ["Love Triangle"],
        "series": false,
        "spice-level": "Closed Door",
        "POV": "FMC"
    },
    {
        "title": "The Bodyguard",
        "author": "Katherine Center",
        "image": "https://www.amazon.com/Bodyguard-Novel-Katherine-Center/dp/1250278595",
        "description": "Hannah Brooks, a bodyguard, is assigned to protect superstar actor Jack Stapleton from a stalker. Posing as his girlfriend to keep him safe, Hannah finds herself drawn into a whirlwind romance that challenges her professional boundaries and personal feelings.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Forced Proximity"],
        "series": false,
        "spice-level": "Closed Door",
        "POV": "FMC"
    },
    {
        "title": "Book Lovers",
        "author": "Emily Henry",
        "image": "https://www.emilyhenrybooks.com/books/book-lovers",
        "description": "Nora Stephens, a literary agent, agrees to a sisters' trip to Sunshine Falls, North Carolina. There, she unexpectedly reconnects with Charlie Lastra, a book editor from her past. As they navigate their evolving relationship, they discover that love can be found in the most unexpected places.",
        "genre": "Small Town Romance",
        "trope": ["Enemies to Lovers", "Small Town Romance", "Second Chance Romance"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Love and Other Words",
        "author": "Christina Lauren",
        "image": "https://christinalaurenbooks.com/books/love-and-other-words/",
        "description": "Macy Sorensen and Elliot Petropoulos were once inseparable, sharing a deep bond through their love of books. Years later, they reunite and confront the unresolved feelings and secrets that kept them apart, leading to a journey of rediscovery and second chances.",
        "genre": "Small Town Romance",
        "trope": ["Second Chance Romance", "Friends to Lovers"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Love & Gelato",
        "author": "Jenna Evans Welch",
        "image": "https://www.amazon.com/Love-Gelato-Jenna-Evans-Welch/dp/1481431263",
        "description": "After her mother's death, Lina travels to Italy to fulfill her mother's wish. There, she uncovers secrets about her mother's past and embarks on a journey of self-discovery and romance, all set against the backdrop of beautiful Italian landscapes.",
        "genre": "Young Adult Romance",
        "trope": ["Love Triangle"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC"
    },
    {
        "title": "Red, White & Royal Blue",
        "author": "Casey McQuiston",
        "image": "https://m.media-amazon.com/images/I/81Xq1g6fJqL._AC_UL320_.jpg",
        "description": "A witty and heartfelt romance between Alex Claremont-Diaz, the First Son of the United States, and Prince Henry of Wales. Their initially fake friendship blossoms into a passionate love affair, navigating the complexities of public life and personal identity.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers", "Fake Dating"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "MMC"
    },
    {
        "title": "They Both Die at the End",
        "author": "Adam Silvera",
        "image": "https://m.media-amazon.com/images/I/81OtwF1+1wL._AC_UL320_.jpg",
        "description": "Two boys, Mateo and Rufus, receive a call informing them that they will die within the next 24 hours. They meet through an app called Last Friend and spend their final day together, forming a deep and poignant connection.",
        "genre": "Young Adult Romance",
        "trope": ["Forced Proximity"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "MMC"
    },
    {
        "title": "The Spanish Love Deception",
        "author": "Elena Armas",
        "image": "https://m.media-amazon.com/images/I/91Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "Catalina Martín needs a date for her sister's wedding in Spain to avoid questions about her single status. She convinces Aaron Blackford, her infuriating colleague, to accompany her, leading to unexpected chemistry and romance.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Enemies to Lovers", "Workplace"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC"
    },
    {
        "title": "The Bromance Book Club",
        "author": "Lyssa Kay Adams",
        "image": "https://m.media-amazon.com/images/I/91zR2h6p5rL._AC_UL320_.jpg",
        "description": "Gavin Scott, a professional baseball player, joins a secret book club of men who read romance novels to improve their relationships. With the help of his clubmates, he works to win back his wife, Thea.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "MMC"
    },
    {
        "title": "King of Wrath",
        "author": "Ana Huang",
        "image": "https://m.media-amazon.com/images/I/81+eV9J1tCL._AC_UL320_.jpg",
        "description": "Dante, a powerful businessman, is forced into an arranged engagement with Vivian, a woman from a rival family. Their mutual disdain turns into a passionate and complex relationship.",
        "genre": "Dark Romance",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "MMC"
    },
    {
        "title": "Twisted Love",
        "author": "Ana Huang",
        "image": "https://m.media-amazon.com/images/I/91zR2h6p5rL._AC_UL320_.jpg",
        "description": "Aidan, a photographer, is tasked with looking after his best friend's sister, Ava. Their close proximity leads to intense emotions and a forbidden romance.",
        "genre": "Dark Romance",
        "trope": ["Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "The Seven Year Slip",
        "author": "Ashley Poston",
        "image": "https://m.media-amazon.com/images/I/81q8Xq2Qz5L._AC_UL320_.jpg",
        "description": "A whimsical romance about a woman who finds herself slipping seven years into the past, where she meets her future love. As she navigates the complexities of time and relationships, she discovers that love transcends time.",
        "genre": "Romantic Comedy",
        "trope": ["Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC"
    },
    {
        "title": "Fourth Wing",
        "author": "Rebecca Yarros",
        "image": "https://m.media-amazon.com/images/I/91Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "In a world where dragons and magic exist, a young woman must navigate a dangerous academy to prove her worth. Amidst the trials, she finds unexpected allies and a blossoming romance.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Punk 57",
        "author": "Penelope Douglas",
        "image": "https://m.media-amazon.com/images/I/81Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "Two high school pen pals, who have never met, develop a deep connection through letters. When they finally meet, sparks fly, leading to a tumultuous and passionate relationship.",
        "genre": "Dark Romance",
        "trope": ["Enemies to Lovers"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Lightlark",
        "author": "Alex Aster",
        "image": "https://m.media-amazon.com/images/I/81Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "On the island of Lightlark, where every century the rulers of six realms gather to compete in a deadly game, a young woman must navigate treacherous alliances and uncover secrets that could change the fate of her world.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "FMC"
    },
    {
        "title": "Behind the Net",
        "author": "Stephanie Garber",
        "image": "https://m.media-amazon.com/images/I/81Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "A young woman enters the world of professional tennis, where she must overcome personal and professional challenges. Along the way, she finds unexpected love and a sense of belonging.",
        "genre": "Sports Romance",
        "trope": ["Enemies to Lovers", "Second Chance Romance", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "The Unhoneymooners",
        "author": "Christina Lauren",
        "image": "https://m.media-amazon.com/images/I/81Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "After a wedding goes disastrously wrong, two sworn enemies are forced to go on a honeymoon together. As they navigate the trip, they discover unexpected feelings for each other.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Fake Dating"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "Funny Story",
        "author": "Emily Henry",
        "image": "https://m.media-amazon.com/images/I/81Uqg3Z2h8L._AC_UL320_.jpg",
        "description": "A woman, heartbroken after her fiancé leaves her for his childhood friend, moves to a small town and becomes roommates with the ex-fiancé's ex-best friend. Together, they navigate their shared history and find unexpected love.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers", "Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    },
    {
        "title": "The Love Hypothesis",
        "author": "Ali Hazelwood",
        "image": "https://m.media-amazon.com/images/I/81Xq1g6fJqL._AC_UL320_.jpg",
        "description": "Olive Smith, a third-year Ph.D. candidate at Stanford University, doesn't believe in lasting romantic relationships. To convince her best friend Anh that she's moved on from her ex, Olive pretends to be dating her professor, Adam Carlsen. What starts as a fake relationship soon turns into something real, challenging Olive's beliefs about love and her own heart.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Enemies to Lovers", "Workplace"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC"
    },
    {
        "title": "The Kiss Quotient",
        "author": "Helen Hoang",
        "description": "A woman with Asperger's hires an escort to teach her about relationships, leading to a romance that challenges their perceptions of love.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual"
    }
  ]
  
// Function to get user input from the form
function getUserPreferences() {
    const questionOne = document.querySelector('input[name="questionOne"]:checked')?.value;
    const questionTwo = document.querySelector('input[name="questionTwo"]:checked')?.value;
    const questionThree = document.querySelector('input[name="questionThree"]:checked')?.value;
    const questionFour = document.querySelector('input[name="questionFour"]:checked')?.value;
    const questionFive = document.querySelector('input[name="questionFive"]:checked')?.value;
  
    return { questionOne, questionTwo, questionThree, questionFour, questionFive };
  }
  
  // Function to find a matching book
  function findBookMatch() {
    const preferences = getUserPreferences();
  
    // Use the filter method to find all matching books
    const matchedBooks = books.filter(book => {
        return (
            // Check if the book's POV matches the user's preference
            (preferences.questionOne === book.POV || preferences.questionOne === 'Dual') &&
            
            // Check if the book's trope matches the user's preference
            (preferences.questionTwo === book.trope[0] || preferences.questionTwo === book.trope[1] || preferences.questionTwo === book.trope[2]) &&
            
            // Check if the book's genre matches the user's preference
            preferences.questionThree === book.genre &&
            
            // Check if the book's spice-level matches the user's preference
            (preferences.questionFour === book["spice-level"] || preferences.questionFour === "No preference") &&
            
            // Check if the book's series preference matches the user's choice
            (preferences.questionFive === "No preference" || preferences.questionFive === (book.series ? "Yes" : "No"))
        );
    });
  
    if (matchedBooks.length > 0) {
        // If there are matches, take the first match and store it in localStorage
        const matchedBook = matchedBooks[0];
        localStorage.setItem("recommendedBook", JSON.stringify(matchedBook));
        localStorage.setItem("noMatch", "false");
    } else {
        // If no matches are found
        localStorage.setItem("noMatch", "true");
    }

    // Redirect to the recommendation page (after storing the match information in localStorage)
    window.location.href = 'recommendation.html';
}

  // Attach the function to your form submission or button click
  document.getElementById("gonext").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission to keep the user on the same page
    findBookMatch();
  });