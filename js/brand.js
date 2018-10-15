/*
* @Author: Administrator
* @Date:   2018-08-07 09:16:50
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-12 19:45:59
*/

$(document).ready(function(){
	var fresh = 0;
	var fresh_src = [
		"../images/brand/brand/4.webp",
		"../images/brand/brand/5.png",
		"../images/brand/brand/6.png",
		"../images/brand/brand/7.png",
		"../images/brand/brand/4.webp",
		"../images/brand/brand/6.png",
		"../images/brand/brand/7.png",
		"../images/brand/brand/8.webp",
		"../images/brand/brand/9.webp",
		"../images/brand/brand/10.webp",
		"../images/brand/brand/11.png",
		"../images/brand/brand/12.png",
		"../images/brand/brand/13.webp",
		"../images/brand/brand/14.png",
		"../images/brand/brand/15.webp",
		"../images/brand/brand/16.png",
		"../images/brand/brand/16.webp",
		"../images/brand/brand/17.png",
		"../images/brand/brand/17.webp",
		"../images/brand/brand/18.png",
		"../images/brand/brand/18.webp",
		"../images/brand/brand/19.png",
		"../images/brand/brand/19.webp",
		"../images/brand/brand/20.png",
		"../images/brand/brand/20.webp",
		"../images/brand/brand/21.png",
		"../images/brand/brand/21.webp",
		"../images/brand/brand/22.png",
		"../images/brand/brand/23.png",
		"../images/brand/brand/24.png",
		"../images/brand/brand/25.png",
	];
	var fresh_src1 = ["../images/brand/brand/2/1.webp",
		"../images/brand/brand/2/2.webp",
		"../images/brand/brand/2/3.webp",
		"../images/brand/brand/2/4.webp",
		"../images/brand/brand/2/5.webp",
		"../images/brand/brand/2/6.webp",
		"../images/brand/brand/2/7.webp",
		"../images/brand/brand/2/8.webp",
		"../images/brand/brand/2/9.webp",
		"../images/brand/brand/2/10.webp",
		"../images/brand/brand/2/11.webp",
		"../images/brand/brand/2/12.webp",
		"../images/brand/brand/2/13.webp",
		"../images/brand/brand/2/14.webp",
		"../images/brand/brand/2/15.webp",
		"../images/brand/brand/2/16.webp",
		"../images/brand/brand/2/17.webp",
		"../images/brand/brand/2/18.webp",
		"../images/brand/brand/2/19.webp",
		"../images/brand/brand/2/1.png",
		"../images/brand/brand/2/2.png",
		"../images/brand/brand/2/3.png",
		"../images/brand/brand/2/4.png",
		"../images/brand/brand/2/5.png",
		"../images/brand/brand/2/6.png",
		"../images/brand/brand/2/7.png",
		"../images/brand/brand/2/8.png",
		"../images/brand/brand/2/9.png",
		"../images/brand/brand/2/10.png"
	];
	var fresh_src2 = ["../images/brand/brand/3/1.jpg",
		"../images/brand/brand/3/1.webp",
		"../images/brand/brand/3/2.webp",
		"../images/brand/brand/3/3.webp",
		"../images/brand/brand/3/4.webp",
		"../images/brand/brand/3/5.webp",
		"../images/brand/brand/3/6.webp",
		"../images/brand/brand/3/7.webp",
		"../images/brand/brand/3/8.webp",
		"../images/brand/brand/3/9.webp",
		"../images/brand/brand/3/10.webp",
		"../images/brand/brand/3/11.webp",
		"../images/brand/brand/3/12.webp",
		"../images/brand/brand/3/13.webp",
		"../images/brand/brand/3/14.webp",
		"../images/brand/brand/3/15.webp",
		"../images/brand/brand/3/16.webp",
		"../images/brand/brand/3/17.webp",
		"../images/brand/brand/3/18.webp",
		"../images/brand/brand/3/1.png",
		"../images/brand/brand/3/11.png",
		"../images/brand/brand/3/3.png",
		"../images/brand/brand/3/4.png",
		"../images/brand/brand/3/5.png",
		"../images/brand/brand/3/6.png",
		"../images/brand/brand/3/7.png",
		"../images/brand/brand/3/8.png",
		"../images/brand/brand/3/9.png",
		"../images/brand/brand/3/10.png"
	];
	$('#brand').on('click','.refresh',function(){
		if(fresh > 1) {
			fresh = 0;
		}
		else {
			fresh++;
		}
		var $y_small_demo = $('.brand-item');
		console.log($y_small_demo.length);
		var time;
		fn2(fresh);

		function fn(time, callback) {
			setTimeout(function(){
				callback();
			}, time*1000+200);
		}
		function fn2(a){
			console.log("a"+a);
			for(let i = 0; i< $y_small_demo.length;i++) {
				// time = Math.random()*1 + 0.1;
				if(i <10)
				{
					time = (i%5)*0.1;
				}else if(i<20 && i>=10){
					time = (i%5)*0.1 + 0.5;
				}else {
					time = (i%5)*0.1 + 1;
				}
				$('.brand-item').eq(i).css("animation","y_rotateY linear 0.2s "+time+"s");
				$('.brand-item').eq(i).css("animation-play-state","running");
				fn(time, function() {
					if(a==1){
						$('.brand-item').eq(i).find("img").attr("src",fresh_src1[i]);
					}else if(a==2) {
						$('.brand-item').eq(i).find("img").attr("src",fresh_src2[i]);
					}else {
						$('.brand-item').eq(i).find("img").attr("src",fresh_src[i]);
					}
					$('.brand-item').eq(i).css("animation-play-state","paused");
					$('.brand-item').eq(i).css("animation","y_rotateY2 linear 0.2s "+0+"s");
					$('.brand-item').eq(i).css("animation-play-state","running");
				});

			}
		}
		
	});
})