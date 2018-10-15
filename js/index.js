
$('.nav-body a[href^="#"]').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top}, {
			easing: 'easeOutQuad',
			duration: 1000
		});
});
$(window).scroll(function(e) {
	if(document.documentElement.scrollTop >  $('#left-nav8').offset().top-300 ){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','#000');
	}else if(document.documentElement.scrollTop >  $('#left-nav7').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','#64C332;');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}else if(document.documentElement.scrollTop >  $('#left-nav6').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','#18C9A9');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}else if(document.documentElement.scrollTop >  $('#left-nav5').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','#0AA7E9');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}else if(document.documentElement.scrollTop >  $('#left-nav4').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','#EB5E8D');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}else if(document.documentElement.scrollTop >  $('#left-nav3').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','#64C332');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}else if(document.documentElement.scrollTop >  $('#left-nav2').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav2').css('backgroundColor','#000000');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}else if(document.documentElement.scrollTop >  $('#left-nav1').offset().top-300){
		$('.nav-body .left-nav1').css('backgroundColor','#64C332');
		$('.nav-body .left-nav2').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav3').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav4').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav5').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav6').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav7').css('backgroundColor','rgba(0,0,0,0.6)');
		$('.nav-body .left-nav8').css('backgroundColor','rgba(0,0,0,0.6)');
	}

	if(document.documentElement.scrollTop > 500 ) {
		$('.nav-index-left').show();
		$('.nav-header, .nav-body > a').stop(true).animate({'width': '35px','height': '35px'},600);
		$('.nav-index-top').stop(true).slideDown();
	}else {
		$('.nav-header, .nav-body > a').stop(true).animate({'width': '0px','height': '0px'},600);
		$('.nav-index-top').stop(true).slideUp();
	}
});

 
