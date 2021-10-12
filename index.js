const TypeWriter = function (txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function () {

    // Current Index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if its deleting

    if (this.isDeleting) {
        //Remove Character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        //Add character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert text into the element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}


// The read more button
var readMoreBtn = document.getElementById('readMore_btn');

readMoreBtnShown = readMoreBtn.addEventListener("click", () => {
    readMoreBtn.style.display = 'none';

    var numberOfHiddenElement = document.querySelectorAll(".hidden-element").length;

    for (var i = 0; i < numberOfHiddenElement; i++) {
        document.querySelectorAll(".hidden-element")[i].style.display = 'block';
    }
});


// The main navbar Drop Down Link
function myNewFunction() {
    document.getElementById("homeDropDown").classList.toggle("showing");
}

window.onclick = function (event) {
    if (!event.target.matches('.service-link')) {
        var dropdowns = document.getElementsByClassName("drop-down-links");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showing')) {
                openDropdown.classList.remove('showing');
            }
        }
    }
}


function myFunction() {
    document.getElementById("sideNavHomeDropDown").style.display = "block";
}



//   SideNav
function openNav() {
    document.getElementById("sideNav").style.display = "block";
}

function closeNav() {
    document.getElementById("sideNav").style.display = "none";
}



