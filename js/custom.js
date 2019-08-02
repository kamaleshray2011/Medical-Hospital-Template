$(document).ready(function() {
    $('.main_slider').owlCarousel({
        loop: true,
        margin: 50,
        slideBy: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.team').owlCarousel({
        loop: true,
        margin: 100,
        slideBy: 1,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })


    var containerEl = document.querySelector('.filter-gallery');

    var mixer = mixitup(containerEl);


});