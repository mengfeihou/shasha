
var cook = getCookie("index");
alert(cook);
var str = `<div class="mid" id="mid" >
						<img src="img/data/big/m0${cook+1}.jpg" />
						<p id="mask"></p>
					</div>
					<div class="big" id="big">
						<img src="img/data/big/big0${cook+1}.jpg" id="bigimg"/>
					</div>
					<ul class="small">
						<li><img src="img/data/big/small0${cook+1}.jpg" /></li>
					</ul>`;
	$("#glal").html(str);


$.ajax({
	type:"get",
	url:("json/limited.json?deta="+new Date().getTime()),
	success : function(msg){
		console.log(msg[cook])
		var pro = msg[cook];
		var ostr = `<p class="p1" id="data" data-img="${pro.src}" data-price="${pro.p4span1}" data-name="瑞士宝丽美">${pro.p2}</p>
					<p class="p2">瑞士葆丽美 </p>
					<p class="p3">${pro.p3}</p>
					<p class="p4">数量：<span>-</span><span>1</span><span>+</span></p>
					<p class="p5">
						<span>特卖价</span>
						<span>￥${pro.p4span1}</span>
						<span>市场价${pro.p4span2}</span>
					</p>`;
		$("#glar").prepend(ostr);
	}
});

$("#mask").css("display","none");

$("#mid").hover(function(ee){
	var e = ee || event;
//	console.log(e.pageX);
	var mw = $("#mid").innerWidth();
	var mh = $("#mid").innerHeight();
	
	var pw = $("#mask").innerWidth();
	var ph = $("#mask").innerHeight();
	$("#mask").css("display","block");
//	var disx = $("#mid").offset().left + $("#mask").outerWidth()/2;
//	var disy = $("#mid").offset().top+ $("#mask").outerHeight()/2;
//	$("#mask").css({"left":30+"px","top":30+"px"});
//	console.log(e.pageY);
//	console.log($("#mask").outerHeight()/2);
//	console.log(disy);
		$("#mid").mousemove(function(ee){
			var e = ee || event;
			var disx = e.pageX - $("#mid").offset().left - $("#mask").outerWidth()/2;
			var disy = e.pageY - $("#mid").offset().top- $("#mask").outerHeight()/2;
	
	//		console.log(e.pageY);
			var x = Math.min(mw-pw,Math.max(0,disx));
			var y = Math.min(mh-ph,Math.max(0,disy));
			var count =$("#bigimg").parent().innerHeight()/$("#mask").innerHeight();
			$("#mask").css({"left":x+"px","top":y+"px"});
			$("#bigimg").css({"left":-x*count+"px","top":-y*count+"px"});
//			console.log(y)
		})
},function(){
	$("#mask").css("display","none");                                                                               
})


$("#btn").click(function(){
	if(confirm("要继续购物？")){
			var arr = [];
		var json = {
			src:$("#data").data("img"),
			name:"瑞士宝丽美",
			price:$("#data").data("price"),
			count:1
		}
		var getcook = getCookie("shoplist");
		if(getcook.length>0){
			arr = getcook;
			for(var i = 0 ; i < arr.length ; i++){
				if(arr[i].src == json.src && arr[i].price == json.price){
					arr[i].count++;
					setCookie("shoplist",JSON.stringify(arr));
					return;
				}
			}
			arr.push(json);
			
		}else{
			arr.push(json);
		}
		setCookie("shoplist",JSON.stringify(arr));
	}else{
		location.href = "shop.html";
	}
	
})
