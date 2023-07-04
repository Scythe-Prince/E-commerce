const electro_button =document.getElementById("link1");
const electro_menu = document.getElementById("electro-menu");
electro_button.onclick =function(e) {
    electro_menu.classList.toggle("active");
    electro_menu.classList.toggle("hidden");
    
}
