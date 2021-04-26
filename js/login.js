function checkPasswordandName() {
    var password1 = document.forms["loginform"]["psw"].value;
    var user1 =document.forms["loginform"]["uname"].value;

    if (password1 != '' ||  user1 != '' )
		{
            alert("login success");
            setTimeout(function() {window.location = "index.html" });
           // return true;
        }
	else{
		alert("Password or user name is not right");
			//	return false;
		}
    }

//onclick="location.href='index.html'" 