define(function(){
	return {
		Dname : function(uname){
			var cook = getCookie("shop");
//			alert(document.cookie)
//			alert(JSON.stringify(getCookie("shop")));
			if(uname == cook.name){
				return true;
			}else{
				return false;
			}
		},
		Dpwd : function(pwd){
			var cook = getCookie("shop");
			if(cook.pwd == pwd){
				return true;
			}else{
				return false;
			}
		},
		Dck : function(ck){
			if(ck.prop("checked")){
				return true;
			}else{
				return false;
			}
		}
	}
})
