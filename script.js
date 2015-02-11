
var startingHeight = document.getElementById("navigation").offsetHeight;
var deviceHeight = window.innerHeight;


$(document).ready(function(){

	

	$('#navigation').css('bottom','-elementHeight');

	$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:30,
    dots:false,
    touchDrag:true,
    // autoplay:true,
    responsive:{
        300:{
            items:8
        }
    }
});

	//autoplay for displaying websites

	var websites = [
		"http://rise-vision.github.io/content-templates/events/events.html",

		"http://swbloom.github.io/hotel/",

		"http://rise-vision.github.io/content-templates/restaurant-menuboard/restaurant-menuboard.html",

		"http://rise-vision.github.io/content-templates/restaurant-promotion/restaurant-promotion",

		"http://rise-vision.github.io/content-retail-qrcode/",

		"http://rise-vision.github.io/content-templates/school-calendar/school-calendar.html",

		"http://rise-vision.github.io/content-templates/teacher-profile/teacher-profile.html",

		"http://rise-vision.github.io/content-templates/teacher-profile/teacher-profile.html",
		
		"http://pcsandford.github.io/",

		"http://rise-vision.github.io/content-hospital/",

		"http://commondatastorage.googleapis.com/risemedialibrary-395c64e5-2930-460b-881e-009aabb157df/content-templates/school-lunch/school-lunch.html",

		"http://swbloom.github.io/",

		"http://rise-vision.github.io/cafe-template/src/index.html",

		"http://rise-vision.github.io/content-templates/retail/retail.html",

		"http://www.cameroncodes.com/webcomponents/"
	];


	var restartAutoPlay;
	var clearAutoPlay;
	var autoPlay;
	var restartTimer;

	var currentWebsite = 1;
	var length = websites.length;

	var autoPlayControl = function(){
		autoPlay = setInterval(function(){
		$('.display--main iframe').attr('src',websites[currentWebsite]);
		currentWebsite++;


		//show the loader image and remove on page load
		$('.display--main .holder--loader').css('opacity','1');

		$('iframe').load(function(){
			$('.display--main .holder--loader').css('opacity','0');
		});

		//when the loop reaches the end of the array, reset it to the start

		if (currentWebsite > length){
			currentWebsite = 0;
		} 

	}, 12000);

};


//call the autoPlayControl function once on initial page load
var initialCall = setTimeout(autoPlayControl,500);



	var restartAutoPlay = function(){
		console.log('test');
		autoPlayControl();
	}

	$('.owl-carousel div img').on('click',function(){
		if($('.owl-carousel div img').hasClass('selected')){
			$('.owl-carousel div img').removeClass('selected');
		}

		//add opacity of 1 to selected img tag
		$(this).addClass('selected');

		//stop autoplay of websites
		var clearAutoPlay = clearInterval(autoPlay);

		//restart autoplay after 20s of inactivity
		
		clearTimeout(restartTimer);
		var restartTimer = setTimeout(restartAutoPlay, 1000);


		//show the loader image and remove on page load
		$('.display--main .holder--loader').css('opacity','1');

		$('iframe').load(function(){
			$('.display--main .holder--loader').css('opacity','0');
		});

		//append data to display relevant webpage
		var mainImage = $(this).data('full');
		$('.display--main iframe').attr('src',mainImage);

		});

//controls for the navigation menu open/close
var navOpen = false;
 $(".holder--menubutton img").click(function() {
 	var elementHeight = $('#navigation').outerHeight();
      if (navOpen == false) {
           $("#navigation").animate({top:deviceHeight-elementHeight});
           navOpen = true;
      } else {
           $("#navigation").animate({top:'100%'});
           navOpen = false;
      }
 });

});