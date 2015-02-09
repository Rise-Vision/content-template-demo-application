
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

	$('.owl-carousel div img').on('click',function(){
		if($('.owl-carousel div img').hasClass('selected')){
			$('.owl-carousel div img').removeClass('selected');
		}

		//add opacity of 1 to selected img tag
		$(this).addClass('selected');

		//clear the Rise Vision placeholder image
		$('.display--main .holder--logo img').css('opacity','0');

		//show the loader image and remove on page load
		$('.display--main .holder--loader').css('opacity','1');

		$('iframe').load(function(){
			$('.display--main .holder--loader').css('opacity','0');
		});

		//append data to display relevant webpage
		var mainImage = $(this).data('full');
		$('.display--main iframe').attr('src',mainImage);

		//timeout to remove loader after 3s

		});




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