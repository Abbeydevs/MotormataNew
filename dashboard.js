// Dashboard Page
const countdown = () => {
    const countDate = new Date("November 4, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the time really work
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating the time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / seconds);

    //Updating our html page with the time
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".seconds").innerText = textSecond;
}

setInterval(countdown, 1000);


//Dashboard Modal
function openModal() {
    document.querySelector(".transaprent-modal").style.display = "block";
}

function closeModal() {
    document.querySelector(".transaprent-modal").style.display = "none";
}


// The date button dropdown for History
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach (o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    })
})


// History Drop down
function dissolveContainerDetails() {
    document.querySelector(".battery-change-box").style.display = "block";
    document.querySelector(".collapsible-icon").style.display = "none";
    document.querySelector(".collapsible-icon-close").style.display = "block";
}

function closeContainerDetails() {
    document.querySelector(".battery-change-box").style.display = "none";
    document.querySelector(".collapsible-icon").style.display = "block";
    document.querySelector(".collapsible-icon-close").style.display = "none";
}

// Recommendation   
function openRecommendationModal() {
    document.querySelector(".dash-recommendation-modal").style.display = "block";
}

function closeRecommendationModal() {
    document.querySelector(".dash-recommendation-modal").style.display = "none";
}

// Details Hidden Container   
function openDetails() {
    document.querySelector(".carPart-container").style.display = "block";
    document.querySelector(".battry-detail-btn").style.display = "none";
    document.querySelector(".closeDetail-btn").style.display = "block";
}

function closeDetails() {
    document.querySelector(".carPart-container").style.display = "none";
    document.querySelector(".battry-detail-btn").style.display = "block";
    document.querySelector(".closeDetail-btn").style.display = "none";
}


//User Profile
// Personal Info for Users
var security = document.getElementsByClassName(".security");
var message = document.getElementsByClassName(".message");
var settings = document.getElementsByClassName(".settings");


function personalInfo () {
    
    document.querySelector(".user-personal-informations").style.display = "block";
    document.querySelector(".security-section").style.display = "none";
    document.querySelector(".message-section").style.display = "none";
    document.querySelector(".settings-section").style.display = "none";

    var personalInformation = document.querySelector(".personal-info");
    personalInformation.classList.toggle("active");
}

function security () {
    document.querySelector(".user-personal-informations").style.display = "none";
    document.querySelector(".security-section").style.display = "block";
    document.querySelector(".message-section").style.display = "none";
    document.querySelector(".settings-section").style.display = "none";
}

function message () {
    document.querySelector(".user-personal-informations").style.display = "none";
    document.querySelector(".security-section").style.display = "none";
    document.querySelector(".message-section").style.display = "block";
    document.querySelector(".settings-section").style.display = "none";
}

function settings () {
    document.querySelector(".user-personal-informations").style.display = "none";
    document.querySelector(".security-section").style.display = "none";
    document.querySelector(".message-section").style.display = "none";
    document.querySelector(".settings-section").style.display = "block";
}


// Add Car 
function addCarModal() {
    document.querySelector(".car-transparent-bg").style.display = "block";
}

function closeCarModal() {
    document.querySelector(".car-transparent-bg").style.display = "none";
}


// Dashboard Side Nav
$(".open-nav").on("click", function() {
    $(".dash-side-navigation").css("display", "block");
})

$(".close-nav").on("click", function() {
    $(".dash-side-navigation").css("display", "none");
})