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