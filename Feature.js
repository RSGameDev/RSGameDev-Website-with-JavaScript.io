// JavaScript source code


// Darkmode 
function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Sticky bar

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        stickyFunction(navbar, sticky);
    };

    function stickyFunction(navbar, sticky) {
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
});

// Popup
function popUpFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// Full Screen
/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}