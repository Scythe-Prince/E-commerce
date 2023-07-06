const show_menu = document.querySelector("#show-menu");
const sec_nav_bar = document.querySelector(".sec-nav");

// const category = document.querySelector("#special-link");
// const category_menu = document.querySelector("#categories");

show_menu.addEventListener("click",function (){
    sec_nav_bar.classList.toggle("hidden");
})

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
