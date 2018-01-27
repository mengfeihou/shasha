require.config({ //错误 require config
	paths : {
		jquery : "jspublic/jquery-1.11.1.min",
		loginend : "loginend",
		cookie : "jspublic/cookie"
	}
})

requirejs(["jquery","loginend","cookie"],function($,obj){
	$("form").submit(function(){
		if(flagname && flagpwd && flagck){
			return true;
		}else{
			return false;
		}
	});
	
	
	var flagname = null;
	$("#uname").blur(function(){
		if(obj.Dname($(this).val())){
			$(this).next().html("正确").css("color","#000");
			return flagname = true;
		}else{
			$(this).next().html("不正确吆  再仔细 想想").css("color","red");
			return flagname = false;
		}
	}.bind($("#uname")))
	
	var flagpwd = null;
	$("#pwd").blur(function(){
		if(obj.Dpwd($(this).val())){
			$(this).next().html("哈哈 厉害  还记得密码").css("color","#000");
			return flagpwd = true;
		}else{
			$(this).next().html("嗯  密码 好像还有些偏差哦").css("color","red");
			return flagpwd = false;
		}
	}.bind($("#pwd")));
	
	var flagck = null;
	$("#cke").blur(function(){
		if(obj.Dck($("#cke"))){
			$(this).next().next().html("选中了就好").css("color","#000");
			return flagck = true;
		}else{
			$(this).next().next().html("大傻子 这个还没选呢 ").css("color","red");
			return flagck = false;
		}
	})
})