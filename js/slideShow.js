// jQuery


// $(' slideshow-container').hover(function(){
// 		$('.prev').animate({"left":"5px"}, "fast");
// 		$('.next').animate({"right":"5px"}, "fast");
// 	}, function() {
// 		$('.prev').animate({"left":"-50px"}, "fast")
// 		$('.next').animate({"right":"-50px"}, "fast")
// 	}
// );

var slideIndex = 1;


function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	// IDEA: console.log(slides[slideIndex-1]);
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

// PUNTUADAS
var slideIndex1 = 1;


function plusSlides1(n) {
	showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
	showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
	var i;
	var slides = document.getElementsByClassName("mySlidesPuntuadas");
	var dots = document.getElementsByClassName("dotPuntuadas");
	if (n > slides.length) {slideIndex1 = 1}
	if (n < 1) {slideIndex1 = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex1-1].style.display = "block";
	dots[slideIndex1-1].className += " active";
}

// ESTRENOS


var slideIndex2 = 1;


function plusSlides2(n) {
	showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
	showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
	var i;
	var slides = document.getElementsByClassName("mySlidesEstrenos");
	var dots = document.getElementsByClassName("dotEstrenos");
	if (n > slides.length) {slideIndex2 = 1}
	if (n < 1) {slideIndex2 = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex2-1].style.display = "block";

	dots[slideIndex2-1].className += " active";
}


//por generos

var slideIndex3 = 1;


function plusSlides3(n) {
	showSlides3(slideIndex2 += n);
}

function currentSlide3(n) {
	showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
	var i;
	var slides = document.getElementsByClassName("mySlidesGeneros");
	var dots = document.getElementsByClassName("dotGeneros");
	if (n > slides.length) {slideIndex2 = 1}
	if (n < 1) {slideIndex2 = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex3-1].style.display = "block";

	dots[slideIndex3-1].className += " active";
}
