var slideIndex = 1;
plusSlides(0);
var x;
function plusSlides(n) {
    showSlides(slideIndex += n);
    x = setTimeout(plusSlides, 5000, 1);
}

function currentSlide(n) {
    clearTimeout(x)
    showSlides(slideIndex = n);
    x = setTimeout(plusSlides, 5000, 1);
}

function changeImage()
{
    document.getElementById("img").src=images[x]
    x++;
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("OBmySlides");
    var dots = document.getElementsByClassName("OBdot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" OBactive", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " OBactive";
}
