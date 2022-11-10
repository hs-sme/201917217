function login() {
		var username = document.getElementById("username");
		var pwd = document.getElementById("pwd");
		if(username.value == "") {alert("请随便输入一个用户名");}
		else if(pwd.value == "") {alert("请随便输入一个密码");}
		else { alert("登录成功！");}
}