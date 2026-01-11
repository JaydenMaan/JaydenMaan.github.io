const images = [
    "img/sleep1.png",
    "img/sleep2.png",
    "img/sleep3.png",
    "img/sleep4.png",
    "img/sleep5.png",
    // "img/bob.png",
];

let index = 0;
const imgElement = document.getElementById("slideshow");

setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
}, 1000); // 5000 ms = 5 seconds


let slideIndex = 1;
showSlides(slideIndex);

let slideIndex2 = 1;
showSlides2(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}


function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    slides2[slideIndex-1].style.display = "block";
}