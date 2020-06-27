function displayNickName(){
    if(document.getElementById('nickYes').checked){
        document.getElementById('nick').style.display = "inline";
        document.getElementById('nicknameField').setAttribute('required', true);
    }else{
        document.getElementById('nick').style.display = "none";
        document.getElementById('nicknameField').removeAttribute('required');
    }
}