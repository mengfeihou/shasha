require.config({
	paths : {
		"jquery" : "jspublic/jquery-1.11.1.min",//jquery这个键可以不加引号 加上也无妨
		"registerend":"registerend",
		"cookie":"jspublic/cookie"
	}
})
requirejs(["jquery","registerend","cookie"],function($,obj){
	
	$("form").submit(function(){
		
		if(flagname && flagpwd && flagqpwd && flagck){
			var json = {"name":$("#uname").val(),
						"pwd":$("#pwd").val()
						}
			setCookie("shop",JSON.stringify(json));
			return true;
		}else{
			return false;
		}
	})
	
//	alert($("#uname+span").html());
	var flagname = null;
	$("#uname").blur(function(){
		if(obj.yname($(this).val())){
			$(this).next().html("正确").css("color","#000");
			return flagname = true;
		}else{
			$(this).next().html("请输入邮箱、手机号，最少5个字符").css("color","red");
			return flagname = false;
		}
	}.bind($("#uname")));
	
	var flagpwd = null;
	$("#pwd").blur(function(){
		if(obj.ypwd($(this).val())){
			$(this).next().html("正确").css("color","#000");
			return flagpwd = true;
		}else{
			$(this).next().html("请输入邮箱、手机号，最少5个字符").css("color","red");
			return flagpwd = false;
		}
	}.bind($("#pwd")));
	
	var flagqpwd = null;
	$("#qpwd").blur(function(){
		if(obj.yqpwd($(this).val(),$("#pwd").val())){
			$(this).next().html("正确").css("color","#000");
			return  flagqpwd = true;
		}else{
			$(this).next().html("与密码不符").css("color","red");
			return flagqpwd = false;
		}
	}.bind($("#qpwd")));
	
	var flagck = null;
	$("#cke").blur(function(){
//		alert($(this).prop("checked"));
		if(obj.ych($(this))){
			$(this).next().next().html("正确").css("color","#000");
			return  flagck = true;
		}else{
			$(this).next().next().html("您没选中呢").css("color","red");
			return  flagck = false;
		}
	}.bind($("#cke")))
	
})
