var slideIndex = 1;
plusSlides(0);

function plusSlides(n) {
  showSlides(slideIndex += n);
  setTimeout(plusSlides, 5000, 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function changeImage() {
  document.getElementById("img").src = images[x]
  x++;
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
