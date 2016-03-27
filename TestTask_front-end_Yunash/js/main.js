$(document).ready(function(){
	$(window).scroll(function(){
  		if ($(this).scrollTop() > 0) {
   			$('header').addClass('scroll');
   		}
  		else{
   			$('header').removeClass('scroll');
   		}
 	});
});

$('.pages li').click(function(e) {
  e.preventDefault();
  $('.pages li').removeClass('pages-active');
  $(this).addClass('pages-active');
});


