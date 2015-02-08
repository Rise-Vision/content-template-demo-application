var thumbnailStartingHeight = document.getElementById('navigation').offsetHeight;
// document.getElementById('navigation').style.top = thumbnailStartingHeight;



var content = document.getElementById('navigationHolder');

$(document).ready(function(){

// 	$('main').ontouchmove = function(e){
// 	e.preventDefault();
// }


content.addEventListener('touchstart', function (event) {
    this.allowUp = (this.scrollTop > 0);
    this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
    this.slideBeginY = event.pageY;
});

content.addEventListener('touchmove', function (event) {
    var up = (event.pageY > this.slideBeginY);
    var down = (event.pageY < this.slideBeginY);
    this.slideBeginY = event.pageY;
    if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
    }
    else {
        event.preventDefault();
    }
});

//set initial starting position of thumbnail navigation area

var buttonOpenPosition = (window.screen.availHeight)-50;
var buttonClosePosition = (window.screen.availHeight)*0.3;

function setPosition(){
$('.button--navigation').css('bottom',buttonClosePosition);
}
setPosition();
// var navigationOpenPosition = (window.screen.availHeight)*0.01;
var deviceHeight = window.screen.availHeight;
//menu open and close function


	var navOpen = false;

	$('.button--navigation').on('click',function(){
		
		if(navOpen == false){
			// $('.holder--navigation').animate({top:'50px'});
			$('.holder--navigation').slideToggle();
			$(this).animate({bottom:buttonOpenPosition});
		//fade out Rise Logo
			$('.holder--background').fadeOut();
			navOpen = true;
		} else {
			// $('.holder--navigation').animate({top:'100%'});
			$('.holder--navigation').slideToggle();
			$(this).animate({bottom:buttonClosePosition});
		//fade in Rise logo
			$('.holder--background').fadeIn();
			navOpen = false;
		}	
	});


	
});

