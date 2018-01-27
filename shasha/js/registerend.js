define(function(){
	return {
		yname : function(uname){
			var reg_tel = /^1[357]\d{9}$/;
			var reg_email = /^\w+@\w+(\.\w+)+$/;
			if(reg_tel.test(uname) || reg_email.test(uname)){
				return true;
			}else{
				return false;
			}
		},
		ypwd : function(pwd){
			var reg = /^.{6,16}$/;
			if(reg.test(pwd)){
				return true;
			}else{
				return false;
			}
		},
		yqpwd : function(newpwd,oldpwd){
			if(newpwd == oldpwd){
				return true;
			}else{
				return false;
			}
		},
		ych : function(ck){
			if(ck.prop("checked")){
				return true;
			}else{
				return false;
			}
		}
		
	}
})
