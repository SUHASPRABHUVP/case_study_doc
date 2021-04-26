function validate() {
  var lastname1 =document.forms["signupform"]["lname"].value;
    var firstname1 = document.forms["signupform"]["fname"].value;
    var password1 = document.forms["signupform"]["pwd"].value;
  //  var email1 =document.forms["regform"]["email"].value;
    var phno =document.forms["signupform"]["phonenumber"].value;
    var uage =document.forms["signupform"]["age"].value;

    if(lastname1 == '' && firstname1 == ''){
      alert("user name is not right");
      return false;
    }
    if (password1 == '')
		{
      alert("Password is not right");
          return false;
           // return true;
        }
    
   

    function validateEmail() {
      var emailID = document.forms["signupform"]["email"].value;
      atpos =emailID.indexOf("@");
      dotpos =emailID.lastIndexOf(".");
      if (atpos < 1 || ( dotpos - atpos < 2 )) {
      alert("Please enter correct email ID");
      document.getElementById("email").focus() ; return false; }
      return( true ); }

      validateEmail();

      if(phno ==''){
        alert("phone number is not right");
        return false;
      }
      if(uage ==''){
        alert("phone number is not right");
        return false;
      }
    else{
      alert("login success");
      setTimeout(function() {window.location = "login.html" });
      	return false;
      }
  

    }

//onclick="location.href='index.html'" 