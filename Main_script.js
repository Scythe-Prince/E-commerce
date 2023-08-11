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


// start image-slider
let slider_images = Array.from(document.querySelectorAll(".image-slider-container img"));

let current_slide = 1;
let slide_number = document.getElementsByClassName("image-slider-container");
let slidercount = slider_images.length;
let next_arrow = document.querySelector(".arrow-right");
let prev_arrow = document.querySelector(".arrow-left");
next_arrow.onclick = next_slide;
prev_arrow.onclick = prev_slide;

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
paginationElement.classList.add("slider-bar");
for (let i = 1; i <= slidercount; i++) {
    let paginationitem = document.createElement('li');
    paginationitem.setAttribute("data-index", i);
    paginationElement.appendChild(paginationitem);
}
document.querySelector(".image-slider-container").appendChild(paginationElement);

// get pagination bullets 
var paginationUL = document.getElementById("pagination-ul");
let slider_bullets = Array.from(document.querySelectorAll(".slider-bar li"));
for (var i = 0; i < slider_bullets.length; i++) {
    slider_bullets[i].onclick = function () {
        current_slide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}
checker();
function next_slide() {
    current_slide++;
    if (current_slide == 8) {
        current_slide = 1;
    }
    checker();
}
setInterval(function next_slide() {
    current_slide++;
    if (current_slide == 8) {
        current_slide = 1;
    }
    checker();
},2500);
function prev_slide() {
    current_slide--;
    if (current_slide == 0) {
        current_slide = 7;
    }
    checker();
}
// create checker function
function checker() {
    // set active class 
    active_removal();
    slider_images[current_slide - 1].classList.add("img-active");
    paginationUL.children[current_slide - 1].classList.add("image-slider-active");
}
function active_removal() {
    // loop through images
    slider_images.forEach(function (img) {
        img.classList.remove("img-active");
    });
    // loop through bullets
    slider_bullets.forEach(function (bullet) {
        bullet.classList.remove("image-slider-active");
    });
}
// end image-slider


// start product scroller

productScroll();

function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    let slide = document.getElementById("slide");
    let item = document.getElementById("slide");

    for (let i = 0; i < next.length; i++) {
        //refer elements by class name

        let position = 0; //slider postion

        prev[i].addEventListener("click", function () {
            //click previos button
            if (position > 0) {
                //avoid slide left beyond the first item
                position -= 1;
                translateX(position); //translate items
            }
        });

        next[i].addEventListener("click", function () {
            if (position >= 0 && position < hiddenItems()) {
                //avoid slide right beyond the last item
                position += 1;
                translateX(position); //translate items
            }
        });
    }

    function hiddenItems() {
        //get hidden items
        let items = getCount(item, false);
        let visibleItems = slider.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
    }
}

function translateX(position) {
    //translate items
    slide.style.left = position * -300 + "px";
}

function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}
// end product scroller

// start product scroller 2
productScroll2();

function productScroll2() {
    let slider2 = document.getElementById("slider2");
    let next2 = document.getElementsByClassName("pro-next2");
    let prev2 = document.getElementsByClassName("pro-prev2");
    let slide2 = document.getElementById("slide2");
    let item2 = document.getElementById("slide2");

    for (let i = 0; i < next2.length; i++) {
        //refer elements by class name

        let position2 = 0; //slider postion

        prev2[i].addEventListener("click", function () {
            //click previos button
            if (position2 > 0) {
                //avoid slide left beyond the first item
                position2 -= 1;
                translateX2(position2); //translate items
            }
        });

        next2[i].addEventListener("click", function () {
            if (position2 >= 0 && position2 < hiddenItems2()) {
                //avoid slide right beyond the last item
                position2 += 1;
                translateX2(position2); //translate items
            }
        });
    }

    function hiddenItems2() {
        //get hidden items
        let items = getCount2(item2, false);
        let visibleItems = slider2.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
    }
}

function translateX2(position2) {
    //translate items
    slide2.style.left = position2 * -300 + "px";
}

function getCount2(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount2(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

// end product scroller 2


// start product scroller 3
productScroll3();

function productScroll3() {
    let slider3 = document.getElementById("slider3");
    let next3 = document.getElementsByClassName("pro-next3");
    let prev3 = document.getElementsByClassName("pro-prev3");
    let slide3 = document.getElementById("slide3");
    let item3 = document.getElementById("slide3");

    for (let i = 0; i < next3.length; i++) {
        //refer elements by class name

        let position3 = 0; //slider postion

        prev3[i].addEventListener("click", function () {
            //click previos button
            if (position3 > 0) {
                //avoid slide left beyond the first item
                position3 -= 1;
                translateX3(position3); //translate items
            }
        });

        next3[i].addEventListener("click", function () {
            if (position3 >= 0 && position3 < hiddenItems3()) {
                //avoid slide right beyond the last item
                position3 += 1;
                translateX3(position3); //translate items
            }
        });
    }

    function hiddenItems3() {
        //get hidden items
        let items = getCount3(item3, false);
        let visibleItems = slider3.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
    }
}

function translateX3(position3) {
    //translate items
    slide3.style.left = position3 * -300 + "px";
}

function getCount3(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount3(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

// end product scroller 3


// start readmore button
const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})

// end readmore button
