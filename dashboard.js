// Dashboard Page
const countdown = () => {
    const countDate = new Date("November 4, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //How the time really work
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculating the time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //Updating our html page witht the time
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
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


