/**
 * 
 * @authors Nika (you@example.org)
 * @date    2017-07-11 17:08:10
 * @version $Id$
 * @轮播效果-JS
 * 
 */
var i=0;
var timer;//timer为定时器，用于轮播内容切换；maxI获取当前轮播的
$(function(){
	var maxI = $('.carousel-img').size();
	$(".carousel-img").eq(0).show().siblings().hide();
	carouselAction();

	// 轮播底部选择按钮,选择相应内容展示
	$(".circle").hover(function(){
		i = $(this).index();
		show();
		clearInterval(timer);
	},function(){carouselAction();});

	// 轮播左侧按钮，展示上一个轮播内容
	$("#pre").click(function(){
		i = i < 1 ? maxI-1 : --i;
		clearInterval(timer);
		show();
		carouselAction();
	});
	// 轮播右侧按钮，展示下一个轮播内容
	$("#next").click(function(){
		i = i > maxI-2 ? 0 : ++i;
		clearInterval(timer);
		show();
		carouselAction();
	});
})

//图片展示
function show(){
	$(".carousel-img").eq(i).fadeIn(500).siblings().fadeOut(500);
	$(".circle").eq(i).addClass("bg").siblings().removeClass("bg");

}
// 图片自动轮播效果
function carouselAction(maxI){
	timer = setInterval(function(){
		i = i > maxI-2 ? 0 : ++i;
		show();
	},4000);
}