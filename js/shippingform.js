function billingFunction(){
    if(document.getElementById('same').checked){ //checking whether the radio button is checked
        var name = document.getElementById('shippingName').value; //saving both the shipping name and zipcode
        var zip = document.getElementById('shippingZip').value;

        document.getElementById('billingName').value = name;//updating the values
        document.getElementById('billingZip').value = zip;
    }else{
        document.getElementById('billingName').value = "";//removing the values if the box is unticked
        document.getElementById('billingZip').value = "";
    }
}