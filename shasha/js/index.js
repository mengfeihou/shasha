//banner的轮播
//$("#bannerwrap>li").eq(0).css("display","none");

/**/	var Timer = setInterval(autoplay,500);
	var index = 0;
	function autoplay(){
		index++;
		if(index == 7){
			index = 0;
		}
//		console.log(index);
		$("#bannerwrap>li").eq(index).fadeIn(300)//css("display","block")
		                   .siblings().fadeOut(300);//css("display","none")
		$("#bannoimg>li").eq(index).addClass("activ")
						 .siblings().removeClass("activ");
	}
	$("#bannerwrap>li").hover(function(){
		clearInterval(Timer);
//		console.log($(this).index())
	},function(){
/**/	Timer = setInterval(autoplay,500);
	})
