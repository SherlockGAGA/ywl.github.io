// JavaScript Document	  
function reg()
    {	
	var db = openDatabase('contactdb','','local database demo',204800); 
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
		  
		db.transaction(function(tx){  
		var a=tx.executeSql('select * from zhuce1 where username="username" and password="password"',onSuccess,onError); 
		if(a.next()){
			response.sendRedirect("index1.jsp");
			out.println("<SCRIPT language=javascript>alert('登录成功！'); window.location='index.jsp';</script>");} 
			
			else{       out.println("<SCRIPT language=javascript>alert('用户名或密码不正确，请重新输入！'); window.location='zhuce.html';</script>"); }
		});  

    }