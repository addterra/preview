

// open in40s site in a new tab when clicked on logo
function in40s() {
    window.open('https://www.in40s.us/', '_blank');
}


// rerun the gif 

function gif() {
    document.querySelector(".logo_gif").src = "images/logo gif.gif"; 
}


// activate title animation when the title is on screen 

window.onload = main;

function main() {
    window.addEventListener("scroll", function(){
        if(isElementIntoView("#about")) document.querySelector("#title1").style.animationName = "left"; 
    });
}

function title2() {
    window.addEventListener("scroll", function(){
        if(isElementIntoView("#services")) document.querySelector("#title2").style.animationName = "right";
    });
}

function isElementIntoView(el) { 
    var e = document.querySelector(el);
    var rect = e.getBoundingClientRect();
    return  window.innerHeight-rect.top >= 0; 
}