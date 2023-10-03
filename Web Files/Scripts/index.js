function headerAnimation() {
    const headerContent = ["E", "C", "S", "S", "C", "o", "m", "p", "u", "t", "e", "r", "S", "c", "i", "e", "n", "c", "e"];
    const ids = ['e', 'c', 's', 's1', 'word1', 'word2'];
    let arrayIndex = 0;
    const delay = 100;
    function updateLetterElement() { 
        const headerElement = document.getElementById(ids[arrayIndex]);
        headerElement.textContent += headerContent[arrayIndex];
        if (arrayIndex < 3) {
            setTimeout(updateLetterElement, delay);
        };
        arrayIndex++;
    }; 
    updateLetterElement();
    function updateWordElements() { 
        const word1 = document.getElementById(ids[4]);
        const word2 = document.getElementById(ids[5]);
        if (word1.textContent.length < 8) {
            word1.textContent += headerContent[arrayIndex];
        } else if (word2.textContent.length < 7) {
            word2.textContent += headerContent[arrayIndex];
        };
        arrayIndex++;
        if (document.getElementById(ids[4]).textContent !== 'Computer' || document.getElementById(ids[5]).textContent !== 'Science') {
            setTimeout(updateWordElements, delay)
        };
    };
    setTimeout(updateWordElements, delay * 5);
    function changeColour() {
        ids.forEach((id) => {
            const element = document.getElementById(id);
            element.style.color = "rgb(80, 49, 48)";
            function revert() {
                element.style.color = "rgb(160, 97, 95)";
            };
            setTimeout(revert, delay * 10);
        });
    };
    setTimeout(changeColour, delay * 23);
};

function revealHeaderCaption() {
    const element = document.getElementById('heading');
    const content = "Meet Our Crew!";
    element.textContent = content;
};

function scrollAnimation() {
    const targetElement = document.getElementById('caption');
    const target = targetElement.getBoundingClientRect().bottom;
    const startPosition = window.scrollY;
    let currentPosition = startPosition;
    const increments = 50;
    const distance = target - currentPosition
    const increment = distance / increments;
    function scrollStep() {
        currentPosition += increment;
        window.scrollTo(0, currentPosition);
        if (currentPosition < target) {
            setTimeout(scrollStep, 10);
        };
    };
    scrollStep();
};

function captionAnimation() {
    const captionContent = ["R", "o", "o", "m", " ", "1", "0", "6"];
    const captionElement = document.getElementById('caption');
    const delay = 100;
    let arrayIndex = 0;
    function updateCaption() {
        captionElement.textContent += captionContent[arrayIndex];
        if (arrayIndex < 7) {
            setTimeout(updateCaption, delay);
        };
        arrayIndex++;
    };
    updateCaption();
    function changeColour() {
        captionElement.style.color = "rgb(80, 49, 48)";
    };
    setTimeout(changeColour, delay * 15);
    function revertColour() {
        captionElement.style.color = "rgb(160, 97, 95)";
    };
    setTimeout(revertColour, delay * 30);
}; 

function imageAnimation() {
    const img = document.getElementById('images');
    let imgWidth = parseInt(window.getComputedStyle(img).width);
    const targetWidth = imgWidth / 10;
    let currentWidth = imgWidth;
    const delay = 25;
    function aniStep() {
        currentWidth -= targetWidth;
        img.style.width = currentWidth + 'px';
        if (currentWidth > targetWidth) {
           setTimeout(aniStep, delay)
        };
    };
    aniStep();
   setTimeout(() => {
    imgWidth = parseInt(window.getComputedStyle(img).width);
    function nameAndImageUpdates(captionContent, imgElement, index) {
        const parentElement = document.getElementById('content-container');
        parentElement.innerHTML = '';
        setTimeout(function() {
            parentElement.innerHTML = imgElement;
            setTimeout(scrollAnimation, 500);
            const caption = document.getElementById('caption');
            function updateCaptionWithNames() {
                caption.textContent = '';
                caption.style.color = 'rgb(160, 97, 95)';
                caption.style.backgroundColor = 'white';
                if (captionContent.length > 10 && captionContent.length >= 22) {
                    caption.style.marginLeft = (captionContent.length + 10) + '%';
                };
                let arrayIndex = 0;
                const delay = 100;
                function updateNameCaption() {
                    caption.textContent += captionContent[arrayIndex];
                    if (arrayIndex < index) {
                        setTimeout(updateNameCaption, delay * 2);
                    };
                    arrayIndex++;
                };
                setTimeout(updateNameCaption, delay * 2)
            };
            updateCaptionWithNames();
        }, 1000);
    };
    let captionContent = ["C", "a", "r", "l", "o", " ", "P", "a", "p", "i"];
    let imgElement = "<img src='Web Files/Images/Carlo.jpg' alt='Carlo's Image Unavailable' id='images'></img>";
    let index = captionContent.length - 1;
    nameAndImageUpdates(captionContent, imgElement, index); 
    setTimeout(function() {
        const caption = document.getElementById('caption');
        caption.textContent = '';
        imgElement = '';
        captionContent = ["K", "h", "i", "r", "i", "t", "h", "i", "k", " ", "T", "h", "u", "s", "i", "j", "a", "n", "t", "h", "a", "n"];
        imgElement = "<img src='Web Files/Images/Khirithik.jpg' alt='Khirithik's Image Unavailable' id='images'></img>";
        index = captionContent.length - 1;
        nameAndImageUpdates(captionContent, imgElement, index);
        setTimeout(function() {
            caption.textContent = '';
            imgElement = '';
            captionContent = ["M", "a", "r", "y", "a", "m", " ", "K", "h", "a", "n"];
            imgElement = "<img src='Web Files/Images/Maryam.PNG' alt='Maryam's Image Unavailable' id='images'></img>";
            index = captionContent.length - 1;
            caption.style.marginLeft = '40%';
            nameAndImageUpdates(captionContent, imgElement, index);
            setTimeout(function() {
                caption.textContent = '';
                imgElement = '';
                captionContent = ["J", "a", "d", "e", "n", " ", "P", "e", "r", "i", "c"];
                imgElement = "<img src='Web Files/Images/Jaden.jpg' alt='Jaden's Image Unavailable' id='images'></img>";
                index = captionContent.length - 1;
                caption.style.marginLeft = '40%';
                nameAndImageUpdates(captionContent, imgElement, index);
                setTimeout(function() {
                    caption.textContent = '';
                    imgElement = '';
                    captionContent = ["J", "a", "s", "o", "n", " ", "D", "o", "a", "d"];
                    imgElement = "<img src='Web Files/Images/Jason.PNG' alt='Jason's Image Unavailable' id='images'></img>";
                    index = captionContent.length - 1;
                    nameAndImageUpdates(captionContent, imgElement, index);
                    setTimeout(function() {
                        caption.textContent = '';
                        imgElement = '';
                        captionContent = ["A", "l", "i", "c", "i", "a", " ", "Z", "h", "a", "n", "g"];
                        imgElement = "<img src='Web Files/Images/Alicia.png' alt='Alicia's Image Unavailable' id='images'></img>";
                        index = captionContent.length - 1;
                        nameAndImageUpdates(captionContent, imgElement, index);
                    }, 5000)
                }, 5000)
            }, 5000)
        }, 8000)
    }, 5000);
   }, 1500);
};

function createButton() {
    const btn = document.getElementById('btn1');
    btn.style.visibility = "visible";
};

function scrollToButton() {;
    const target = document.getElementById('caption').getBoundingClientRect().bottom
    const startPosition = window.scrollY;
    let currentPosition = startPosition;
    const distance = target - currentPosition;
    const increments = 50;
    const increment = distance / increments;
    function scrollStep() {
        currentPosition -= increment;
        window.scrollTo(0, currentPosition);
        if (currentPosition !== target) {
            setTimeout(scrollStep, 10);
        };
    };
    scrollStep();
};

function createSignUpButton() {
    const btn = document.getElementById('btn2');
    btn.style.visibility = "visible";
};

