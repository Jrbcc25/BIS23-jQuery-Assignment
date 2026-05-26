let slideIndex = 1;
let autoSlide;

showSlides(slideIndex);
startAutoSlide();

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetAutoSlide();
}

/*
OLD JAVASCRIPT VERSION

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

*/

function showSlides(n) {

  let slides = $(".slide");
  let dots = $(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  $(".slide").hide();

  $(".dot").removeClass("active");

  slides.eq(slideIndex - 1).show();

  dots.eq(slideIndex - 1).addClass("active");
}

function startAutoSlide() {
  autoSlide = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}