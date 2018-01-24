//banner的轮播================================================
//$("#bannerwrap>li").eq(0).css("display","none");
/**/	var Timer = setInterval(autoplay,900);
	var index = 0;
	function autoplay(){
		index++;
		if(index == $("#bannerwrap>li").length){
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
		Timer = setInterval(autoplay,900);
	})
	
	$("#bannoimg>li").hover(function(){
		clearInterval(Timer);
		index = $(this).index();
		$("#bannerwrap>li").eq(index).fadeIn(300)//css("display","block")
		                   .siblings().fadeOut(300);//css("display","none")
		$("#bannoimg>li").eq(index).addClass("activ")
						 .siblings().removeClass("activ");
		console.log($(this).index())
	},function(){
		Timer = setInterval(autoplay,900);
	})
	
	
//物流通知的轮播=====================================================
	var Timersay = setInterval(autoSay,900);
	var indexsay = 0;
	function autoSay(){
		indexsay++;
		if(indexsay == $("#say>li").length){
			$("#say").css({"top":0});
			indexsay = 1;
		}
		$("#say").animate({"top":-indexsay*28},500)
	}
	
	$("#say>li").hover(function(){
		clearInterval(Timersay);
	},function(){
		Timersay = setInterval(autoSay,900);
	})

//每日必看商品
$.ajax({
	type:"get",
	url:"json/indexday.json",
	success:function(res){
		console.log(res.length);
		var str = "";
		for(var i = 0 ; i < res.length;i++){
			var pro = res[i];
			str += `<li>
						<a href="${pro.url}">
							<p><img src="img/${pro.src}"/></p>
							<div>
								<h3>${pro.h3}</h3>
								<span>${pro.span}</span>
								<b>${pro.b}</b>
								<p>立即疯抢2</p>
							</div>
						</a>
					</li>`;
		}
		$("#daythingwrap").html(str);
	}
})
/**/
