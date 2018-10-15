$(document).ready(function(){
	skip();
});
function skip() {
	var num = 0;
	var skip = null;
	auto();
	$('#tmall').on('mouseover mouseout', '.floor-tab-head li', function(){
		if(event.type == 'mouseover') {
			clearInterval(skip);
			num = $(this).data('nn');
			alt(num);
		}else {
			auto();
		}
	});
	function alt(num) {
		$('.floor-tab-detail').eq(num).show();
		$('.floor-tab-detail').eq(num).siblings('.floor-tab-detail').hide();
		$('.floor-tab-head li').eq(num).addClass('floor-current-tab')
			.siblings('li').removeClass('floor-current-tab');
	}
	function auto(){
		skip = setInterval(function(){
			if(num > 0) {
				num = 0;
			}
			else {
				num = 1;
			}
			if(num == 1) {
				alt(num);
			}else {
				alt(num);
			}
		}, 2000);
	}
}