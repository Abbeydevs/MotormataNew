
// Periodic Service
$(".mc-period-services .ps-select-car-drpdwn").on("click", function() {

    $(".basic-service").slideDown();
    $(".mc-period-services .ps-select-car-drpdwn").css("display", "none");
    $(".mc-period-services .ps-select-car-drop-up").css("display", "block");
    
})
 
$(".mc-period-services .ps-select-car-drop-up").on("click", function() {

    $(".basic-service").slideUp();
    $(".standard-service").slideUp();
    $(".ps-select-car-drpdwn").css("display", "block");
    $(".ps-select-car-drop-up").css("display", "none");
    
})


$(".basic-service i.fa-angle-right").on("click", function () {
    $(".basic-service").fadeOut();
    $(".standard-service").fadeIn();
})

$(".standard-service i.fa-angle-left").on("click", function () {
    $(".standard-service").fadeOut();
    $(".basic-service").fadeIn();
})


// AC Service
$(".mc-ac-repair .ps-select-car-drpdwn").on("click", function() {

    $(".ac-basic-service").slideDown();
    $(".mc-ac-repair .ps-select-car-drpdwn").css("display", "none");
    $(".mc-ac-repair .ps-select-car-drop-up").css("display", "block");
    
})
 
$(".mc-ac-repair .ps-select-car-drop-up").on("click", function() {

    $(".ac-basic-service").slideUp();
    $(".ac-standard-service").slideUp();
    $(".mc-ac-repair .ps-select-car-drpdwn").css("display", "block");
    $(".mc-ac-repair .ps-select-car-drop-up").css("display", "none");
    
})


$(".ac-basic-service i.fa-angle-right").on("click", function () {
    $(".ac-basic-service").fadeOut();
    $(".ac-standard-service").fadeIn();
})

$(".ac-standard-service i.fa-angle-left").on("click", function () {
    $(".ac-standard-service").fadeOut();
    $(".ac-basic-service").fadeIn();
})

$(".ac-standard-service  button.btn").on("click", function() {
    $(".added-to-cart-container").css("display", "block");
})

$(".atc-back-btn").on("click", function() {
    $(".added-to-cart-container").css("display", "none");
})

// document.querySelector(".ac-standard-service button.btn").addEventListener("click", function() {
//     alert("Your items has been added to cart");
// })