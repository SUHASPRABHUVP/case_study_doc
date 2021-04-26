function validateappointment(){
    var pname1 =document.forms["appointment"]["pname_box"].value;
    var pnum =document.forms["appointment"]["phone_box"].value;
    var date =document.forms["appointment"]["start_date"].value;
    var time =document.forms["appointment"]["appt"].value;
    
    if(pname1==''){
        alert("enter patient name");
        return false;
    }
    
    if(pnum==''){
        alert("enter phone number");
        return false;
    }
    function validateEmail1() {
        var emailID = document.forms["appointment"]["email_box"].value;
        atpos =emailID.indexOf("@");
        dotpos =emailID.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        document.getElementById("email").focus() ; return false; }
        return( true ); }
  
        validateEmail1();

    if(date==''){
        alert("enter date");
        return false;
    }
    
    if(time==''){
        alert("enter time of appointment")
        return false;
    }
    else{
        alert("appontment fixed");
        return true;
    }

}
function reviewvalidate(){
    var pcname =document.forms["review"]["pcname_box"].value;
    var pc =document.forms["review"]["pc"].value;

    if(pcname==''&&pc==''){
        alert("enter name and comment appropriately");
        return false;
    }
    else{
        alert("commented");
        return true;
    }

}