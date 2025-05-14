//Makes the navbar sticky
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var header = document.querySelector(".header-body");
    var headerBottom = header.offsetTop + header.offsetHeight - navbar.offsetHeight*2;

    if (window.scrollY >= headerBottom) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})