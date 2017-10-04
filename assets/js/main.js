/*
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
var slideIndexOne = 1;
showSlidesOne(slideIndexOne);

function plusSlidesOne(nOne) {
  showSlidesOne(slideIndexOne += nOne);
}

function currentSlideOne(nOne) {
  showSlidesOne(slideIndexOne = nOne);
}

function showSlidesOne(nOne) {
  var iOne;
  var slidesOne = document.getElementsByClassName("mySlidesOne");
  var dotsOne = document.getElementsByClassName("dotOne");
  if (nOne > slidesOne.length) {slideIndexOne = 1} 
  if (nOne < 1) {slideIndexOne = slidesOne.length}
  for (i = 0; i < slidesOne.length; i++) {
      slidesOne[i].style.display = "none"; 
  }
  for (i = 0; i < dotsOne.length; i++) {
      dotsOne[i].className = dotsOne[i].className.replace(" active", "");
  }
  slidesOne[slideIndexOne-1].style.display = "block"; 
  dotsOne[slideIndexOne-1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

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
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);

function plusSlidesTwo(nTwo) {
  showSlidesTwo(slideIndexTwo += nTwo);
}

function currentSlideTwo(nTwo) {
  showSlidesTwo(slideIndexTwo = nTwo);
}

function showSlidesTwo(nTwo) {
  var iTwo;
  var slidesTwo = document.getElementsByClassName("mySlidesTwo");
  var dotsTwo = document.getElementsByClassName("dotTwo");
  if (nTwo > slidesTwo.length) {slideIndexTwo = 1} 
  if (nTwo < 1) {slideIndexTwo = slidesTwo.length}
  for (i = 0; i < slidesTwo.length; i++) {
      slidesTwo[i].style.display = "none"; 
  }
  for (i = 0; i < dotsTwo.length; i++) {
      dotsTwo[i].className = dotsTwo[i].className.replace(" active", "");
  }
  slidesTwo[slideIndexTwo-1].style.display = "block"; 
  dotsTwo[slideIndexTwo-1].className += " active";
}
(function($) {
	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

	});

})(jQuery);
