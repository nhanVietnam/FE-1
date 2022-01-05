const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        // Responsive breakpoints
        breakpoints: {
        1444:{
            slidesPerView:4,
            spaceBetween:20,
        },
        // when window width is >= 640px
        1299: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        950: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        746: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
}
});