const show_menu = document.querySelector("#show-menu");
const sec_nav_bar = document.querySelector(".sec-nav");
// #################################################################
const electro_menu = document.querySelector("#electro-menu");
const mobile_menu = document.querySelector("#mobile-menu");
const grocery_menu = document.querySelector("#grocery-menu");

// #################################################################
const beauty_menu = document.querySelector("#beauty-menu");
const fashion_menu = document.querySelector("#fashion-menu");
const home_menu = document.querySelector("#home-menu");

// #################################################################
const Sports_menu = document.querySelector("#Sports-menu");
const Baby_menu = document.querySelector("#Baby-menu");
const Automotive_menu = document.querySelector("#Automotive-menu");

// #################################################################
const Books_menu = document.querySelector("#Books-menu");
const Stationery_menu = document.querySelector("#Stationery-menu");
const Music_menu = document.querySelector("#Music-menu");

// #################################################################
const arr_menu = [
    electro_menu,
    mobile_menu,
    grocery_menu,
    beauty_menu,
    fashion_menu,
    home_menu,
    Sports_menu,
    Baby_menu,
    Automotive_menu,
    Books_menu,
    Stationery_menu,
    Music_menu,
];

const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");
const link5 = document.querySelector("#link5");
const link6 = document.querySelector("#link6");
const link7 = document.querySelector("#link7");
const link8 = document.querySelector("#link8");
const link9 = document.querySelector("#link9");
const link10 = document.querySelector("#link10");
const link11 = document.querySelector("#link11");
const link12 = document.querySelector("#link12");
// const category = document.querySelector("#special-link");
// const category_menu = document.querySelector("#categories");
link1.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {
            
        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    electro_menu.classList.toggle("hidden");
});

link2.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    mobile_menu.classList.toggle("hidden");
});

link3.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    grocery_menu.classList.toggle("hidden");
});
// ###############################################################
link4.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    beauty_menu.classList.toggle("hidden");
});
link5.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    fashion_menu.classList.toggle("hidden");
});
link6.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    home_menu.classList.toggle("hidden");
});
// ###############################################################
link7.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    Sports_menu.classList.toggle("hidden");
});
link8.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    Baby_menu.classList.toggle("hidden");
});
link9.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    Automotive_menu.classList.toggle("hidden");
});
// ###############################################################
link10.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    Books_menu.classList.toggle("hidden");
});
link11.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    Stationery_menu.classList.toggle("hidden");
});
link12.addEventListener("click", function () {
    for (let i = 0; i < arr_menu.length; i++) {
        if (arr_menu[i].classList.contains("hidden") === true) {

        } else if (arr_menu[i].classList.contains("hidden") === false)
            arr_menu[i].classList.add("hidden");
    }
    Music_menu.classList.toggle("hidden");
});
// ###############################################################

show_menu.addEventListener("click", function () {
    sec_nav_bar.classList.toggle("hidden");
});

// category.addEventListener("click",function(){
//     category_menu.classList.toggle("active");
// category_menu.classList.toggle("hidden");
// })

// const electro_button =document.getElementById("link1");
// const electro_menu = document.getElementById("electro-menu");
// electro_button.onclick =function(e) {
//     electro_menu.classList.toggle("active");
//     electro_menu.classList.toggle("hidden");

// }
