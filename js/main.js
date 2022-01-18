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

const menu = document.getElementById("menu")
const navigation = document.getElementsByClassName("header__mobile__modal")
const close = document.getElementById("close-navigation")
menu.addEventListener("click",function() {
    navigation[0].classList.add("is-show")
    close.classList.add("is-show")
})

close.addEventListener("click",function() {
    document.getElementById("navigation").classList.remove("is-show")
    close.classList.remove("is-show")
})


const mobile_submenu = Array.from(document.querySelectorAll(".header__mobile__item"));
mobile_submenu.forEach((element) => {
    const submenu = element.querySelector(".header__mobile__submenu");
    if (!submenu) { return; }
    element.addEventListener("pointerenter", (e) => {
        submenu.style.height = "auto";
        let height = submenu.offsetHeight;
        submenu.style.height = "0px";
        setTimeout(() => {
            submenu.style.height = `${height}px`;
        }, 16);
    });
    element.addEventListener("pointerleave", (e) => {
        submenu.style.height = null;
    });
});