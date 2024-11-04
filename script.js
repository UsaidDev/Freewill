let menu = document.getElementsByClassName("menu")[0];
let toggImg = document.getElementsByClassName("toggImg")[0];
let links = document.getElementsByClassName("links")[0];
let linksArray = document.querySelectorAll(".links .link");
let linkBtn = document.querySelector(".links .linkBtn");
let menuSrc;

const toggleFunc = () => {
    links.classList.toggle("show");
    menuSrc = links.classList.contains("show") ? "assets/close.svg" : "assets/menu.svg";
    toggImg.src = menuSrc;    
}

menu.addEventListener("click",toggleFunc);

linksArray.forEach((link,i) => {
    link.addEventListener("click",toggleFunc);
});
linkBtn.addEventListener("click",toggleFunc);



// -----------SWIPER_1----------
const swiper = new Swiper("#swiper-1", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides:true,
        autoplay: {
            delay: 1500, 
            disableOnInteraction: false,
            stopOnLastSlide: false,
        },
        allowTouchMove: false,
        loop:true
       
});


// -----------SWIPER_2----------
const swiper2 = new Swiper("#team #swiper-2",{
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl:".swiper-2-custom-nav .nav-right",
        prevEl:".swiper-2-custom-nav .nav-left"
    },
    autoplay: {
        delay: 1500, 
        disableOnInteraction: true,
        stopOnLastSlide: false,
    }, 
    breakpoints : {
        1000 : {
            centeredSlides: false,
            loop: false
        }
    }
      
});


// -----------SWIPER_3----------
const swiper3 = new Swiper("#gallery #swiper-3",{
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl:".swiper-3-custom-nav .nav-right",
        prevEl:".swiper-3-custom-nav .nav-left"
    },
    autoplay: {
        delay: 1500, 
        disableOnInteraction: true,
        stopOnLastSlide: false,
    },
    breakpoints : {
        1000 : {
            centeredSlides: false,
            loop: false
        }
    }
});

