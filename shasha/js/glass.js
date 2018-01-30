
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
			$("#mask").css({"left":x+"px","top":y+"px"});
			console.log(y)
		})

	
},function(){
	$("#mask").css("display","none");                                                                               
})


