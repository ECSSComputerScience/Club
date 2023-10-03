function manageHeadingContent(title, caption) {
    const elements = document.querySelectorAll('.heading-content');
    elements.forEach((element) => {
        element.style.visibility = "collapse";
    });
    elements[0].textContent = title;
    elements[1].textContent = caption;
    function restyleHeadingContent() {
        elements.forEach((element) => {
            setTimeout(function() {
                element.style.visibility = "visible";
                element.style.color = "rgb(160, 97, 95)";
                setTimeout(function() {
                    element.style.color = "black";
                    elements[0].style.fontSize = "8vh";
                    elements[1].style.fontSize = "5vh";
                    setTimeout(function() {
                        element.style.color = "rgb(160, 97, 95)";
                    }, 500)
                }, 200)
            }, 100)
        });
    };
    setTimeout(restyleHeadingContent, 300)
};

let title = 'Meet the Crew!';
let caption = '';

let target = document.documentElement.getBoundingClientRect().bottom;

function revealImage(elementCode) {
    const imgElement = document.getElementById('img');
    imgElement.innerHTML = elementCode
};

function scroll(target) {
    const startPosition = window.scrollY;
    let currentPosition = startPosition;
    const increments = 50;
    const distance = target - currentPosition;
    const increment = distance / increments;
    function scrollStep() {
        currentPosition += increment;
        window.scrollTo(0, currentPosition);
        if (currentPosition !== target) {
            setTimeout(scrollStep, 0.25);
        };
    };
    scrollStep();
};


function revealBioContent(content) {
    const elements = document.querySelectorAll('.content');
    let index = 0;
    elements.forEach((element) => {
        if (index < content.length) {
            element.textContent = content[index];
            index++;
        };
    });
};

function createButton() {
    const element = document.getElementById('button-placeholder');
    element.innerHTML = "<button id='nextMemberButton'>Next Member<button>"
};

function clearContent() {
    const headerElements = document.querySelectorAll('.heading-content');
    const elements = document.querySelectorAll('.content');
    headerElements.forEach((element) => {
        element.textContent = '';
    });
    elements.forEach((element) => {
        element.textContent = '';
    });
};

function rerun() {
    createButton();
    target = document.documentElement.getBoundingClientRect().top;
    manageHeadingContent(title, caption);
    setTimeout(function() {
        revealImage(HTML_img);
        setTimeout(function() {
            revealBioContent(bioContent);
            setTimeout(createButton, 100);
            scroll(target);
        }, 1500)
    }, 1000)
};

let HTML_img = "<img src='Web Files/Images/Carlo.jpg' alt='Carlo's Image Unavailable' id='images'></img>";
let bioContent = [
    "Hi! My name is Carlo Papi. I am in the 10th Grade, and I am co-president and a managing partner of this computer science club, along with my partner, Jaden Peric!",
    "I am knowledgeable in static front-end web development in the languages HTML, CSS, and JavaScript. As a matter of fact, I made this very website from scratch using those languages! (I did my best, LOL, still learning) I'm also familiar with Python, and hope to learn basic back-end development in Python.",
    "Most of my knowledge in this field comes from self-teaching, using sources such as YouTube, books, and ChatGPT, so I am always learning.",
    "I look forward to getting to know you!"
];

function main() {
    manageHeadingContent(title, caption);
    title = 'Carlo Papi';
    caption = 'Co-President (Managing Partner)';
    setTimeout(function() {
        manageHeadingContent(title, caption);
    }, 3000)
    setTimeout(function() {
        revealImage(HTML_img);
    }, 4000);
    setTimeout(function() {
        revealBioContent(bioContent);
    }, 4500);
    setTimeout(createButton, 6000);
    scroll(target);
    const button = document.getElementById('button-placeholder');
    button.addEventListener('click', function() {  
        title = 'Jaden Peric';
        caption = 'Co-President (Managing Partner)';
        HTML_img = "<img src='Web Files/Images/Jaden.jpg' alt='Jaden's Image Unavailable' id='images'></img>";
        bioContent = [
            "Hello there! My name is Jaden Peric! That's right there's no 'Y'.",
            "Anyhow, this is a biography of me so here's a little bit about myself.",
            "I love chemistry, computer science, and computer engineering.",
            "I hope this is enough, if it's not, tell Carlo 'too bad'."
        ];
        clearContent();
        rerun();
        target = document.documentElement.getBoundingClientRect().bottom;
        button.addEventListener('click', function() {
            title = 'Maryam Khan';
            caption = 'Senior Partner';
            HTML_img = "<img src='Web Files/Images/Maryam.PNG' alt='Maryam's Image Unavailable' id='images'></img>";
            bioContent = [
                "Hey there! I'm Maryam Khan and I'm all about listening to music, studying, and having lively conversations.",
                "My endless energy keeps me fully engaged in life's experiences."
            ];
            clearContent();
            rerun();
            target = document.documentElement.getBoundingClientRect().bottom;
            scroll(target);
            button.addEventListener('click', function() {
                title = 'Khirithik Thusijanthan';
                caption = 'Senior Partner';
                HTML_img = "<img src='Web Files/Images/Khirithik.jpg' alt='Khirithik's Image Unavailable' id='images'></img>";
                bioContent = [
                    "Hello! My name is Khirithik Thusijanthan, I have a basic knowledge of Python.",
                    "I am also a member of the Emily Carr Music Council and Emily Carr Photo Club.",
                    "I love reading, listening to music and going on bike rides."
                ];
                clearContent();
                rerun();
                target = document.documentElement.getBoundingClientRect().bottom;
                scroll(target);
                button.addEventListener('click', function() {
                    title = 'Alicia Zhang';
                    caption = 'Senior Partner';
                    HTML_img = "<img src='Web Files/Images/Alicia.png' alt='Alicia's Image Unavailable' id='images'></img>";
                    bioContent = [
                        "Hi guys, my name is Alicia Zhang!",
                        "I am in grade 11 and would consider myself a pretty artistic person.",
                        "A fun fact about me is I love watching and reading cheesy rom-coms- the cringier the better :)"
                    ];
                    clearContent();
                    rerun();
                    target = document.documentElement.getBoundingClientRect().bottom;
                    scroll(target);
                    button.addEventListener('click', function() {
                        title = 'Jason Doad';
                        caption = 'Senior Partner';
                        HTML_img = "<img src='Web Files/Images/Jason.PNG' alt='Jason's Image Unavailable' id='images'></img>";
                        bioContent = [
                            "Hi! I'm Jason Doad! I enjoy learning about computers, apps, and how they work.",
                            "Some of my interests are watching movies and listening to music."
                        ];
                        clearContent();
                        rerun();
                        target = document.documentElement.getBoundingClientRect().bottom;
                        document.getElementById('nextMemberButton').innerHTML = '';
                    });
                });
            });
        });     
    });      
};

document.addEventListener('DOMContentLoaded', main);




