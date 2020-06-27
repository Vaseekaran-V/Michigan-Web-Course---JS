function checkEmail(){
    var email1 = document.getElementById('email_addr').value;
    var email2 = document.getElementById('email_cnfrm').value;

    if(email1 != email2){
        alert("Both emails are not matching");
        return false; //to check on submit
    }
}

