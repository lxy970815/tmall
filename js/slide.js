/*
* @Author: Administrator
* @Date:   2018-08-08 09:25:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-12 16:13:24
*/
$(document).ready(function(){
	slide();
	
});
function slide() {
	var now = 0;
	$('#slide').on('mouseover', '.slide-nav-bar li',mouseoverEvent);
	// $('#slide').on('mouseover', '.slide-content', cancelMouse);
	// $('#slide').on('mouseout', '.slide-content', bindMouse);
	$('#slide').on('mouseout mouseover', '.slide-content', function(){
		if(event.type == 'mouseover') {
			cancelMouse();
		}else {
			bindMouse();
		}
	});
	var timer = null;
	bindMouse();
	function mouseoverEvent() {
		console.log('mouseOver');
		clearInterval(timer);
		before = now;
		now = $(this).data("index");
		change(before, now);
		bindMouse();
	}

	function change(before, now) {
		$('.main-banner').eq(before).fadeOut();
		$('.main-banner').eq(now).fadeIn();
		$('.slide-nav-bar li').eq(now).addClass('selected').siblings('li').removeClass('selected');
	}
	function cancelMouse() {
		clearInterval(timer);
	}
	function bindMouse() {
		timer = setInterval(function(){
		before = now;
		if(now > 4) {
			now = 0;
		}else {
			now++;
		}
		change(before, now);
	}, 2000);
	}
}
