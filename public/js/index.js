document.addEventListener("DOMContentLoaded", function () {
    // Get the current page's URL
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        // Check if the link's "href" attribute matches the current page's URL
        if (link.href === currentUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


// JavaScript to control the slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 3 seconds
}
