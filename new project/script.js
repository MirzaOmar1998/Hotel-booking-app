let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
Window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider",{
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true, 
    },
    breakpoints: {
        0: {
            slidesPerview:1,
        },
        768: {
            slidesPerview:2,
        },
        991: {
            slidesPerview:3,
        },
    },
});

var swiper = new Swiper(".gallery-slider",{
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:1500,
        disableOnInteraction:false,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true, 
    },
    breakpoints: {
        0: {
            slidesPerview:1,
        },
        768: {
            slidesPerview:3,
        },
        991: {
            slidesPerview:4,
        },
    },
});


var swiper = new Swiper(".review-slider",{
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true, 
    },
});


let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco =>{subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})