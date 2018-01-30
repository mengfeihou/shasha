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
			var getcook = getCookie("shop");
			var arr = [];
			var json = {"name":$("#uname").val(),
						"pwd":$("#pwd").val()
						}
			if(getcook.length > 0){
				for(var i = 0 ; i < getcook.length ; i++){
					if(getcook[i].name == $("#uname").val()){
						
							if(getcook[i].name == $("#uname").val() && getcook[i].pwd == $("#pwd").val()){
							alert("哈哈哈 其实您是可以直接登录的吼吼");
							return true;
						}else{   	
							alert("您的账号已经被注册过了");
							return false;
						}
						
					}
				}
				arr = getcook;
				arr.push(json);
			}else{
					arr.push(json);
				}
			setCookie("shop",JSON.stringify(arr));
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
