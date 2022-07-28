$(document).ready(function () {

    $('#location').click(function () {
        $('#locationModal').modal('toggle')
    })
    $('#sd-location').click(function () {
        $('#locationModal').modal('toggle')
    })
    
    // header slider 
    $('.offers').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:"<i class='bi bi-arrow-right-circle offer-arrow-pre'></i>",
        nextArrow: "<i class='bi bi-arrow-left-circle offer-arrow-next'></i>"
    })


    $('#trnd-service-1').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:"<i class='bi bi-arrow-left-circle trend-arrow-pre'></i>",
        nextArrow: "<i class='bi bi-arrow-right-circle trend-arrow-next'></i>"
    })

    $('#trnd-service-2').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 350,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:"<i class='bi bi-arrow-left-circle trend-arrow-pre'></i>",
        nextArrow: "<i class='bi bi-arrow-right-circle trend-arrow-next'></i>"
    })
    $('#trnd-service-3').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:"<i class='bi bi-arrow-left-circle trend-arrow-pre'></i>",
        nextArrow: "<i class='bi bi-arrow-right-circle trend-arrow-next'></i>"
    })



})

