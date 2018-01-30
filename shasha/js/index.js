//banner的轮播================================================
//$("#bannerwrap>li").eq(0).css("display","none");
	var Timer = setInterval(autoplay,900);
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
/*$.ajax({
	type:"get",
	url:("json/indexday.json?deta="+new Date().getTime()),
	success:function(res){
		console.log(res.day.length);
		var str = "";
		for(var i = 0 ; i < res.day.length;i++){
			var pro = res.day[i];
			str += `<li>
						<a href="${pro.href}">
							<p><img src="img/${pro.src}"/></p>
							<div>
								<h3>${pro.h3}</h3>
								<span>${pro.span}</span>
								<b>${pro.b}</b>
								<p>立即疯抢</p>
							</div>
						</a>
					</li>`;
		}
		$("#daythingwrap").html(str);
	}
})*/
$.ajax({
	type:"get",
	url:("json/indexday.json?deta="+new Date().getTime()),
	success:function(res){
		var lim = "";
		for(var i = 0 ; i < res.day.length;i++){
			var pro = res.day[i];
			lim += `<li>
						<a href="${pro.href}">
							<p><img src="img/${pro.src}"/></p>
							<div>
								<h3>${pro.h3}</h3>
								<span>${pro.span}</span>
								<b>${pro.b}</b>
								<p>立即疯抢</p>
							</div>
						</a>
					</li>`;
		}
		$("#daythingwrap").html(lim);
		
		
		var str = "";
		var dat = new Date();
		var dats = new Date().getTime();
		var hours = dat.getHours();

		/*var y = dat.getFullYear();
		var moth = dat.getMonth()+1;
		var day = dat.getDate();
		var minutes = dat.getMinutes();
		var seconds = dat.getSeconds();
		dat = y + "/" +moth + "/" + day + " " + 
				(hours>=10?hours:"0"+hours) + ":"+
				(minutes>=10?minutes:"0"+minutes) + ":"+
				(seconds>=10?seconds:"0"+seconds);
				alert(dat);
		var dats = new Date(dat).getTime();
		alert(dats);*/
		if(hours>=9){
//			alert(times);
			setInterval(function(){
				var sp = "";
				var dat = new Date();
				var dats = new Date().getTime();
				var dat1 = new Date();
				dat1.setDate(dat1.getDate()+1);
				var y1 = dat1.getFullYear();
				var moth1 = dat1.getMonth()+1;
				var day1 = dat1.getDate();
				dat1 = y1 + "/" +moth1 + "/" + day1 + " " + "09:00:00"
	//			alert(dat1);
				dat1s = new Date(dat1).getTime();
				var time = (dat1s - dats)/1000;
				var timeh = parseInt(time/3600);
				var timem = parseInt((time - timeh*3600)/60);
				var times = parseInt((time - timeh*3600 - timem*60));
				
				sp = `剩余&ensp;<span>${timeh >= 10?timeh:"0"+timeh}</span>:
						  <span>${timem>= 10?timem:"0"+timem}</span>:
						  <span>${times >= 10?times:"0"+times}</span>`;
				$(".time").html(sp);
//				console.log($("#time").html());
			},1000)
		}else{
			setInterval(function(){
				var sp = "";
				var dat = new Date();
				var dats = new Date().getTime();
				var dat1 = new Date();
				
				var y1 = dat1.getFullYear();
				var moth1 = dat1.getMonth()+1;
				var day1 = dat1.getDate();
				dat1 = y1 + "/" +moth1 + "/" + day1 + " " + "09:00:00"
	//			alert(dat1);
				dat1s = new Date(dat1).getTime();
				if(dat1s<=0){
					var dat = new Date();
					var dats = new Date().getTime();
					var dat1 = new Date();
					dat1.setDate(dat1.getDate()+1);
					var y1 = dat1.getFullYear();
					var moth1 = dat1.getMonth()+1;
					var day1 = dat1.getDate();
					dat1 = y1 + "/" +moth1 + "/" + day1 + " " + "09:00:00"
		//			alert(dat1);
					dat1s = new Date(dat1).getTime();
				}
				var time = (dat1s - dats)/1000;
				var timeh = parseInt(time/3600);
				var timem = parseInt((time - timeh*3600)/60);
				var times = parseInt((time - timeh*3600 - timem*60));
				
				sp = `剩余&ensp;<span>${timeh >= 10?timeh:"0"+timeh}</span>:
						  <span>${timem>= 10?timem:"0"+timem}</span>:
						  <span>${times >= 10?times:"0"+times}</span>`;
				$(".time").html(sp);
//				console.log($("#time").html());
			},1000)
		}
		for(var i = 0 ; i < res.limited.length;i++){
			var pro = res.limited[i];
			str += `<li data-index = "${i}">
						<a href="glass.html" class="limitedUla">
							<div><img src="img/${pro.src}"></div>
							<div class="limiteddiv">
								<p class = "time">剩余</p>
								<p>${pro.p2}</p>
								<p>${pro.p3}</p>
								<p>
									<span>${pro.p4span1}</span>
									<span>${pro.p4span2}</span>
								</p>
								<p>
									<b>已售0件</b><b>马上抢</b>
								</p>
							</div>
						</a>
					</li>`;
		}
		$("#limitedUl").html(str);
	}
})
//alert(new Date().getHours())

//楼梯效果的选项卡
$(window).scroll(function(){
	var scr = $(this).scrollTop();
	if(scr <= 795 || scr>=7800){
		$("#stair").css("display","none");
	}else{
		$("#stair").css({"display":"block","position":"fixed","top":50});
	}
	for(var i = 0 ; i < $(".stair_").length ; i++ ){
		var otop = $(".stair_").eq(i).offset().top;
		if(scr>=otop){
			$("#stair>li").eq(i).addClass("stair_active")
		   		    .siblings().removeClass("stair_active");
		}
	}
	
})

$("#stair>li").click(function(){
	var index = $(this).index();
	$(this).addClass("stair_active")
		   .siblings().removeClass("stair_active");
	var otop = $(".stair_").eq(index).offset().top;
	$("html,body").scrollTop(otop);
	alert(otop);
})

//$("#limitedUl")委托实现跳转  放大镜页面  
$("#limitedUl").on("click","li",function(){
//	alert($(this).data("index"));
	setCookie("index",JSON.stringify($(this).data("index")))
})

