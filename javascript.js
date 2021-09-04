var slideindex = 1;
showSlides(slideindex);

function plusSlide(n) {
    showSlides(slideindex += n)
}

function currentSlide(n) {
    showSlides(slideindex = n);
}

function showSlides(n) {
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

if (n > slides.length) {
    slideindex = 1;
}

if (n < 1) {
    slideindex = slides.length;
}

    for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
    }

    for (let index = 0; index < dots.length; index++) {
        dots[index].className.replace(" active","");
    }  

slides[slideindex-1].style.display = "block";
dots[slideindex-1].className += " active";
}
