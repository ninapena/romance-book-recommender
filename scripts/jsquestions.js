// list of books
const books = [
    {
        "title": "Icebreaker",
        "author": "Hannah Grace",
        "image": "images/icebreaker.jpg",
        "description": "Anastasia, a figure skater, and Nate, an ice hockey player, are forced to share a rink due to a prank, resulting in a romance between them despite the competitive nature.",
        "genre": "Sports Romance",
        "trope": ["Forced proximity", "Enemies to Lovers", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "FMC",
        "link": "https://a.co/d/h34AMi3"
    },
    {
        "title": "A Court of Thorns and Roses",
        "author": "Sarah J. Maas",
        "image": "images/acotar.jpg",
        "description": "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution...",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/cSQ6TGx"
    },
    {
        "title": "Powerless",
        "author": "Lauren Roberts",
        "image": "images/powerless.jpg",
        "description": "Those with magical powers, called Elites, are highly revered, while those without, called Ordinaries, are marginalized and hunted. The story centers on Paedyn Gray, an Ordinary disguised as an Elite, who must navigate a dangerous competition and a budding romance with Prince Kai, all while concealing her true identity.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers", "Love Triangle"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "Dual",
        "link": "https://a.co/d/6PACCD0"
    },
    {
        "title": "Divine Rivals",
        "author": "Rebecca Ross",
        "image": "images/divine-rivals.jpg",
        "description": "The story follows two rival journalists, Iris Winnow and Roman Kitt, who find an unexpected connection when Iris's letters to her brother on the front lines mysteriously end up in Roman's hands. As they engage in a clandestine correspondence, their lives become entwined with the war between the gods, forcing them to confront their own destinies and the fate of their world.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to lovers", "Workplace", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "Dual",
        "link": "https://a.co/d/gshCFAY"
    },
    {
        "title": "Things We Never Got Over",
        "author": "Lucy Score",
        "image": "images/twngo.jpg",
        "description": "Naomi seeks refuge in Knockemout, Virginia, after her sister, Tina, leaves her stranded with an unexpected niece and a stolen car. Knox, a local who prefers solitude, is reluctantly drawn into Naomi's chaotic life, leading to a series of humorous and heartwarming events.",
        "genre": "Small Town Romance",
        "trope": ["Grumpy/Sunshine", "Enemies to Lovers", "Slow Burn"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/jgfIEJG"
    },
    {
        "title": "Part of Your World",
        "author": "Abby Jimenez",
        "image": "images/poyw.jpg",
        "description": "After a wild bet, gourmet grilled-cheese sandwich, and cuddle with a baby goat, Alexis Montgomery has had her world turned upside down. The cause: Daniel Grant, a ridiculously hot carpenter who's ten years younger than her and as casual as they come—the complete opposite of sophisticated city-girl Alexis.",
        "genre": "Small Town Romance",
        "trope": ["Small Town", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/hsIgqES"
    },
    {
        "title": "Practice Makes Perfect",
        "author": "Sarah Adams",
        "image": "images/pmp.jpg",
        "description": "Annie Walker, a small-town flower shop owner, seeks to find her perfect match. After overhearing a date call her 'unbelievably boring,' she enlists the help of Will Griffin, a stoic bodyguard, to teach her how to be more flirtatious. Amid 'practice dates' and 'educational' tutoring lessons, Annie discovers there are more layers to Will's usual stoic attitude, leading to unexpected romance.",
        "genre": "Small Town Romance",
        "trope": ["Fake Dating", "Grumpy/Sunshine", "Friends to Lovers"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "Dual",
        "link": "https://a.co/d/eL0Fy0G"
    },
    {
        "title": "Archer's Voice",
        "author": "Mia Sheridan",
        "image": "images/archersvoice.jpg",
        "description": "Bree Prescott arrives in the sleepy, lakeside town of Pelion, Maine, hoping to find peace. There, she meets Archer Hale, an isolated man who holds a secret agony of his own. As Bree and Archer's paths intertwine, they find solace and healing in each other's presence, leading to a transformative love story.",
        "genre": "Small Town Romance",
        "trope": ["Grumpy/Sunshine", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/2BZvN4H"
    },
    {
        "title": "Throttled",
        "author": "Lauren Asher",
        "image": "images/throttled.jpg",
        "description": "Maya Alatorre, an ambitious post-grad, finds herself entangled with Noah Slade, a Formula 1 legend and her brother's new teammate. Their relationship is a forbidden temptation, filled with passion and challenges, as they navigate their complex feelings amidst the high-speed world of racing.",
        "genre": "Sports Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/2YocRap"
    },
    {
        "title": "Flawless",
        "author": "Elsie Silver",
        "image": "images/flawless.jpg",
        "description": "A small-town girl and a famous bull rider navigate their differences and the challenges of their careers, leading to unexpected romance. As they spend time together, they discover that love can flourish even in the most unlikely circumstances.",
        "genre": "Cowboy Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/aAzp0jf"
    },
    {
        "title": "Done and Dusted",
        "author": "Lyla Sage",
        "image": "images/doneanddusted.jpg",
        "description": "A small-town girl and a famous bull rider navigate their differences and the challenges of their careers, leading to unexpected romance. As they spend time together, they discover that love can flourish even in the most unlikely circumstances.",
        "genre": "Cowboy Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/bd1uZNE"
    },
    {
        "title": "Caught Up",
        "author": "Liz Tomforde",
        "image": "images/caughtup.jpg",
        "description": "In this third installment of the Windy City series, 'Caught Up' follows the journey of two individuals navigating the complexities of their relationship amidst the backdrop of Chicago's vibrant setting.",
        "genre": "Sports Romance",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/3lplZrZ"
    },
    {
        "title": "Better Than the Movies",
        "author": "Lynn Painter",
        "image": "images/bttm.jpg",
        "description": "This charming YA romance centers on a high school senior who teams up with her longtime crush's best friend to win his heart, leading to unexpected feelings and a deeper connection.",
        "genre": "Young Adult Romance",
        "trope": ["Fake Dating", "Friends to Lovers", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC",
        "link": "https://a.co/d/e2XEDDT"
    },
    {
        "title": "To All the Boys I've Loved Before",
        "author": "Jenny Han",
        "image": "images/tatbilb.jpg",
        "description": "Lara Jean's secret love letters are exposed, leading to unexpected romantic entanglements and self-discovery in this beloved YA novel.",
        "genre": "Young Adult Romance",
        "trope": ["Fake Dating", "Enemies to Lovers", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC",
        "link": "https://a.co/d/6n7eVwm"
    },
    {
        "title": "Addicted to You",
        "author": "Krista & Becca Ritchie",
        "image": "images/addicted.jpg",
        "description": "Lily and Lo, both battling personal demons, enter a fake relationship to hide their addictions, leading to a complex and passionate journey of self-discovery and love.",
        "genre": "Dark Romance",
        "trope": ["Fake Dating", "Slow Burn", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/ethMdJk"
    },
    {
        "title": "The Summer I Turned Pretty",
        "author": "Jenny Han",
        "image": "images/tsitp.jpg",
        "description": "Belly Conklin navigates the complexities of love and family dynamics during her summers at Cousins Beach, leading to a poignant coming-of-age story.",
        "genre": "Young Adult Romance",
        "trope": ["Love Triangle", "Slow Burn"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC",
        "link": "https://a.co/d/cCiTwm2"
    },
    {
        "title": "The Fine Print",
        "author": "Lauren Asher",
        "image": "images/thefineprint.jpg",
        "description": "Rowan Kane, heir to the Dreamland empire, hires Zahra to renovate the theme park. Their professional relationship turns personal, leading to a romance filled with secrets and power dynamics.",
        "genre": "Romantic Comedy",
        "trope": ["Grumpy/Sunshine", "Forced Proximity", "Fake Dating"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/1Bf8SmD"
    },
    {
        "title": "By a Thread",
        "author": "Lucy Score",
        "image": "images/byathread.jpg",
        "description": "A grumpy boss and his assistant navigate their complicated relationship, leading to unexpected romance and personal growth.",
        "genre": "Romantic Comedy",
        "trope": ["Workplace", "Grumpy/Sunshine", "Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/iPVlw1G"
    },
    {
        "title": "People We Meet on Vacation",
        "author": "Emily Henry",
        "image": "images/pwmov.jpg",
        "description": "Poppy and Alex have been best friends for years, taking annual vacations together. After a fallout, they reunite for one last trip to mend their relationship.",
        "genre": "Romantic Comedy",
        "trope": ["Friends to Lovers", "Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC",
        "link": "https://a.co/d/fnJqxGf"
    },
    {
        "title": "The Wall of Winnipeg and Me",
        "author": "Mariana Zapata",
        "image": "images/twowam.jpg",
        "description": "Vanessa Mazur, personal assistant to Aiden Graves, a professional football player, agrees to a marriage of convenience, leading to unexpected feelings and challenges.",
        "genre": "Sports Romance",
        "trope": ["Grumpy/Sunshine", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/8KCV23j"
    },
    {
        "title": "The Cheat Sheet",
        "author": "Sarah Adams",
        "image": "images/thecheatsheet.jpg",
        "description": "Bree Camden, in love with her best friend and star quarterback Nathan Donelson, finds herself in a fake dating scenario that blurs the lines of their friendship.",
        "genre": "Sports Romance",
        "trope": ["Friends to Lovers", "Fake Dating", "Slow Burn"],
        "series": false,
        "spice-level": "Closed Door",
        "POV": "Dual",
        "link": "https://a.co/d/3XD7YZB"
    },
    {
        "title": "The Summer of Broken Rules",
        "author": "K.L. Walther",
        "image": "images/tsobr.jpg",
        "description": "Meredith Fox, grieving the loss of her sister Claire, joins her family's annual vacation to Martha's Vineyard. Amidst wedding festivities, she participates in a traditional game of assassin and forms an unexpected connection with a groomsman, leading to a summer romance filled with healing and new beginnings.",
        "genre": "Young Adult Romance",
        "trope": ["Love Triangle"],
        "series": false,
        "spice-level": "Closed Door",
        "POV": "FMC",
        "link": "https://a.co/d/8YgqQzn"
    },
    {
        "title": "The Bodyguard",
        "author": "Katherine Center",
        "image": "images/thebodyguard.jpg",
        "description": "Hannah Brooks, a bodyguard, is assigned to protect superstar actor Jack Stapleton from a stalker. Posing as his girlfriend to keep him safe, Hannah finds herself drawn into a whirlwind romance that challenges her professional boundaries and personal feelings.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Forced Proximity"],
        "series": false,
        "spice-level": "Closed Door",
        "POV": "FMC",
        "link": "https://a.co/d/clxDgP7"
    },
    {
        "title": "Book Lovers",
        "author": "Emily Henry",
        "image": "images/booklovers.jpg",
        "description": "Nora Stephens, a literary agent, agrees to a sisters' trip to Sunshine Falls, North Carolina. There, she unexpectedly reconnects with Charlie Lastra, a book editor from her past. As they navigate their evolving relationship, they discover that love can be found in the most unexpected places.",
        "genre": "Small Town Romance",
        "trope": ["Enemies to Lovers", "Small Town Romance", "Second Chance Romance"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/aUyIeuk"
    },
    {
        "title": "Love and Other Words",
        "author": "Christina Lauren",
        "image": "images/laow.jpg",
        "description": "Macy Sorensen and Elliot Petropoulos were once inseparable, sharing a deep bond through their love of books. Years later, they reunite and confront the unresolved feelings and secrets that kept them apart, leading to a journey of rediscovery and second chances.",
        "genre": "Small Town Romance",
        "trope": ["Second Chance Romance", "Friends to Lovers"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/3vaVq6c"
    },
    {
        "title": "Love & Gelato",
        "author": "Jenna Evans Welch",
        "image": "images/loveandgelato.jpg",
        "description": "After her mother's death, Lina travels to Italy to fulfill her mother's wish. There, she uncovers secrets about her mother's past and embarks on a journey of self-discovery and romance, all set against the backdrop of beautiful Italian landscapes.",
        "genre": "Young Adult Romance",
        "trope": ["Love Triangle"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "FMC",
        "link": "https://a.co/d/hehg6Rp"
    },
    {
        "title": "Red, White & Royal Blue",
        "author": "Casey McQuiston",
        "image": "images/rwrb.jpg",
        "description": "A witty and heartfelt romance between Alex Claremont-Diaz, the First Son of the United States, and Prince Henry of Wales. Their initially fake friendship blossoms into a passionate love affair, navigating the complexities of public life and personal identity.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers", "Fake Dating"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "MMC",
        "link": "https://a.co/d/8h8ucmp"
    },
    {
        "title": "They Both Die at the End",
        "author": "Adam Silvera",
        "image": "images/tbdate.jpg",
        "description": "Two boys, Mateo and Rufus, receive a call informing them that they will die within the next 24 hours. They meet through an app called Last Friend and spend their final day together, forming a deep and poignant connection.",
        "genre": "Young Adult Romance",
        "trope": ["Forced Proximity"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "MMC",
        "link": "https://a.co/d/1tWzINo"
    },
    {
        "title": "The Spanish Love Deception",
        "author": "Elena Armas",
        "image": "images/tsld.jpg",
        "description": "Catalina Martín needs a date for her sister's wedding in Spain to avoid questions about her single status. She convinces Aaron Blackford, her infuriating colleague, to accompany her, leading to unexpected chemistry and romance.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Enemies to Lovers", "Workplace"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC",
        "link": "https://a.co/d/40eYFEE"
    },
    {
        "title": "The Bromance Book Club",
        "author": "Lyssa Kay Adams",
        "image": "images/tbbc.jpg",
        "description": "Gavin Scott, a professional baseball player, joins a secret book club of men who read romance novels to improve their relationships. With the help of his clubmates, he works to win back his wife, Thea.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Closed Door",
        "POV": "MMC",
        "link": "https://a.co/d/cxx4sgD"
    },
    {
        "title": "King of Wrath",
        "author": "Ana Huang",
        "image": "images/kingofwrath.jpg",
        "description": "Dante, a powerful businessman, is forced into an arranged engagement with Vivian, a woman from a rival family. Their mutual disdain turns into a passionate and complex relationship.",
        "genre": "Dark Romance",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "MMC",
        "link": "https://a.co/d/acxhxfJ"
    },
    {
        "title": "Twisted Love",
        "author": "Ana Huang",
        "image": "images/twistedlove.jpg",
        "description": "Aidan, a photographer, is tasked with looking after his best friend's sister, Ava. Their close proximity leads to intense emotions and a forbidden romance.",
        "genre": "Dark Romance",
        "trope": ["Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/1QaDPNa"
    },
    {
        "title": "The Seven Year Slip",
        "author": "Ashley Poston",
        "image": "images/tsys.jpg",
        "description": "A whimsical romance about a woman who finds herself slipping seven years into the past, where she meets her future love. As she navigates the complexities of time and relationships, she discovers that love transcends time.",
        "genre": "Romantic Comedy",
        "trope": ["Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC",
        "link": "https://a.co/d/gZ2dgSQ"
    },
    {
        "title": "Fourth Wing",
        "author": "Rebecca Yarros",
        "image": "images/fourthwing.jpg",
        "description": "In a world where dragons and magic exist, a young woman must navigate a dangerous academy to prove her worth. Amidst the trials, she finds unexpected allies and a blossoming romance.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/0V3Z7R6"
    },
    {
        "title": "Punk 57",
        "author": "Penelope Douglas",
        "image": "images/punk57.jpg",
        "description": "Two high school pen pals, who have never met, develop a deep connection through letters. When they finally meet, sparks fly, leading to a tumultuous and passionate relationship.",
        "genre": "Dark Romance",
        "trope": ["Enemies to Lovers"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/euhuRQg"
    },
    {
        "title": "Lightlark",
        "author": "Alex Aster",
        "image": "images/lightlark.jpg",
        "description": "On the island of Lightlark, where every century the rulers of six realms gather to compete in a deadly game, a young woman must navigate treacherous alliances and uncover secrets that could change the fate of her world.",
        "genre": "Fantasy Romance",
        "trope": ["Enemies to Lovers"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "FMC",
        "link": "https://a.co/d/hICoSVi"
    },
    {
        "title": "Behind the Net",
        "author": "Stephanie Archer",
        "image": "images/behindthenet.jpg",
        "description": "Pippa Hartley, an aspiring musician, becomes the personal assistant to Jamie Streicher, the brooding and attractive NHL goalie she had a crush on in high school.",
        "genre": "Sports Romance",
        "trope": ["Enemies to Lovers", "Second Chance Romance", "Grumpy/Sunshine"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/2fdrt7a"
    },
    {
        "title": "The Unhoneymooners",
        "author": "Christina Lauren",
        "image": "images/theunhoneymooners.jpg",
        "description": "After a wedding goes disastrously wrong, two sworn enemies are forced to go on a honeymoon together. As they navigate the trip, they discover unexpected feelings for each other.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers", "Forced Proximity", "Fake Dating"],
        "series": true,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/5ylKszQ"
    },
    {
        "title": "Funny Story",
        "author": "Emily Henry",
        "image": "images/funnystory.jpg",
        "description": "A woman, heartbroken after her fiancé leaves her for his childhood friend, moves to a small town and becomes roommates with the ex-fiancé's ex-best friend. Together, they navigate their shared history and find unexpected love.",
        "genre": "Romantic Comedy",
        "trope": ["Enemies to Lovers", "Forced Proximity"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/hPPy87i"
    },
    {
        "title": "The Love Hypothesis",
        "author": "Ali Hazelwood",
        "image": "images/thelovehypothesis.jpg",
        "description": "Olive Smith, a third-year Ph.D. candidate at Stanford University, doesn't believe in lasting romantic relationships. To convince her best friend Anh that she's moved on from her ex, Olive pretends to be dating her professor, Adam Carlsen. What starts as a fake relationship soon turns into something real, challenging Olive's beliefs about love and her own heart.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Enemies to Lovers", "Workplace"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "FMC",
        "link": "https://a.co/d/i9uf8KY"
    },
    {
        "title": "The Kiss Quotient",
        "author": "Helen Hoang",
        "image": "images/thekissquotient.jpg",
        "description": "A woman with Asperger's hires an escort to teach her about relationships, leading to a romance that challenges their perceptions of love.",
        "genre": "Romantic Comedy",
        "trope": ["Fake Dating", "Slow Burn"],
        "series": false,
        "spice-level": "Open Door",
        "POV": "Dual",
        "link": "https://a.co/d/fUpx1ND"
    }
]
  
// get user input from the form
function getUserPreferences() {
    const questionOne = document.querySelector('input[name="questionOne"]:checked')?.value;
    const questionTwo = document.querySelector('input[name="questionTwo"]:checked')?.value;
    const questionThree = document.querySelector('input[name="questionThree"]:checked')?.value;
    const questionFour = document.querySelector('input[name="questionFour"]:checked')?.value;
    const questionFive = document.querySelector('input[name="questionFive"]:checked')?.value;
  
    return { questionOne, questionTwo, questionThree, questionFour, questionFive };
  }
  
function findBookMatches() {
    const preferences = getUserPreferences();
    if (
        !preferences.questionOne ||
        !preferences.questionTwo ||
        !preferences.questionThree ||
        !preferences.questionFour ||
        !preferences.questionFive
    ) {
        alert("Please answer all questions before getting your match.");
        return; // makes sure all questions are answered
    }

    const matchedBooks = [];

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        // Only consider books with matching genre
        if (preferences.questionThree === book.genre) {
            let matchCount = 0;

            if (preferences.questionOne === book.POV) matchCount++;
            if (book.trope.includes(preferences.questionTwo)) matchCount++;
            if (preferences.questionFour === book["spice-level"]) matchCount++;
            if (preferences.questionFive === (book.series ? "Yes" : "No")) matchCount++;

            // Attach matchCount so you can sort later if desired
            book.matchScore = matchCount;

            matchedBooks.push(book);
        }
    }

    if (matchedBooks.length > 0) {
        // sorts by best match first
        matchedBooks.sort((a, b) => b.matchScore - a.matchScore);

        localStorage.setItem("matchedBooks", JSON.stringify(matchedBooks));
        localStorage.setItem("noMatch", "false");
    } else {
        localStorage.setItem("noMatch", "true");
    }

    window.location.href = 'recommendation.html';
}


  // attach the function to form submission or button click
  document.getElementById("gonext").addEventListener("click", function (event) {
    event.preventDefault(); // prevent form submission to keep the user on the same page
    findBookMatches();
  });