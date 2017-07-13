/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-12 17:39:49
 * @version $Id$
 * @可由键盘操作行动的小鸟
 * 
 */

$(function(){
	var $bird = $('#bird');
	var bp = $bird.offset();//小鸟的方位
	var size = {
		width:  $bird.width(),
		height: $bird.height()
	};//获取小鸟的大小
	var speed = 10;//设定小鸟每次移动的距离

	$(document).keydown(function(event){
		var key = event.keyCode;
		$bird.removeClass().addClass('dir_' + key);
		switch(key){
			case 37:
				bp.left -= speed;
				bp.left = bp.left <= -size.width ? $(window).width():bp.left;
				break;
			case 38:
				bp.top -= speed;
				bp.top = bp.top <= -size.height ? $(window).height():bp.top;
				break;
			case 39:
				bp.left += speed;
				bp.left = bp.left >= $(window).width() ? -size.width:bp.left;
				break;
			case 40:
				bp.top += speed;
				bp.top = bp.top >= $(window).height() ? -size.height:bp.top;
				break;
		}
		$bird.offset(bp);
	});
})